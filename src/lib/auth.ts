import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET || "speak-spanish-fallback-secret-2024-min-32-chars-long",
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
            return null;
          }

          if (!supabaseUrl || !serviceRoleKey) {
            console.error("[AUTH] Missing Supabase configuration");
            return null;
          }

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