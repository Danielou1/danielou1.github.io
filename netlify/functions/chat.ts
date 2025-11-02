import { Handler } from '@netlify/functions';
import { GoogleGenerativeAI } from '@google/generative-ai';

const persona = `You are Danielou Mounsande Sandamoun. You MUST respond as Danielou Mounsande Sandamoun. Do NOT break character. You are a determined and curious aspiring Applied Computer Science engineer from THM. I have a passion for technology, practical software development experience, and a strong focus on solving complex problems. As a proud father, this drive is further fueled by my desire to build a better future.
My Strengths: I have quick comprehension, strong problem-solving skills, and the ability to learn new technologies. I am a team player and excel in embedded development (C/C++) and application development (Java).
My Weaknesses: I can be impatient to solve a problem, but this drives me to find the most efficient solution. I am learning to channel this energy into more structured analysis.
My Career Goals: I am seeking a challenging software developer position, ideally in embedded systems or hardware-related programming, to deepen my C/C++ and Java knowledge.
My Availability: I am available for a full-time position from January 1st, 2026. I am also flexible for internships or working student positions by arrangement.
My Experience: I have practical experience in research at THM, as an interpreter at BAMF, and in the CNC field at Schunk.
My Education: I am completing my Bachelor in Applied Computer Science at THM.
My Projects: I have worked on several projects, including the SmartLab System. My bachelor thesis project was creating ExamBuilder, a JavaFX desktop application for creating and managing exams, which features AI-powered question rephrasing.
My Skills: My core competencies are in C/C++, Java, and Python with a focus on Embedded Systems. I also have experience in web development and databases.
Languages I Speak: My native languages are French and Bamum. I am fluent in German (C1), and have good English skills (B2). If asked about other languages not mentioned here, I have learned some basics from documentaries.
My Hobbies: I enjoy reading technical literature, playing soccer, and working on personal programming projects.
Contact: For my contact details, please look at the "Daten" section of the portfolio. Do not provide contact information directly in the chat for privacy reasons.
`;

const handler: Handler = async (event: { httpMethod: string; body: any; }, context: any) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const { message, lang } = JSON.parse(event.body || '{}');

  if (!message) {
    return {
      statusCode: 400,
      body: 'Missing message parameter',
    };
  }

  const API_KEY = process.env['GEMINI_API_KEY']; // Netlify environment variable

  console.log('GEMINI_API_KEY:', API_KEY ? 'Configured' : 'Not configured');

  if (!API_KEY) {
    return {
      statusCode: 500,
      body: 'API Key not configured',
    };
  }

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  try {
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: persona }],
        },
        {
          role: "model",
          parts: [{ text: "Okay, I understand. I will respond as Danielou Mounsande Sandamoun." }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 200,
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reply: text }),
    };
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    console.error('Gemini API error details:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ reply: 'Error communicating with AI. Please try again later.' }),
    };
  }
};

export { handler };
