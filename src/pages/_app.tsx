import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { Navbar } from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: "12px",
            padding: "12px 16px",
          },
          success: {
            iconTheme: {
              primary: "#e6734d",
              secondary: "#fff",
            },
          },
        }}
      />
    </SessionProvider>
  );
}