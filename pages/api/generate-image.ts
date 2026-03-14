import type { NextApiRequest, NextApiResponse } from "next";
import { GoogleGenAI } from "@google/genai";

export const config = {
  api: {
    responseLimit: "4mb",
  },
};

type ResponseData = {
  imageUrl?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;
  if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error:
        "GEMINI_API_KEY is not configured. Add your key to .env.local — see .env.local.example for instructions.",
    });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp",
      contents: prompt.trim(),
      config: {
        responseModalities: ["TEXT", "IMAGE"],
      },
    });

    const parts = response.candidates?.[0]?.content?.parts;
    if (!parts) {
      return res.status(500).json({ error: "No response from model" });
    }

    for (const part of parts) {
      if (part.inlineData) {
        const { data, mimeType } = part.inlineData;
        return res.status(200).json({
          imageUrl: `data:${mimeType};base64,${data}`,
        });
      }
    }

    return res.status(500).json({
      error:
        "The model did not return an image. Try a more descriptive prompt.",
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Gemini API error:", message);
    return res.status(500).json({ error: message });
  }
}
