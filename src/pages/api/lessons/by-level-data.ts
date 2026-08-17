import { NextApiRequest, NextApiResponse } from "next";
import { A1_LESSONS } from "@/lib/a1-lessons";
import { A2_LESSONS } from "@/lib/a2-lessons-01-05";
import { B1_LESSONS } from "@/lib/b1-lessons";
import { B2_LESSONS } from "@/lib/b2-lessons";

const LESSONS_BY_LEVEL: Record<string, any[]> = {
  A1: A1_LESSONS,
  A2: A2_LESSONS,
  B1: B1_LESSONS,
  B2: B2_LESSONS,
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { level } = req.query;
  const upperLevel = (level as string)?.toUpperCase();

  if (!upperLevel || !LESSONS_BY_LEVEL[upperLevel]) {
    res.status(400).json({ error: "Invalid level" });
    return;
  }

  const lessons = LESSONS_BY_LEVEL[upperLevel];
  res.setHeader("Cache-Control", "public, max-age=86400");
  res.status(200).json({
    lessons,
    level: upperLevel,
    total: lessons.length,
  });
}