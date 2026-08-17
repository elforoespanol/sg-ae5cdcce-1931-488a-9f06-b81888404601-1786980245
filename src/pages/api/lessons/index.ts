import { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "@/lib/supabase-admin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { level } = req.query;

    let query = supabaseAdmin
      .from("lessons")
      .select("*")
      .eq("isPublished", true)
      .order("level, order", { ascending: true });

    if (level && typeof level === "string") {
      query = query.eq("level", level.toUpperCase());
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching lessons:", error);
      return res.status(500).json({ error: error.message });
    }

    res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
    res.status(200).json({
      lessons: data || [],
      total: data?.length || 0,
    });
  } catch (error) {
    console.error("Error in lessons API:", error);
    res.status(500).json({ error: String(error) });
  }
}