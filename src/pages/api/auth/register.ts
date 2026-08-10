import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { supabaseAdmin } from "@/lib/supabase-admin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, password, level } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    // Check for existing user
    const { data: existingUser, error: lookupError } = await supabaseAdmin
      .from("users")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (lookupError) {
      console.error("Registration lookup error:", lookupError);
      return res.status(500).json({ message: "Something went wrong" });
    }

    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const { data: user, error: insertError } = await supabaseAdmin
      .from("users")
      .insert({
        name,
        email,
        password: hashedPassword,
        level: level || "A1",
        role: "STUDENT",
      })
      .select("id, name, email, level")
      .single();

    if (insertError || !user) {
      console.error("Registration insert error:", insertError);
      return res.status(500).json({ message: "Something went wrong" });
    }

    return res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
}