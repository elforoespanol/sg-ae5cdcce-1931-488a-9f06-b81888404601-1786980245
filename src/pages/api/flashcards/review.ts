import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";
import { calculateNextReview } from "@/lib/spaced-repetition";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (!session?.user?.id) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (req.method === "GET") {
    try {
      const cards = await prisma.flashcard.findMany({
        where: { userId: session.user.id },
        orderBy: [{ nextReviewDate: "asc" }, { createdAt: "desc" }],
        take: 20,
      });
      return res.status(200).json({ cards });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to fetch cards" });
    }
  }

  if (req.method === "POST") {
    try {
      const { flashcardId, rating } = req.body;
      const card = await prisma.flashcard.findFirst({
        where: { id: flashcardId, userId: session.user.id },
      });
      if (!card) return res.status(404).json({ message: "Card not found" });

      const schedule = calculateNextReview(
        { interval: card.interval, easeFactor: card.easeFactor, repetitions: card.repetitions },
        rating
      );

      const updated = await prisma.flashcard.update({
        where: { id: flashcardId },
        data: {
          interval: schedule.interval,
          easeFactor: schedule.easeFactor,
          repetitions: schedule.repetitions,
          nextReviewDate: schedule.nextReviewDate,
          lastReviewDate: new Date(),
          lastRating: rating,
          totalReviews: { increment: 1 },
          totalCorrect: { increment: rating >= 2 ? 1 : 0 },
          isMastered: schedule.interval >= 21,
          updatedAt: new Date(),
        },
      });

      await prisma.flashcardReviewLog.create({
        data: {
          flashcardId,
          userId: session.user.id,
          rating,
          reviewedAt: new Date(),
        },
      });

      return res.status(200).json({ card: updated });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to submit review" });
    }
  }

  if (req.method === "DELETE") {
    try {
      const { id } = req.query;
      if (!id || typeof id !== "string") {
        return res.status(400).json({ message: "ID required" });
      }
      await prisma.flashcard.deleteMany({
        where: { id, userId: session.user.id },
      });
      return res.status(200).json({ message: "Deleted" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to delete" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}