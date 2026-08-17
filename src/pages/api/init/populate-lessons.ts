import { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "@/lib/supabase-admin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Dynamically import lesson files only at runtime
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

    // Filter for published lessons only
    const publishedLessons = allLessons.filter((lesson: any) => lesson.isPublished !== false);

    // Insert into Supabase, upsert by slug
    const { data, error } = await supabaseAdmin
      .from("lessons")
      .upsert(
        publishedLessons.map((lesson: any) => ({
          id: lesson.id || lesson.slug,
          title: lesson.title,
          slug: lesson.slug,
          description: lesson.description,
          content: lesson.content || JSON.stringify(lesson),
          difficulty: lesson.difficulty || "BEGINNER",
          level: lesson.level,
          order: lesson.order || lesson.level_order || 0,
          imageUrl: lesson.imageUrl || null,
          vocabularyJson: lesson.vocabularyTable || lesson.vocabularyJson || null,
          grammarJson: lesson.grammarSection || lesson.grammarJson || null,
          durationMinutes: lesson.estimatedMinutes || lesson.durationMinutes || 15,
          isPublished: true,
        })),
        { onConflict: "slug" }
      );

    if (error) {
      console.error("Error inserting lessons:", error);
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json({
      success: true,
      message: `Populated ${publishedLessons.length} lessons into Supabase`,
      count: publishedLessons.length,
    });
  } catch (error) {
    console.error("Error populating lessons:", error);
    res.status(500).json({ error: String(error) });
  }
}