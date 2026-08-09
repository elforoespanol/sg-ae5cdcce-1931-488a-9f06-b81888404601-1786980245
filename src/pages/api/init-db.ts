import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!supabaseUrl || !serviceRoleKey) {
    return res.status(500).json({
      message: "Missing Supabase credentials",
      env: {
        hasUrl: !!supabaseUrl,
        hasKey: !!serviceRoleKey,
      },
    });
  }

  const adminClient = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  try {
    // Check what columns actually exist in the users table
    const { data: columns, error: colError } = await adminClient
      .from("users")
      .select("*")
      .limit(0);

    if (colError) {
      return res.status(500).json({
        message: "Cannot access users table",
        error: colError,
      });
    }

    const passwordHash = "$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi";

    // Try inserting with minimal fields first
    const { error: userError } = await adminClient.from("users").upsert(
      {
        id: "admin-seed-001",
        email: "admin@sslid.com",
        name: "Admin User",
        password: passwordHash,
        role: "ADMIN",
        level: "A1",
        streak: 0,
      },
      { onConflict: "email" }
    );

    if (userError) {
      return res.status(500).json({
        message: "Failed to create admin user",
        error: userError,
      });
    }

    // Create lessons
    const lessons = [
      { title: "Greetings & Introductions", slug: "greetings-introductions", description: "Learn how to greet people and introduce yourself in Spanish.", content: "Lesson content here...", difficulty: "BEGINNER", level: "A1", order: 1, isPublished: true, durationMinutes: 15 },
      { title: "Numbers & Counting", slug: "numbers-counting", description: "Master numbers from 0 to 100 in Spanish.", content: "Lesson content here...", difficulty: "BEGINNER", level: "A1", order: 2, isPublished: true, durationMinutes: 15 },
      { title: "Colors & Descriptions", slug: "colors-descriptions", description: "Learn colors and basic descriptive adjectives.", content: "Lesson content here...", difficulty: "BEGINNER", level: "A1", order: 3, isPublished: true, durationMinutes: 15 },
      { title: "Family Members", slug: "family-members", description: "Talk about your family tree.", content: "Lesson content here...", difficulty: "BEGINNER", level: "A1", order: 4, isPublished: true, durationMinutes: 15 },
      { title: "Daily Routines", slug: "daily-routines", description: "Describe your daily schedule.", content: "Lesson content here...", difficulty: "BEGINNER", level: "A1", order: 5, isPublished: true, durationMinutes: 15 },
      { title: "Food & Dining", slug: "food-dining", description: "Order food at restaurants.", content: "Lesson content here...", difficulty: "BEGINNER", level: "A1", order: 6, isPublished: true, durationMinutes: 15 },
      { title: "Directions & Locations", slug: "directions-locations", description: "Ask for and give directions.", content: "Lesson content here...", difficulty: "ELEMENTARY", level: "A2", order: 7, isPublished: true, durationMinutes: 15 },
      { title: "Shopping & Money", slug: "shopping-money", description: "Handle shopping situations.", content: "Lesson content here...", difficulty: "ELEMENTARY", level: "A2", order: 8, isPublished: true, durationMinutes: 15 },
      { title: "Weather & Seasons", slug: "weather-seasons", description: "Discuss weather and make plans.", content: "Lesson content here...", difficulty: "ELEMENTARY", level: "A2", order: 9, isPublished: true, durationMinutes: 15 },
      { title: "Hobbies & Free Time", slug: "hobbies-free-time", description: "Talk about hobbies.", content: "Lesson content here...", difficulty: "ELEMENTARY", level: "A2", order: 10, isPublished: true, durationMinutes: 15 },
      { title: "Past Experiences", slug: "past-experiences", description: "Narrate past events using preterite tense.", content: "Lesson content here...", difficulty: "INTERMEDIATE", level: "B1", order: 11, isPublished: true, durationMinutes: 15 },
      { title: "Future Plans", slug: "future-plans", description: "Discuss future plans.", content: "Lesson content here...", difficulty: "INTERMEDIATE", level: "B1", order: 12, isPublished: true, durationMinutes: 15 },
      { title: "Hypothetical Situations", slug: "hypothetical-situations", description: "Express wishes using subjunctive.", content: "Lesson content here...", difficulty: "INTERMEDIATE", level: "B1", order: 13, isPublished: true, durationMinutes: 15 },
      { title: "Work & Career", slug: "work-career", description: "Discuss professional life.", content: "Lesson content here...", difficulty: "INTERMEDIATE", level: "B1", order: 14, isPublished: true, durationMinutes: 15 },
      { title: "Health & Wellness", slug: "health-wellness", description: "Talk about health and body.", content: "Lesson content here...", difficulty: "INTERMEDIATE", level: "B1", order: 15, isPublished: true, durationMinutes: 15 },
      { title: "Complex Narratives", slug: "complex-narratives", description: "Master preterite vs imperfect.", content: "Lesson content here...", difficulty: "UPPER_INTERMEDIATE", level: "B2", order: 16, isPublished: true, durationMinutes: 15 },
      { title: "Opinions & Debates", slug: "opinions-debates", description: "Express and defend opinions.", content: "Lesson content here...", difficulty: "UPPER_INTERMEDIATE", level: "B2", order: 17, isPublished: true, durationMinutes: 15 },
      { title: "Cultural Immersion", slug: "cultural-immersion", description: "Explore Spanish-speaking cultures.", content: "Lesson content here...", difficulty: "UPPER_INTERMEDIATE", level: "B2", order: 18, isPublished: true, durationMinutes: 15 },
      { title: "Technical Spanish", slug: "technical-spanish", description: "Technology and professional vocabulary.", content: "Lesson content here...", difficulty: "UPPER_INTERMEDIATE", level: "B2", order: 19, isPublished: true, durationMinutes: 15 },
      { title: "Advanced Grammar", slug: "advanced-grammar", description: "Complex grammatical structures.", content: "Lesson content here...", difficulty: "UPPER_INTERMEDIATE", level: "B2", order: 20, isPublished: true, durationMinutes: 15 },
    ];

    let createdCount = 0;
    for (const lesson of lessons) {
      const { error } = await adminClient.from("lessons").upsert(
        { ...lesson, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
        { onConflict: "slug" }
      );
      if (!error) createdCount++;
    }

    return res.status(200).json({
      success: true,
      message: "Database seeded successfully!",
      admin: "admin@sslid.com",
      password: "Admin123!",
      lessonsCreated: createdCount,
      totalLessons: lessons.length,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Seed failed",
      error: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
    });
  }
}