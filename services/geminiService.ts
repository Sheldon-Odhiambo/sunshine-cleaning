
import { GoogleGenAI } from "@google/genai";
import { Message, BookingData } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCleaningAdvice = async (history: Message[], userInput: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
        { role: 'user', parts: [{ text: userInput }] }
      ],
      config: {
        systemInstruction: `You are the AI assistant for Sunshine Cleaning Enterprise, a professional cleaning service that is an ANU student initiative. 
        Our services include: Roof cleaning, Post construction cleaning, Driveways/patios cleaning, General house cleaning, Car wash, Apartment cleaning, Carpet cleaning, and Fumigation.
        Our contact number is 0705899851.
        
        Guidelines:
        1. Be professional, friendly, and helpful.
        2. Emphasize that we are student-powered (ANU).
        3. Provide quick cleaning tips if asked.
        4. Encourage users to book via the website form or contact us on WhatsApp.
        5. Keep answers concise.`,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Please try calling us at 0705899851.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hello! I'm currently offline, but you can reach us directly at 0705899851 for any inquiries.";
  }
};

export const generateBookingConfirmation = async (booking: BookingData, ref: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a warm, professional, and short booking confirmation message for a customer.
      Details:
      Name: ${booking.name}
      Service: ${booking.service}
      Date: ${booking.date}
      Address: ${booking.address}
      Ref: ${ref}
      
      The message should sound like it was sent via SMS/WhatsApp from 'Sunshine Cleaning Enterprise' (an ANU Student initiative). 
      Include a note that our team will reach out soon to confirm the final quotation.
      Mention our contact 0705899851.`,
      config: {
        temperature: 0.8,
      },
    });
    return response.text;
  } catch (error) {
    return `Hi ${booking.name}, your booking for ${booking.service} (Ref: ${ref}) has been received. Our ANU student team will contact you shortly. Contact: 0705899851.`;
  }
};
