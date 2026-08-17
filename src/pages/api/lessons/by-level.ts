import { NextApiRequest, NextApiResponse } from "next";
import { A1_LESSONS } from "@/lib/a1-lessons";
import { A2_LESSONS } from "@/lib/a2-lessons-01-05";
import { B1_LESSONS } from "@/lib/b1-lessons";
import { B2_LESSONS } from "@/lib/b2-lessons";

const LESSON_MAP: Record<string, typeof A1_LESSONS> = {
  A1: A1_LESSONS,
  A2: A2_LESSONS,
  B1: B1_LESSONS,
  B2: B2_LESSONS,
};

interface LessonResponse {
  lessons: typeof A1_LESSONS;
  level: string;
  total: number;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LessonResponse | { error: string }>
) {
  const { level } = req.query;
  
  if (!level || typeof level !== "string") {
    return res.status(400).json({ error: "Level parameter required (A1, A2, B1, B2)" });
  }
  
  const upperLevel = level.toUpperCase();
  const lessons = LESSON_MAP[upperLevel];
  
  if (!lessons) {
    return res.status(404).json({ error: `Level ${upperLevel} not found` });
  }
  
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.status(200).json({
    lessons,
    level: upperLevel,
    total: lessons.length,
  });
}