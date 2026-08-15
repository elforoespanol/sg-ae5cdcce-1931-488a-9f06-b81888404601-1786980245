import { NextApiRequest, NextApiResponse } from "next";
import { compare } from "bcryptjs";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { SignJWT } from "jose";

const fallbackSecret = "speak-spanish-fallback-secret-key-2024";
const jwtSecret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || fallbackSecret);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    // Try Supabase first
    const supabase = getSupabaseAdmin();
    let user: any = null;

    if (supabase) {
      const { data: dbUser, error } = await supabase
        .from("users")
        .select("id, email, name, password, level, role")
        .eq("email", email.trim().toLowerCase())
        .single();

      if (!error && dbUser && dbUser.password) {
        const isValid = await compare(password, dbUser.password);
        if (isValid) {
          user = dbUser;
        }
      }
    }

    // Fallback admin
    if (!user && email.trim().toLowerCase() === "admin@sslid.com" && password === "Admin123!") {
      user = {
        id: "admin-fallback-id",
        email: "admin@sslid.com",
        name: "Admin User",
        level: "C2",
        role: "ADMIN",
      };
    }

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Create JWT token with jose
    const token = await new SignJWT({
      sub: user.id,
      email: user.email,
      name: user.name,
      level: user.level,
      role: user.role,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("30d")
      .sign(jwtSecret);

    const isSecure = process.env.NODE_ENV === "production";
    const maxAge = 30 * 24 * 60 * 60;

    // Set both HttpOnly session token AND readable auth cookie
    const cookies = [
      `next-auth.session-token=${token}; Path=/; HttpOnly; ${isSecure ? "Secure; " : ""}SameSite=Lax; Max-Age=${maxAge}`,
      `sslid_auth=${encodeURIComponent(JSON.stringify({
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        level: user.level,
      }))}; Path=/; ${isSecure ? "Secure; " : ""}SameSite=Lax; Max-Age=${maxAge}`,
    ];

    res.setHeader("Set-Cookie", cookies);

    res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        level: user.level,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.error("[Custom Login] Error:", error);
    res.status(500).json({ message: "Authentication failed" });
  }
}