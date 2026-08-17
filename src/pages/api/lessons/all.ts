import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const [a1Module, a2Module, b1Module, b2Module] = await Promise.all([
      import("@/lib/a1-lessons"),
      import("@/lib/a2-lessons-01-05"),
      import("@/lib/b1-lessons"),
      import("@/lib/b2-lessons"),
    ]);

    const allLessons = [
      ...a1Module.A1_LESSONS,
      ...a2Module.A2_LESSONS,
      ...b1Module.B1_LESSONS,
      ...b2Module.B2_LESSONS,
    ];

    res.setHeader("Cache-Control", "public, max-age=86400");
    res.status(200).json({
      lessons: allLessons,
      total: allLessons.length,
    });
  } catch (error) {
    console.error("Error loading lessons:", error);
    res.status(500).json({ error: "Failed to load lessons" });
  }
}