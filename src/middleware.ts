import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const fallbackSecret = "speak-spanish-like-i-did-fallback-secret-key-2024";
const authSecret = process.env.NEXTAUTH_SECRET || fallbackSecret;

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    secret: authSecret,
    callbacks: {
      authorized({ req, token }) {
        // Always allow in development/preview
        if (process.env.NODE_ENV === "development") {
          return true;
        }

        // In production, require a valid token
        if (!token) {
          return false;
        }

        return true;
      },
    },
    pages: {
      signIn: "/login",
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/lessons/:path*", "/chat/:path*", "/flashcards/:path*", "/admin/:path*", "/admin"],
};