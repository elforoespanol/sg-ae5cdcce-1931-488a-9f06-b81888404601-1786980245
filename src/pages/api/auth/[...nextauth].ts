import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

// Verify auth options are valid before passing to NextAuth
if (!authOptions.secret || authOptions.secret.length < 32) {
  console.error("[NEXTAUTH] Invalid or missing secret. Length:", authOptions.secret?.length);
}

export default NextAuth(authOptions);