import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { level } = req.query;
  const upperLevel = (level as string)?.toUpperCase();

  if (!upperLevel || !["A1", "A2", "B1", "B2"].includes(upperLevel)) {
    res.status(400).json({ error: "Invalid level" });
    return;
  }

  try {
    let lessons: any[] = [];

    if (upperLevel === "A1") {
      const mod = await import("@/lib/a1-lessons");
      lessons = mod.A1_LESSONS;
    } else if (upperLevel === "A2") {
      const mod = await import("@/lib/a2-lessons-01-05");
      lessons = mod.A2_LESSONS;
    } else if (upperLevel === "B1") {
      const mod = await import("@/lib/b1-lessons");
      lessons = mod.B1_LESSONS;
    } else if (upperLevel === "B2") {
      const mod = await import("@/lib/b2-lessons");
      lessons = mod.B2_LESSONS;
    }

    res.setHeader("Cache-Control", "public, max-age=86400");
    res.status(200).json({
      lessons,
      level: upperLevel,
      total: lessons.length,
    });
  } catch (error) {
    console.error("Error loading lessons:", error);
    res.status(500).json({ error: "Failed to load lessons" });
  }
}