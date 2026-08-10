import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

// Lazy Supabase client — only created when needed, not at module import time
function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Supabase configuration missing");
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

// Ensure secret is always valid (min 32 chars for NextAuth JWT)
const rawSecret = process.env.NEXTAUTH_SECRET || "";
const fallbackSecret = "speak-spanish-like-i-did-fallback-secret-key-2024";
const authSecret = rawSecret.length >= 32 ? rawSecret : fallbackSecret;

export const authOptions: NextAuthOptions = {
  secret: authSecret,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            console.error("[AUTH] Missing credentials");
            return null;
          }

          const supabaseAdmin = getSupabaseAdmin();

          const { data: user, error } = await supabaseAdmin
            .from("users")
            .select("*")
            .eq("email", credentials.email)
            .single();

          if (error) {
            console.error("[AUTH] Supabase error:", error.message);
            return null;
          }

          if (!user || !user.password) {
            console.error("[AUTH] User not found or no password");
            return null;
          }

          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordValid) {
            console.error("[AUTH] Password mismatch");
            return null;
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
            level: user.level,
            role: user.role,
          };
        } catch (err) {
          console.error("[AUTH] Authorize exception:", err);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.level = user.level;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub as string;
        session.user.level = token.level as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
};