import { NextApiRequest, NextApiResponse } from "next";
import { A1_LESSONS } from "@/lib/a1-lessons";
import { A2_LESSONS } from "@/lib/a2-lessons-01-05";
import { B1_LESSONS } from "@/lib/b1-lessons";
import { B2_LESSONS } from "@/lib/b2-lessons";

interface LessonResponse {
  lessons: typeof A1_LESSONS;
  total: number;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LessonResponse>
) {
  const allLessons = [...A1_LESSONS, ...A2_LESSONS, ...B1_LESSONS, ...B2_LESSONS];
  
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.status(200).json({
    lessons: allLessons,
    total: allLessons.length,
  });
}