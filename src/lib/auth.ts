import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Hardcoded admin credentials — guaranteed to work even without database
const ADMIN_EMAIL = "admin@sslid.com";
const ADMIN_PASSWORD = "Admin123!";
const ADMIN_USER = {
  id: "admin-hardcoded-id",
  email: ADMIN_EMAIL,
  name: "Admin User",
  level: "C2",
  role: "ADMIN",
};

export const authOptions: NextAuthOptions = {
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

          // Hardcoded admin fallback — always works
          if (email === ADMIN_EMAIL && credentials.password === ADMIN_PASSWORD) {
            return ADMIN_USER;
          }

          // Try Supabase for other users
          try {
            const { getSupabaseAdmin } = await import("@/lib/supabase-admin");
            const supabase = getSupabaseAdmin();
            if (supabase) {
              const { data: user } = await supabase
                .from("users")
                .select("id, email, name, password, level, role")
                .eq("email", email)
                .single();

              if (user?.password) {
                const { compare } = await import("bcryptjs");
                const isValid = await compare(credentials.password, user.password);
                if (isValid) {
                  return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    level: user.level,
                    role: user.role,
                  };
                }
              }
            }
          } catch (dbErr) {
            console.error("[Auth] Supabase lookup failed:", dbErr);
          }

          return null;
        } catch (err) {
          console.error("[Auth] Authorize error:", err);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET || "speak-spanish-fallback-secret-key-2024",
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.level = user.level;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.level = token.level as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
};