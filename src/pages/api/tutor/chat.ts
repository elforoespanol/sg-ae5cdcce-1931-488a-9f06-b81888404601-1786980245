import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
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

function getUserIdFromRequest(req: NextApiRequest): string | undefined {
  const session = (req as any).__session;
  if (session?.user?.id) return session.user.id;
  
  // Check Authorization header first (more reliable in preview)
  const authHeader = req.headers.authorization;
  if (authHeader?.startsWith("Bearer ")) {
    const token = authHeader.slice(7);
    try {
      const payload = JSON.parse(Buffer.from(token.split(".")[1], "base64url").toString());
      if (payload.sub) return payload.sub;
    } catch {
      // ignore invalid token
    }
  }
  
  const cookie = req.headers.cookie;
  if (cookie) {
    const match = cookie.match(/sslid_auth=([^;]+)/);
    if (match) {
      try {
        const auth = JSON.parse(decodeURIComponent(match[1]));
        return auth.id;
      } catch {
        // ignore
      }
    }
  }
  return undefined;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!process.env.OPENAI_API_KEY) {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.write(`data: ${JSON.stringify({ content: "¡Hola! I'm currently unavailable due to a configuration issue. Please contact support to get the AI tutor up and running again. ¡Gracias!" })}\n\n`);
    res.write("data: [DONE]\n\n");
    return res.end();
  }

  const session = await getSession({ req });
  (req as any).__session = session;
  let userId = getUserIdFromRequest(req);
  let userName = "Student";
  let userLevel: StudentLevel = "A1";

  const { message, sessionId, lessonId } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ message: "Message is required" });
  }

  // For local sessions, we don't need Supabase
  const isLocalSession = sessionId?.startsWith("local-chat-");

  try {
    const supabase = getSupabaseAdmin();

    // Try to get user info from Supabase if available
    if (supabase && userId) {
      const { data: user } = await supabase
        .from("users")
        .select("name, level")
        .eq("id", userId)
        .single();
      if (user) {
        userName = user.name || "Student";
        userLevel = (user.level as StudentLevel) || "A1";
      }
    } else if (!userId && isLocalSession) {
      // For local sessions without auth, try to decode user from token payload
      const authHeader = req.headers.authorization;
      if (authHeader?.startsWith("Bearer ")) {
        const token = authHeader.slice(7);
        try {
          const payload = JSON.parse(Buffer.from(token.split(".")[1], "base64url").toString());
          userId = payload.sub || "local-user";
          userName = payload.name || "Student";
          userLevel = (payload.level as StudentLevel) || "A1";
        } catch {
          userId = "local-user";
        }
      } else {
        userId = "local-user";
      }
    }

    // Only save to Supabase for server-side sessions
    let chatSessionId = sessionId;
    if (!isLocalSession && supabase && userId && userId !== "local-user") {
      if (!chatSessionId) {
        const { data: newSession } = await supabase
          .from("chat_sessions")
          .insert({
            userId,
            lessonId: lessonId || null,
            title: message.slice(0, 50) + (message.length > 50 ? "..." : ""),
          })
          .select("id")
          .single();
        if (newSession) chatSessionId = newSession.id;
      }

      // Save user message
      if (chatSessionId) {
        await supabase.from("chat_messages").insert({
          sessionId: chatSessionId,
          role: "user",
          content: message,
        });
      }
    }

    // Get conversation history
    const previousMessages: Array<{ role: string; content: string }> = [];
    if (!isLocalSession && supabase && chatSessionId) {
      const { data: msgs } = await supabase
        .from("chat_messages")
        .select("role, content")
        .eq("sessionId", chatSessionId)
        .order("createdAt", { ascending: true })
        .limit(20);
      if (msgs) {
        previousMessages.push(...msgs);
      }
    }

    // Get lesson context if linked
    const lessonContext = {
      topic: "General Spanish Conversation",
      vocabularyFocus: [] as string[],
      grammarFocus: [] as string[],
    };

    if (lessonId && supabase) {
      const { data: lesson } = await supabase
        .from("lessons")
        .select("title, vocabularyJson, grammarJson")
        .eq("id", lessonId)
        .single();
      if (lesson) {
        lessonContext.topic = lesson.title;
        try {
          const vocab = lesson.vocabularyJson as any;
          if (Array.isArray(vocab)) {
            lessonContext.vocabularyFocus = vocab.map((v: any) => v.spanish || v.word || "");
          }
        } catch { /* ignore */ }
        try {
          const grammar = lesson.grammarJson as any;
          if (Array.isArray(grammar)) {
            lessonContext.grammarFocus = grammar.map((g: any) => g.title || g.topic || "");
          }
        } catch { /* ignore */ }
      }
    }

    // Build system prompt
    const systemPrompt = buildTutorSystemPrompt({
      studentName: userName,
      level: userLevel,
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

    // Parse and save the complete response (only for server sessions)
    const { displayMessage, correction } = parseCorrectionFromResponse(fullResponse);

    if (!isLocalSession && supabase && chatSessionId && userId !== "local-user") {
      await supabase.from("chat_messages").insert({
        sessionId: chatSessionId,
        role: "assistant",
        content: displayMessage,
        hasCorrection: !!correction,
        originalText: correction?.original || null,
        correctedText: correction?.corrected || null,
        explanation: correction?.explanation || null,
      });
    }

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