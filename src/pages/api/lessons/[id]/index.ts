import { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "@/lib/supabase-admin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Lesson ID required" });
  }

  try {
    const { data, error } = await supabaseAdmin
      .from("lessons")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return res.status(404).json({ error: "Lesson not found" });
      }
      console.error("Error fetching lesson:", error);
      return res.status(500).json({ error: error.message });
    }

    res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
    res.status(200).json(data);
  } catch (error) {
    console.error("Error in lesson detail API:", error);
    res.status(500).json({ error: String(error) });
  }
}