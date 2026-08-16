import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { RegionProvider } from "@/contexts/RegionContext";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/Navbar";
import { CookieConsent } from "@/components/CookieConsent";
import type { AppProps } from "next/app";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RegionProvider>
          <Navbar />
          <main className="min-h-[calc(100vh-200px)]">
            <Component {...pageProps} />
          </main>
          <CookieConsent />
          <Toaster />
        </RegionProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}