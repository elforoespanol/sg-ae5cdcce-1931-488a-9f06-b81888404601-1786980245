import { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "@/lib/supabase-admin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { level } = req.query;

    if (!level || typeof level !== "string") {
      return res.status(400).json({ error: "Level parameter required" });
    }

    const upperLevel = level.toUpperCase();

    const { data, error } = await supabaseAdmin
      .from("lessons")
      .select("*")
      .eq("level", upperLevel)
      .eq("isPublished", true)
      .order("order", { ascending: true });

    if (error) {
      console.error("Error fetching lessons by level:", error);
      return res.status(500).json({ error: error.message });
    }

    res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
    res.status(200).json({
      lessons: data || [],
      level: upperLevel,
      total: data?.length || 0,
    });
  } catch (error) {
    console.error("Error in by-level API:", error);
    res.status(500).json({ error: String(error) });
  }
}