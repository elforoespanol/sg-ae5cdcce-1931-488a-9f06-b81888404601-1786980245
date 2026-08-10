import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getSupabaseAdmin } from "./supabase-admin";
import { compare } from "bcryptjs";

// Fallback secret for preview environments
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
            console.log("[AUTH] Missing credentials");
            return null;
          }

          const supabase = getSupabaseAdmin();
          if (!supabase) {
            console.error("[AUTH] Supabase client not available");
            // Demo fallback for preview
            if (process.env.NODE_ENV === "development" && credentials.email === "admin@sslid.com" && credentials.password === "Admin123!") {
              return {
                id: "admin-demo-id",
                email: "admin@sslid.com",
                name: "Admin User",
                level: "C2",
                role: "ADMIN",
              };
            }
            return null;
          }

          const { data: user, error } = await supabase
            .from("users")
            .select("id, email, name, password, level, role")
            .eq("email", credentials.email.trim().toLowerCase())
            .single();

          if (error) {
            console.error("[AUTH] Supabase error:", error.message);
            return null;
          }

          if (!user) {
            console.log("[AUTH] User not found:", credentials.email);
            return null;
          }

          if (!user.password) {
            console.log("[AUTH] User has no password");
            return null;
          }

          const isValid = await compare(credentials.password, user.password);
          if (!isValid) {
            console.log("[AUTH] Invalid password for:", credentials.email);
            return null;
          }

          console.log("[AUTH] Login success:", credentials.email);
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            level: user.level || "A1",
            role: user.role || "STUDENT",
          };
        } catch (err) {
          console.error("[AUTH] Authorize error:", err);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    secret: authSecret,
    maxAge: 30 * 24 * 60 * 60,
  },
  cookies: {
    sessionToken: {
      name: process.env.NODE_ENV === "production" ? "__Secure-next-auth.session-token" : "next-auth.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.email = user.email;
        token.name = user.name;
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