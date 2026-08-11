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
  
  const authHeader = req.headers.authorization;
  if (authHeader?.startsWith("Bearer ")) {
    const token = authHeader.slice(7);
    try {
      const payload = JSON.parse(Buffer.from(token.split(".")[1], "base64url").toString());
      if (payload.sub) return payload.sub;
    } catch {
      // ignore
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

function generateDemoResponse(message: string, userName: string, level: string): string {
  const lower = message.toLowerCase().trim();

  // Specific: "Hola como estas" without accents
  if (lower === "hola como estas" || lower === "hola, como estas") {
    return `[ORIGINAL] ${message}\n[CORRECTED] Hola, ¿cómo estás?\n[EXPLANATION] Two things to remember: 1) Questions in Spanish need opening ¿ and closing ? 2) "cómo" (how) and "estás" (you are) need accent marks. Don't worry — accents take practice!\n\n¡Hola ${userName}! Estoy muy bien, gracias. ¿Y tú? ¿Cómo te va con tu español?`;
  }

  // Greetings
  if (lower.includes("hola") || lower.includes("buenos") || lower.includes("buenas")) {
    return `¡Hola ${userName}! ¡Qué gusto saludarte! ¿Cómo estás hoy? ¿Listo para practicar español?`;
  }

  // "How are you" type responses
  if (lower.includes("estoy") || lower.includes("bien") || lower.includes("mal") || lower.includes("regular") || lower.includes("más o menos")) {
    return `¡Me alegro de escucharte! Practiquemos un poco más. ¿Puedes decirme qué te gusta hacer en tu tiempo libre?`;
  }

  // Introductions
  if (lower.includes("me llamo") || lower.includes("mi nombre") || lower.includes("soy ")) {
    return `¡Mucho gusto! Es un placer conocerte. ¿De dónde eres? ¿Qué te motiva a aprender español?`;
  }

  // Numbers / counting attempt
  if (/\d/.test(message) || lower.includes("uno") || lower.includes("dos") || lower.includes("tres")) {
    return `¡Excelente! Los números son muy útiles. ¿Puedes contar hasta diez en español? Uno, dos, tres...`;
  }

  // Goodbye
  if (lower.includes("adiós") || lower.includes("adios") || lower.includes("hasta luego") || lower.includes("chao")) {
    return `¡Hasta luego, ${userName}! Ha sido un placer charlar contigo. ¡Nos vemos pronto! ¡Sigue practicando!`;
  }

  // Thank you
  if (lower.includes("gracias") || lower.includes("thank")) {
    return `¡De nada! Es un placer ayudarte. ¿Quieres practicar algo más?`;
  }

  // English messages — encourage Spanish
  if (/^[a-z\s\.,!?']+$/i.test(message) && !/[áéíóúñ¿¡ü]/i.test(message) && lower.length > 3) {
    const phrases: Record<string, string> = {
      A1: "¡Inténtalo en español! Puedes decir 'Hola, soy ${userName}'",
      A2: "¡Buen intento! Intenta responder en español. Empieza con 'Yo...'",
      B1: "Practiquemos en español. ¿Cómo dirías eso en castellano?",
      B2: "Vamos a mantener la conversación en español. ¿Cómo expresarías eso?",
      C1: "Todo en español, por favor. ¿Cómo formularías esa idea?",
      C2: "Sigamos en español. Expresa esa idea con tus propias palabras.",
    };
    return `¡Hola ${userName}! ${phrases[level as keyof typeof phrases] || phrases.A1}`;
  }

  // Default encouraging response
  return `¡Muy bien, ${userName}! Me encanta tu entusiasmo. Sigue practicando — cada conversación te acerca más a la fluidez. ¿Quieres que practiquemos algún tema en particular?`;
}

async function streamDemoResponse(res: NextApiResponse, message: string, userName: string, level: string) {
  const fullText = generateDemoResponse(message, userName, level);
  
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const words = fullText.split(" ");
  let current = "";
  
  for (const word of words) {
    current += (current ? " " : "") + word;
    res.write(`data: ${JSON.stringify({ content: current })}\n\n`);
    // Small delay to simulate typing
    await new Promise((r) => setTimeout(r, 25));
  }

  res.write("data: [DONE]\n\n");
  
  // Check for correction block
  const { displayMessage, correction } = parseCorrectionFromResponse(fullText);
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
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
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

  const isLocalSession = sessionId?.startsWith("local-chat-");

  try {
    const supabase = getSupabaseAdmin();

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

    // Save to Supabase for server-side sessions
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
      if (msgs) previousMessages.push(...msgs);
    }

    // Get lesson context
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

    // Use demo mode if no OpenAI API key
    if (!process.env.OPENAI_API_KEY) {
      await streamDemoResponse(res, message, userName, userLevel);
      return;
    }

    // Build system prompt for OpenAI
    const systemPrompt = buildTutorSystemPrompt({
      studentName: userName,
      level: userLevel,
      lesson: lessonContext,
      conversationHistory: previousMessages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });

    // OpenAI streaming
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

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