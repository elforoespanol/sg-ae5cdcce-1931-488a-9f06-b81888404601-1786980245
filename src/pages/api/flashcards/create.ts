import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";

function getUserIdFromRequest(req: NextApiRequest): string | null {
  // Try NextAuth session first
  const session = (req as any).session || null;
  if (session?.user?.id) return session.user.id;

  // Fallback to custom sslid_auth cookie
  const cookie = req.headers.cookie || "";
  const match = cookie.match(/sslid_auth=([^;]+)/);
  if (match) {
    try {
      const decoded = decodeURIComponent(match[1]);
      const parsed = JSON.parse(decoded);
      if (parsed.id) return parsed.id;
    } catch {
      // invalid cookie
    }
  }

  return null;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const userId = getUserIdFromRequest(req);
  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const { spanishText, englishText, exampleSentence, partOfSpeech, lessonId } = req.body;

    if (!spanishText || !englishText) {
      return res.status(400).json({ message: "spanishText and englishText are required" });
    }

    const flashcard = await prisma.flashcard.create({
      data: {
        userId,
        spanishText: spanishText.trim(),
        englishText: englishText.trim(),
        exampleSentence: exampleSentence || null,
        lessonId: lessonId || null,
      },
    });

    return res.status(200).json({ flashcard, message: "Flashcard created" });
  } catch (error) {
    console.error("Flashcard creation error:", error);
    return res.status(500).json({ message: "Failed to create flashcard" });
  }
}