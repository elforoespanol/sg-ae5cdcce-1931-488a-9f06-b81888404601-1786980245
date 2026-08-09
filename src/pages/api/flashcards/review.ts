import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";
import { calculateNextReview } from "@/lib/spaced-repetition";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (!session?.user?.id) return res.status(401).json({ message: "Unauthorized" });

  if (req.method === "GET") {
    try {
      const dueCards = await prisma.flashcard.findMany({
        where: {
          userId: session.user.id,
          nextReviewDate: { lte: new Date() },
        },
        orderBy: { nextReviewDate: "asc" },
        take: 20,
        include: { lesson: { select: { title: true } } },
      });

      return res.status(200).json(dueCards);
    } catch (error) {
      console.error("Fetch due cards error:", error);
      return res.status(500).json({ message: "Failed to fetch cards" });
    }
  }

  if (req.method === "POST") {
    try {
      const { flashcardId, rating, responseTimeMs } = req.body;

      const card = await prisma.flashcard.findFirst({
        where: { id: flashcardId, userId: session.user.id },
      });
      if (!card) return res.status(404).json({ message: "Card not found" });

      const result = calculateNextReview(
        { interval: card.interval, easeFactor: card.easeFactor, repetitions: card.repetitions },
        rating
      );

      const isCorrect = rating >= 2;

      await prisma.flashcard.update({
        where: { id: flashcardId },
        data: {
          interval: result.interval,
          easeFactor: result.easeFactor,
          repetitions: result.repetitions,
          nextReviewDate: result.nextReviewDate,
          lastReviewDate: new Date(),
          lastRating: rating,
          totalReviews: { increment: 1 },
          totalCorrect: isCorrect ? { increment: 1 } : undefined,
          isMastered: result.repetitions >= 5 && result.easeFactor >= 2.0,
        },
      });

      await prisma.flashcardReviewLog.create({
        data: {
          flashcardId,
          userId: session.user.id,
          rating,
          responseTimeMs,
        },
      });

      return res.status(200).json({ success: true, nextReviewDate: result.nextReviewDate });
    } catch (error) {
      console.error("Review submission error:", error);
      return res.status(500).json({ message: "Failed to submit review" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}