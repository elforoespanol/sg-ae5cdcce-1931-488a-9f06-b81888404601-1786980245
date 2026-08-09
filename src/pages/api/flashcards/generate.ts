import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import OpenAI from "openai";
import { prisma } from "@/lib/prisma";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const session = await getSession({ req });
  if (!session?.user?.id) return res.status(401).json({ message: "Unauthorized" });

  try {
    const { lessonId, vocabulary, grammar, lessonTitle } = req.body;

    const lesson = await prisma.lesson.findUnique({ where: { id: lessonId } });
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });

    const prompt = `Create 10 Spanish flashcards for a language learner based on this lesson.
Lesson title: ${lessonTitle || lesson.title}
Vocabulary: ${JSON.stringify(vocabulary || lesson.vocabularyJson || [])}
Grammar focus: ${JSON.stringify(grammar || lesson.grammarJson || [])}

For each flashcard, provide:
- spanishText: The Spanish word or phrase
- englishText: English translation
- exampleSentence: A natural example sentence in Spanish

Return ONLY a JSON array in this format:
[{"spanishText":"...","englishText":"...","exampleSentence":"..."}]`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a Spanish language expert. Always respond with valid JSON arrays only." },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
    });

    const content = completion.choices[0].message.content || "[]";
    const jsonMatch = content.match(/\[.*\]/s);
    const cards = JSON.parse(jsonMatch ? jsonMatch[0] : "[]");

    const created = await prisma.flashcard.createMany({
      data: cards.map((c: any) => ({
        userId: session.user.id,
        lessonId,
        spanishText: c.spanishText,
        englishText: c.englishText,
        exampleSentence: c.exampleSentence,
      })),
    });

    return res.status(200).json({ count: created.count, cards });
  } catch (error) {
    console.error("Flashcard generation error:", error);
    return res.status(500).json({ message: "Failed to generate flashcards" });
  }
}