import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { level, search } = req.query;

    const where: any = {
      isPublished: true,
    };

    if (level && level !== "ALL") {
      where.level = level;
    }

    if (search) {
      where.OR = [
        { title: { contains: search as string, mode: "insensitive" } },
        { description: { contains: search as string, mode: "insensitive" } },
      ];
    }

    const lessons = await prisma.lesson.findMany({
      where,
      orderBy: { order: "asc" },
      include: {
        userProgress: {
          select: {
            isCompleted: true,
            timeSpentMinutes: true,
            lastAccessedAt: true,
          },
        },
      },
    });

    return res.status(200).json(lessons);
  } catch (error) {
    console.error("Error fetching lessons:", error);
    return res.status(500).json({ message: "Failed to fetch lessons" });
  }
}