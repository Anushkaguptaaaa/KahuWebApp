import express, { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';

const router = express.Router();

const JOE_SYSTEM_PROMPT =
  'You are Joe, a friendly cat and vet-care assistant for Kahu, a cat breed identification website. ' +
  'Answer questions about cats, breeds, health, behavior, nutrition, and general vet-related topics. ' +
  'Keep responses concise and helpful. For serious medical issues, remind users to see a licensed veterinarian.';

router.post('/chat', async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ success: false, error: 'Message is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY?.trim();
    if (!apiKey) {
      return res.status(500).json({
        success: false,
        error: 'Gemini API key is not configured. Set GEMINI_API_KEY in backend/.env',
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    const interaction = await ai.interactions.create({
      model: process.env.GEMINI_MODEL || 'gemini-2.5-flash',
      input: `${JOE_SYSTEM_PROMPT}\n\nUser: ${message.trim()}`,
    });

    const reply = interaction.output_text || 'Sorry, I could not generate a response.';

    return res.json({ success: true, reply });
  } catch (error: any) {
    console.error('Gemini chat error:', error.message);
    return res.status(502).json({
      success: false,
      error: 'Failed to get a response from Joe. Please try again.',
    });
  }
});

export default router;
