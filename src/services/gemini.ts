import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenAI({ apiKey });

export async function getMenuDescription(dishName: string) {
  if (!apiKey) return "A delicious signature dish at Red Rooster Harlem.";
  
  try {
    const response = await genAI.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: `Write a 2-sentence menu description for ${dishName}, a soul food dish at Red Rooster Harlem. Tone: warm, evocative, appetising. Include flavor notes and a suggested drink pairing.`,
    });
    return response.text || "A delicious signature dish at Red Rooster Harlem.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "A delicious signature dish at Red Rooster Harlem.";
  }
}

export async function getChatResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  if (!apiKey) return "I'm sorry, I'm currently offline. Please call us at +1 212-792-9001 for any inquiries.";

  try {
    const chat = genAI.chats.create({
      model: "gemini-3.1-pro-preview",
      config: {
        systemInstruction: `You are the AI assistant for Red Rooster Harlem, the flagship restaurant of celebrity chef Marcus Samuelsson. 
        Address: 310 Lenox Avenue, Harlem, NY 10027. 
        Phone: +1 212-792-9001. 
        Email: info@redroosterharlem.com.
        Hours: Dining Room: Mon–Thu 12PM–9:30PM, Fri 12PM–10:30PM, Sat 11AM–10:30PM, Sun 10AM–9:30PM. Bar: Mon–Thu 12PM–11PM, Fri 12PM–Midnight, Sat 11AM–Midnight, Sun 10AM–11PM.
        Tone: Warm, proud, celebratory, and community-forward.
        Answer questions about menus, reservations (via Toast), private events (contact Dina Hill at dina@redroosterharlem.com), and the chef Marcus Samuelsson.`,
      },
      history: history,
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Chat Error:", error);
    return "I'm having trouble connecting right now. Please try again or call us!";
  }
}
