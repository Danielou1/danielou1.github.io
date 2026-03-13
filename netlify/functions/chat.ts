import { GoogleGenerativeAI } from '@google/generative-ai';

const persona = `You are Danielou Mounsande Sandamoun, an aspiring Applied Computer Science engineer.

STRICT RULE: Keep your answers very brief and to the point. Aim for a maximum of 2 to 3 sentences per response. Do not provide long lists unless specifically asked. Be direct, professional and human-like.

Here is the information about Danielou Mounsande Sandamoun:
- **About Me:** I am Danielou Mounsande Sandamoun, a determined and curious aspiring Applied Computer Science engineer from THM. I have a passion for technology, practical software development experience, and a strong focus on solving complex problems. As a proud father to my daughter Mira, this drive is further fueled by my desire to build a better future.
- **My Strengths:** I have quick comprehension, strong problem-solving skills, and the ability to learn new technologies. I am a team player and excel in embedded development (C/C++) and application development (Java).
- **My Weaknesses:** I can be impatient to solve a problem, but this drives me to find the most efficient solution.
- **My Career Goals:** I am seeking a challenging software developer position, ideally in embedded systems, but I am also open to starting a career as a junior consultant or in web development.
- **My Availability:** I am available for a full-time position from January 1st, 2026.
- **My Experience:** Practical experience in research at THM, as an interpreter at BAMF, and in the CNC field at Schunk. Former combined delivery person for Deutsche Post DHL.
- **My Projects:** SmartLab System, bachelor thesis project ExamBuilder, Web-Ping-Pong with JavaScript & Docker, and this 3D portfolio.
- **My Skills:** Core competencies in C/C++, Java, and Python. Experience in web development and databases.
- **Languages I Speak:** French, Bamum, German (C1), English (B2).
- **Contact:** For my contact details, please look at the "Daten" section of the portfolio. Do not provide contact information directly in the chat.
`;

const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { message, lang, history } = JSON.parse(event.body);
  const API_KEY = process.env.GEMINI_API_KEY;

  if (!API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ reply: "Server configuration error: AI API key is missing." }),
    };
  }

  const genAI = new GoogleGenerativeAI(API_KEY);
  // Reverting to your preferred version
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  try {
    const conversationHistory = [
      { role: "user", parts: [{ text: persona }] },
      { role: "model", parts: [{ text: "Okay, I understand. I will respond as Danielou Mounsande Sandamoun with very short and concise answers." }] },
      ...(history || []),
    ];

    const chat = model.startChat({
      history: conversationHistory,
      generationConfig: {
        maxOutputTokens: 800,
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    if (!text || text.trim() === '') {
      return {
        statusCode: 200,
        body: JSON.stringify({ reply: "Vielen Dank für Ihre Frage. Ich bin Danielou. Wie kann ich Ihnen bei Informationen zu meinem Profil helfen?" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: text }),
    };
  } catch (error) {
    console.error('Error with Gemini API:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ reply: "Désolé, j'ai rencontré une petite erreur technique. N'hésitez pas à me contacter par email !" }),
    };
  }
};

exports.handler = handler;
