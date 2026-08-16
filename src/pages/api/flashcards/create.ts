import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const session = await getSession({ req });
  if (!session?.user?.id) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const { spanishText, englishText, exampleSentence, partOfSpeech, lessonId } = req.body;

    if (!spanishText || !englishText) {
      return res.status(400).json({ message: "spanishText and englishText are required" });
    }

    const flashcard = await prisma.flashcard.create({
      data: {
        userId: session.user.id,
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