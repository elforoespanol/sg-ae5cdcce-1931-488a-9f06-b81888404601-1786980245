import { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { generateAllLessons } from "@/lib/generate-lessons";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const lessons = generateAllLessons();
    console.log(`Seeding ${lessons.length} lessons to Supabase...`);

    for (const lesson of lessons) {
      const { error } = await supabaseAdmin
        .from("lessons")
        .upsert(
          {
            id: lesson.id,
            slug: lesson.slug,
            title: lesson.title,
            description: lesson.description,
            level: lesson.level,
            difficulty: lesson.difficulty,
            order: lesson.order,
            imageUrl: lesson.imageUrl,
            durationMinutes: lesson.durationMinutes,
            isPublished: true,
            vocabularyJson: lesson.vocabularyJson || [],
            grammarJson: lesson.grammarJson || [],
            content: lesson.content,
          },
          { onConflict: "id" }
        );

      if (error) {
        console.error(`Error seeding lesson ${lesson.id}:`, error);
        return res.status(500).json({ error: `Failed to seed lesson ${lesson.id}: ${error.message}` });
      }
    }

    res.status(200).json({
      success: true,
      message: `Successfully seeded ${lessons.length} lessons`,
      count: lessons.length,
    });
  } catch (error) {
    console.error("Error in seed-lessons API:", error);
    res.status(500).json({ error: String(error) });
  }
}