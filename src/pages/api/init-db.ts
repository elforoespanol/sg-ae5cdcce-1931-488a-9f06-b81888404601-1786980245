import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import { LESSONS_DATA } from "@/lib/lessons-data";

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
    const lessons = LESSONS_DATA;

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