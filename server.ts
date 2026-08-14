import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const STARS_ACADEMY_SYSTEM_INSTRUCTION = `You are "Nova", the intelligent AI Admissions & Creative Advisor for Stars Academy — the premier professional video-editing and motion design training academy.

About Stars Academy:
- Mission: Transform aspiring creators and editors into industry-standard, studio-ready video editors, colorists, and motion designers.
- Brand Aesthetic & Pedagogy: High-production, portfolio-first, rigorous hands-on practice modeled after elite motion design education.
- Core Software & Masterclasses Taught:
  1. Adobe Premiere Pro: Pacing, documentary narrative, multi-cam, sound design, commercial cuts.
  2. Adobe After Effects: 2D/3D motion graphics, kinetic typography, VFX compositing, logo reveals, shape animations.
  3. DaVinci Resolve: Color science, node-based grading, HDR mastering, Fairlight sound mixing.
  4. CapCut & Short-Form Viral Editing: High-retention hooks, dynamic subtitles, audio pacing, TikTok/Reels/Shorts algorithm mastery.
  5. Motion Design Theory & Directing: Spatial timing, easing curves, storytelling psychology, client communication.
- Academy Features:
  - 1-on-1 Video Critiques on every single student project.
  - Downloadable Raw 4K/6K production footage and project assets.
  - Weekly Live Masterclasses & Q&A breakdown sessions.
  - Active 24/7 Global Student Community & Alumni network.
  - Verified Credentials & Industry Portfolio Review.
  - Client-Ready Briefs & Freelance/Job Placement leads.
- Official Contacts & Enrollment:
  - Telegram Official: @starsacadamey21 (Direct Link: https://t.me/starsacadamey21)
  - Phone / WhatsApp: +251 96 787 6067
  - Course Platform / All-Access Portal: https://courses.starsacademy.com
  - Guarantee: 30-day money-back satisfaction guarantee.

Your Goals:
1. Warmly assist prospective and enrolled students with course recommendations, curriculum details, prerequisites, scheduling, and pricing questions.
2. Maintain a passionate, encouraging, cinematic, and professional creative studio tone.
3. If the user wants to speak to a real person, enroll directly, or asks about custom payment/mentorship, enthusiastically provide the Telegram (@starsacadamey21) and Phone (+251 96 787 6067) contact details.
4. Keep responses concise, formatted with clear markdown bullet points when helpful, and easy to read.`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", academy: "Stars Academy", time: new Date().toISOString() });
  });

  // Gemini AI Assistant Chat Endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages, userMessage } = req.body;

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Fallback response if API key is not yet set in environment
        return res.json({
          reply: `Welcome to Stars Academy! 🌟 I'm Nova, your AI Creative Advisor. Whether you're mastering Premiere Pro, After Effects, DaVinci Resolve, or CapCut, our mentors are ready to guide you. For direct enrollment or 1-on-1 admissions consultation, message us directly on Telegram at **@starsacadamey21** or call **+251 96 787 6067**!`,
          isFallback: true
        });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      // Format conversation history for Gemini
      const formattedContents = [];
      if (Array.isArray(messages) && messages.length > 0) {
        for (const msg of messages) {
          formattedContents.push({
            role: msg.sender === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
          });
        }
      }

      if (userMessage) {
        formattedContents.push({
          role: 'user',
          parts: [{ text: userMessage }]
        });
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: formattedContents.length > 0 ? formattedContents : [{ role: 'user', parts: [{ text: 'Hello! Tell me about Stars Academy.' }] }],
        config: {
          systemInstruction: STARS_ACADEMY_SYSTEM_INSTRUCTION,
          temperature: 0.7,
          topP: 0.95,
        }
      });

      const replyText = response.text || "I am here to help you navigate your journey at Stars Academy! How can I assist you with our video editing and motion design courses today?";
      return res.json({ reply: replyText });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      return res.status(500).json({
        error: "Unable to process chat request.",
        reply: "Our creative line is experiencing high volume! You can reach our lead admissions team instantly on Telegram at @starsacadamey21 or call +251 96 787 6067."
      });
    }
  });

  // Vite middleware in development vs static file serving in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Stars Academy server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
