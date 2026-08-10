import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized({ req, token }) {
        // Bypass auth in development/preview environments (iframe cookie restrictions)
        const isDev = process.env.NODE_ENV === "development";
        const isPreview = req.nextUrl.hostname.includes("softgen.dev") || req.nextUrl.hostname.includes("localhost");
        
        if (isDev || isPreview) {
          return true;
        }
        
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
  matcher: ["/dashboard/:path*", "/lessons/:path*", "/chat/:path*", "/flashcards/:path*"],
};