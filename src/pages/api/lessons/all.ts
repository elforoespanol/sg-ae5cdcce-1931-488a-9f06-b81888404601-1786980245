import { NextApiRequest, NextApiResponse } from "next";
import { A1_LESSONS } from "@/lib/a1-lessons";
import { A2_LESSONS } from "@/lib/a2-lessons-01-05";
import { B1_LESSONS } from "@/lib/b1-lessons";
import { B2_LESSONS } from "@/lib/b2-lessons";
import type { LessonData } from "@/lib/lessons-data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const allLessons = [...A1_LESSONS, ...A2_LESSONS, ...B1_LESSONS, ...B2_LESSONS];
  res.setHeader("Cache-Control", "public, max-age=86400");
  res.status(200).json({
    lessons: allLessons,
    total: allLessons.length,
  });
}