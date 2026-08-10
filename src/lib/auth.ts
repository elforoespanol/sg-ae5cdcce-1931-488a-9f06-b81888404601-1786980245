import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getSupabaseAdmin } from "./supabase-admin";
import { compare } from "bcryptjs";

// Use a stable fallback secret for preview and production
const fallbackSecret = "speak-spanish-like-i-did-fallback-secret-key-2024";
const authSecret = process.env.NEXTAUTH_SECRET || fallbackSecret;

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
            return null;
          }

          const email = credentials.email.trim().toLowerCase();
          const password = credentials.password;

          // Try Supabase first
          const supabase = getSupabaseAdmin();
          if (supabase) {
            try {
              const { data: user, error } = await supabase
                .from("users")
                .select("id, email, name, password, level, role")
                .eq("email", email)
                .single();

              if (!error && user && user.password) {
                const isValid = await compare(password, user.password);
                if (isValid) {
                  return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    level: user.level || "A1",
                    role: user.role || "STUDENT",
                  };
                }
              }
            } catch (dbErr) {
              console.error("[AUTH] DB error:", dbErr);
              // Fall through to fallback
            }
          }

          // Fallback: hardcoded admin for demo/emergency access
          if (email === "admin@sslid.com" && password === "Admin123!") {
            return {
              id: "admin-fallback-id",
              email: "admin@sslid.com",
              name: "Admin User",
              level: "C2",
              role: "ADMIN",
            };
          }

          return null;
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
    maxAge: 30 * 24 * 60 * 60,
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