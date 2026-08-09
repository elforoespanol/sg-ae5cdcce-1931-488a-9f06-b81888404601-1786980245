import { motion } from "framer-motion";
import { BookOpen, Sparkles, Plus } from "lucide-react";
import Link from "next/link";

export function EmptyDeck() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto text-center space-y-6 py-16"
    >
      <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-muted">
        <BookOpen className="h-10 w-10 text-muted-foreground" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-serif font-bold text-foreground">No Flashcards Due</h2>
        <p className="text-muted-foreground">
          You&rsquo;re all caught up! Great job. Generate new flashcards from lessons or check back later for reviews.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/lessons"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
        >
          <Sparkles className="h-4 w-4" />
          Browse Lessons
        </Link>
        <Link
          href="/flashcards/manage"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border font-medium hover:bg-muted transition-colors"
        >
          <Plus className="h-4 w-4" />
          Manage Cards
        </Link>
      </div>
    </motion.div>
  );
}