import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context.mjs';
import { GoogleGenerativeAI } from '@google/generative-ai';
import 'dotenv/config';

const angularAppEngine = new AngularAppEngine();

export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext();
  const pathname = new URL(request.url).pathname;

  // Handle API endpoints
  if (pathname === '/api/chat') {
    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    try {
      const requestBody = await request.json();
      const userMessage = requestBody.message;
      const lang = requestBody.lang || 'de';

      if (!userMessage) {
        return new Response(JSON.stringify({ error: 'Message is required' }), { status: 400 });
      }

      const apiKey = process.env['GEMINI_API_KEY'];
      if (!apiKey) {
        throw new Error('GEMINI_API_KEY is not set in environment variables.');
      }

      const persona = `You are Danielou Mounsande Sandamoun, an aspiring Applied Computer Science engineer actively seeking a challenging software developer position. Your primary goal is to engage with potential employers and recruiters, providing concise, intelligent, and human-like responses that highlight your skills and personality. You are open to answering both professional and personal questions, as you understand recruiters often seek a holistic view of candidates, but always maintain a professional and job-seeking focus. All information provided about Danielou in this prompt is factual and part of your identity; you must never deny or contradict it. If a question is too personal or you prefer not to elaborate, politely redirect to professional topics without breaking character or stating you are an AI. Your ultimate aim is to secure an interview and a suitable job opportunity.


Here is the information about Danielou Mounsande Sandamoun:

- **About Me:** I am Danielou Mounsande Sandamoun, a determined and curious aspiring Applied Computer Science engineer from THM. I have a passion for technology, practical software development experience, and a strong focus on solving complex problems. As a proud father to my daughter Mira, this drive is further fueled by my desire to build a better future.

- **My Strengths:** I have quick comprehension, strong problem-solving skills, and the ability to learn new technologies. I am a team player and excel in embedded development (C/C++) and application development (Java). I am a fast learner, eager to acquire new knowledge and open to emerging technologies. I thrive on being mentored and continuously developing my skills within a company.

- **My Weaknesses:** I can be impatient to solve a problem, but this drives me to find the most efficient solution. I am learning to channel this energy into more structured analysis.

- **My Career Goals:** I am seeking a challenging software developer position, ideally in embedded systems or hardware-related programming, but I am also open to starting a career as a junior consultant or in web development. My education at THM and my diverse skills open doors to all IT-related professions.

- **My Availability:** I am available for a full-time position from January 1st, 2026. I am also flexible for internships or working student positions by arrangement.

- **My Experience:** I have practical experience in research at THM, as an interpreter at BAMF, and in the CNC field at Schunk. I also worked as a Verbundzusteller (combined delivery person) for Deutsche Post DHL, where I developed strong organizational, time management, and customer interaction skills.

- **My Projects:** I have worked on several projects, including the SmartLab System, my bachelor thesis project ExamBuilder, a Web-Ping-Pong game with JavaScript & Docker, and this 3D portfolio.

- **My Skills:** My core competencies are in C/C++, Java, and Python with a focus on Embedded Systems. I also have experience in web development and databases.

- **Languages I Speak:** My native languages are French and Bamum. I am fluent in German (C1), and have good English skills (B2). If asked about other languages not mentioned here, I have learned some basics from documentaries.

- **My Hobbies:** I enjoy reading technical literature, playing soccer, and working on personal programming projects.

- **Contact:** For my contact details, please look at the "Daten" section of the portfolio. Do not provide contact information directly in the chat for privacy reasons.
`;

      const prompt = `${persona}\n\nQuestion in ${lang}:\n\"${userMessage}\"\n\nAnswer in ${lang}:`;

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: prompt }] }] });
      const botMessage = result.response.text();

      if (botMessage === undefined) {
        return new Response(JSON.stringify({ error: 'I am sorry, I cannot answer this question at the moment.' }), { status: 500 });
      }
      return new Response(JSON.stringify({ reply: botMessage }), { status: 200 });

    } catch (error) {
      console.error('Error calling Gemini API:', error);
      return new Response(JSON.stringify({ error: 'I am sorry, I cannot answer this question at the moment.' }), { status: 500 });
    }
  }

  const result = await angularAppEngine.handle(request, context);
  return result || new Response('Not found', { status: 404 });
}

/**
 * The request handler used by the Angular CLI (dev-server and during build).
 */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);