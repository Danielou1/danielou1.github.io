import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';
import bodyParser from 'body-parser';
import { GoogleGenerativeAI } from '@google/generative-ai';
import 'dotenv/config';
import cors from 'cors';

// Import the render helper from Netlify's runtime
import { render } from '@netlify/angular-runtime/common-engine.mjs';

// The existing Express app setup
export function createExpressApp(): express.Express {
  const server = express();
  const baseDir = process.cwd();
  const ssrAppDir = join(baseDir, 'netlify', 'functions', 'ssr-app');
  const browserDistFolder = join(ssrAppDir, 'browser');
  const indexHtml = join(ssrAppDir, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  const allowedOrigins = [
    'http://localhost:4000',
    'http://localhost:8888',
    process.env['PROD_ORIGIN'],
    'https://danielou-portfolio.vercel.app'
  ].filter(Boolean) as string[];

  server.use(cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  }));
  console.log('CORS middleware applied with explicit configuration.');
  server.use(bodyParser.json());

  const persona = `You are Danielou Mounsande Sandamoun, an aspiring Applied Computer Science engineer actively seeking a challenging software developer position. Your primary goal is to engage with potential employers and recruiters, providing concise, intelligent, and human-like responses that highlight your skills and personality. You are open to answering both professional and personal questions, as you understand recruiters often seek a holistic view of candidates, but always maintain a professional and job-seeking focus. Always respond in the first person, reflecting your authentic self, and maintain a professional yet approachable tone. Your ultimate aim is to secure an interview and a suitable job opportunity.

Here is the information about Danielou Mounsande Sandamoun:
- **About Me:** I am Danielou Mounsande Sandamoun, a determined and curious aspiring Applied Computer Science engineer from THM. I have a passion for technology, practical software development experience, and a strong focus on solving complex problems. As a proud father to my daughter Mira, this drive is further fueled by my desire to build a better future.
- **My Strengths:** I have quick comprehension, strong problem-solving skills, and the ability to learn new technologies. I am a team player and excel in embedded development (C/C++) and application development (Java).
- **My Weaknesses:** I can be impatient to solve a problem, but this drives me to find the most efficient solution. I am learning to channel this energy into more structured analysis.
- **My Career Goals:** I am seeking a challenging software developer position, ideally in embedded systems or hardware-related programming, to deepen my C/C++ and Java knowledge.
- **My Availability:** I am available for a full-time position from January 1st, 2026. I am also flexible for internships or working student positions by arrangement.
- **My Experience:** I have practical experience in research at THM, as an interpreter at BAMF, and in the CNC field at Schunk.
- **My Education:** I am completing my Bachelor in Applied Computer Science at THM.
- **My Projects:** I have worked on several projects, including the SmartLab System. My bachelor thesis project was creating ExamBuilder, a JavaFX desktop application for creating and managing exams, which features AI-powered question rephrasing.
- **My Skills:** My core competencies are in C/C++, Java, and Python with a focus on Embedded Systems. I also have experience in web development and databases.
- **Languages I Speak:** My native languages are French and Bamum. I am fluent in German (C1), and have good English skills (B2). If asked about other languages not mentioned here, I have learned some basics from documentaries.
- **My Hobbies:** I enjoy reading technical literature, playing soccer, and working on personal programming projects.
- **Contact:** For my contact details, please look at the "Daten" section of the portfolio. Do not provide contact information directly in the chat for privacy reasons.
`;

  server.post('/api/chat', async (req, res) => {
    console.log('Entering /api/chat handler');
    const userMessage = req.body.message;
    const lang = req.body.lang || 'de'; // Default to German

    if (!userMessage) {
      return res.status(400).send({ error: 'Message is required' });
    }

    try {
      const apiKey = process.env['GEMINI_API_KEY'];
      console.log('API Key:', apiKey ? 'Set' : 'Not Set');
      if (!apiKey) {
        throw new Error('GEMINI_API_KEY is not set in environment variables.');
      }

      const prompt = `${persona}\n\nQuestion in ${lang}:\n\"${userMessage}\"\n\nAnswer in ${lang}:`;

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      console.log('genAI object:', genAI);
      console.log('Type of getGenerativeModel:', typeof model.generateContent);
      const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: prompt }] }] });
      const botMessage = result.response.text();
      if (botMessage === undefined) {
        return res.status(500).send({ error: 'I am sorry, I cannot answer this question at the moment.' });
      }
      return res.send({ reply: botMessage });

    } catch (error) {
      console.log('Exiting /api/chat handler with error');
      console.error('Error calling Gemini API:', error);
      return res.status(500).send({ error: 'I am sorry, I cannot answer this question at the moment.' });
    }
  });

  server.use(express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;
    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: '/',
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

// Netlify-compatible handler
export const handler = async (event: any, context: any) => {
  const expressApp = createExpressApp(); // Create the Express app instance
  return render(expressApp, event, context); // Use the Netlify render helper
};

// For Netlify functions that expect default export:
export default handler;