import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";
import { buildTutorSystemPrompt, StudentLevel } from "@/lib/ai/tutor-prompt";
import { parseCorrectionFromResponse } from "@/lib/ai/parse-correction";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const session = await getSession({ req });
  if (!session?.user?.id) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { message, sessionId, lessonId } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ message: "Message is required" });
  }

  try {
    // Get user info
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { name: true, level: true },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Get or create chat session
    let chatSessionId = sessionId;

    if (!chatSessionId) {
      const newSession = await prisma.chatSession.create({
        data: {
          userId: session.user.id,
          lessonId: lessonId || null,
          title: message.slice(0, 50) + (message.length > 50 ? "..." : ""),
        },
      });
      chatSessionId = newSession.id;
    } else {
      // Verify session belongs to user
      const existingSession = await prisma.chatSession.findFirst({
        where: { id: chatSessionId, userId: session.user.id },
      });
      if (!existingSession) {
        return res.status(403).json({ message: "Invalid session" });
      }
    }

    // Save user message
    await prisma.chatMessage.create({
      data: {
        sessionId: chatSessionId,
        role: "user",
        content: message,
      },
    });

    // Get conversation history
    const previousMessages = await prisma.chatMessage.findMany({
      where: { sessionId: chatSessionId },
      orderBy: { createdAt: "asc" },
      take: 20,
      select: { role: true, content: true },
    });

    // Get lesson context if linked
    let lessonContext = {
      topic: "General Spanish Conversation",
      vocabularyFocus: [] as string[],
      grammarFocus: [] as string[],
    };

    if (lessonId) {
      const lesson = await prisma.lesson.findUnique({
        where: { id: lessonId },
        select: { title: true, vocabularyJson: true, grammarJson: true },
      });
      if (lesson) {
        lessonContext.topic = lesson.title;
        try {
          const vocab = lesson.vocabularyJson as any;
          if (Array.isArray(vocab)) {
            lessonContext.vocabularyFocus = vocab.map((v: any) => v.spanish || v.word || "");
          }
        } catch {
          // ignore
        }
        try {
          const grammar = lesson.grammarJson as any;
          if (Array.isArray(grammar)) {
            lessonContext.grammarFocus = grammar.map((g: any) => g.title || g.topic || "");
          }
        } catch {
          // ignore
        }
      }
    }

    // Build system prompt
    const systemPrompt = buildTutorSystemPrompt({
      studentName: user.name || "Student",
      level: (user.level as StudentLevel) || "A1",
      lesson: lessonContext,
      conversationHistory: previousMessages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });

    // Set up streaming response
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    // Call OpenAI with streaming
    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        ...previousMessages.slice(-10).map((m) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })),
        { role: "user", content: message },
      ],
      stream: true,
      temperature: 0.7,
      max_tokens: 800,
    });

    let fullResponse = "";

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || "";
      if (content) {
        fullResponse += content;
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
      }
    }

    res.write("data: [DONE]\n\n");

    // Parse and save the complete response
    const { displayMessage, correction } = parseCorrectionFromResponse(fullResponse);

    await prisma.chatMessage.create({
      data: {
        sessionId: chatSessionId,
        role: "assistant",
        content: displayMessage,
        hasCorrection: !!correction,
        originalText: correction?.original || null,
        correctedText: correction?.corrected || null,
        explanation: correction?.explanation || null,
      },
    });

    // Send correction info if present
    if (correction) {
      res.write(
        `data: ${JSON.stringify({
          correction: {
            original: correction.original,
            corrected: correction.corrected,
            explanation: correction.explanation,
          },
        })}\n\n`
      );
    }

    res.end();
  } catch (error) {
    console.error("Chat error:", error);
    if (!res.writableEnded) {
      res.write(`data: ${JSON.stringify({ error: "Something went wrong" })}\n\n`);
      res.end();
    }
  }
}