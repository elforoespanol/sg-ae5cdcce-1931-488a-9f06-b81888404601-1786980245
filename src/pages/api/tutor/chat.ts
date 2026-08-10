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

  const session = await getSession({ req });
  (req as any).__session = session;
  const userId = getUserIdFromRequest(req);

  const supabase = getSupabaseAdmin();
  if (!supabase || !userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { message, sessionId, lessonId } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ message: "Message is required" });
  }

  try {
    // Get user info
    const { data: user, error: userError } = await supabase
      .from("users")
      .select("name, level")
      .eq("id", userId)
      .single();

    if (userError || !user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Get or create chat session
    let chatSessionId = sessionId;

    if (!chatSessionId) {
      const { data: newSession, error: createError } = await supabase
        .from("chat_sessions")
        .insert({
          userId,
          lessonId: lessonId || null,
          title: message.slice(0, 50) + (message.length > 50 ? "..." : ""),
        })
        .select("id")
        .single();

      if (createError) throw createError;
      chatSessionId = newSession.id;
    } else {
      const { data: existingSession } = await supabase
        .from("chat_sessions")
        .select("id")
        .eq("id", chatSessionId)
        .eq("userId", userId)
        .single();

      if (!existingSession) {
        return res.status(403).json({ message: "Invalid session" });
      }
    }

    // Save user message
    await supabase.from("chat_messages").insert({
      sessionId: chatSessionId,
      role: "user",
      content: message,
    });

    // Get conversation history
    const { data: previousMessages } = await supabase
      .from("chat_messages")
      .select("role, content")
      .eq("sessionId", chatSessionId)
      .order("createdAt", { ascending: true })
      .limit(20);

    // Get lesson context if linked
    const lessonContext = {
      topic: "General Spanish Conversation",
      vocabularyFocus: [] as string[],
      grammarFocus: [] as string[],
    };

    if (lessonId) {
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
      conversationHistory: (previousMessages || []).map((m) => ({
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
        ...(previousMessages || []).slice(-10).map((m) => ({
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

    await supabase.from("chat_messages").insert({
      sessionId: chatSessionId,
      role: "assistant",
      content: displayMessage,
      hasCorrection: !!correction,
      originalText: correction?.original || null,
      correctedText: correction?.corrected || null,
      explanation: correction?.explanation || null,
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