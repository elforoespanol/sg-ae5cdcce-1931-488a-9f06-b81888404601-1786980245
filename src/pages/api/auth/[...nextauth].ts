import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);

export default async function auth(req: any, res: any) {
  try {
    return await handler(req, res);
  } catch (error) {
    console.error("[NextAuth] Unhandled error:", error);
    // Return a JSON error instead of crashing
    res.status(500).json({
      error: "Authentication service error",
      message: process.env.NODE_ENV === "development" ? String(error) : "Internal server error",
    });
  }
}