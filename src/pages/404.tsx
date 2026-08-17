import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Search, Compass, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export default function NotFound() {
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setSearching(true);
    window.location.href = `/lessons?search=${encodeURIComponent(query)}`;
  };

  return (
    <>
      <Head>
        <title>¡Ay! Page Not Found — Speak Spanish Like I Did</title>
      </Head>

      <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-[#fdfbf7] via-[#fcf9f2] to-[#fef3e2]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg w-full text-center space-y-8"
        >
          {/* Illustration */}
          <div className="relative">
            <motion.div
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-8xl"
            >
              🗺️
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -top-2 -right-2 text-4xl"
            >
              ❓
            </motion.div>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-serif font-bold text-foreground">¡Ay!</h1>
            <p className="text-xl text-muted-foreground">Page not found</p>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              Looks like you took a wrong turn on your Spanish learning journey. No worries — let's get you back on track!
            </p>
          </div>

          <form onSubmit={handleSearch} className="relative max-w-sm mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search lessons..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-12 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            <button
              type="submit"
              disabled={searching || !query.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/dashboard">
              <Button className="gap-2 w-full sm:w-auto">
                <Home className="h-4 w-4" />
                Go to Dashboard
              </Button>
            </Link>
            <Link href="/lessons">
              <Button variant="outline" className="gap-2 w-full sm:w-auto">
                <Compass className="h-4 w-4" />
                Browse Lessons
              </Button>
            </Link>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Lost? Try searching for{" "}
              <Link href="/lessons" className="text-primary hover:underline">lessons</Link>
              {" "}or{" "}
              <Link href="/flashcards" className="text-primary hover:underline">flashcards</Link>
              {" "}to continue learning.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}