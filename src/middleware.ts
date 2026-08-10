import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const fallbackSecret = "speak-spanish-like-i-did-fallback-secret-key-2024";
const jwtSecret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || fallbackSecret);

// Paths that require authentication
const protectedPaths = ["/dashboard", "/lessons", "/chat", "/flashcards", "/admin", "/profile", "/settings"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if this is a protected path
  const isProtected = protectedPaths.some(path => pathname.startsWith(path));
  if (!isProtected) {
    return NextResponse.next();
  }

  // In development, allow all
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next();
  }

  // Check for session token in cookie
  const token = request.cookies.get("next-auth.session-token")?.value;

  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  try {
    // Verify the JWT
    await jwtVerify(token, jwtSecret);
    return NextResponse.next();
  } catch {
    // Invalid token, redirect to login
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/lessons/:path*", "/chat/:path*", "/flashcards/:path*", "/admin/:path*", "/admin", "/profile", "/settings"],
};