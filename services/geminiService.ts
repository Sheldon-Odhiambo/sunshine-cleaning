import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Gemini AI using server-side env variable
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Endpoint for cleaning advice
app.post("/api/cleaning-advice", async (req, res) => {
  const { history, userInput } = req.body;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map((m: any) => ({ role: m.role, parts: [{ text: m.text }] })),
        { role: "user", parts: [{ text: userInput }] },
      ],
      config: {
        systemInstruction: `You are the AI assistant for Sunshine Cleaning Enterprise, an ANU student initiative. Keep answers professional, concise, and friendly. Include booking info and contact 0705899851.`,
        temperature: 0.7,
      },
    });

    res.json({ text: response?.text || "Sorry, couldn't process. Call 0705899851." });
  } catch (error) {
    console.error(error);
    res.json({ text: "I'm offline. Contact 0705899851." });
  }
});

// Endpoint for booking confirmation
app.post("/api/booking-confirmation", async (req, res) => {
  const { booking, ref } = req.body;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a warm, professional booking confirmation message.
Name: ${booking.name}
Service: ${booking.service}
Date: ${booking.date}
Address: ${booking.address}
Ref: ${ref}
Send as if via SMS/WhatsApp. Include contact 0705899851.`,
      config: { temperature: 0.8 },
    });

    res.json({ text: response?.text || `Hi ${booking.name}, booking received. Our ANU team will contact you. Contact: 0705899851.` });
  } catch (error) {
    console.error(error);
    res.json({ text: `Hi ${booking.name}, booking received. Our ANU team will contact you. Contact: 0705899851.` });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));