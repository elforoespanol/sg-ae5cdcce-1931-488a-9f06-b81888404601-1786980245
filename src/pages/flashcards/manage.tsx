import { useSession } from "next-auth/react";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/AuthContext";
import { motion } from "framer-motion";
import { Plus, Trash2, Edit2, BookOpen, Search, Award, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";

export const dynamic = "force-dynamic";

interface Flashcard {
  id: string;
  spanishText: string;
  englishText: string;
  exampleSentence: string | null;
  interval: number;
  easeFactor: number;
  isMastered: boolean;
  totalReviews: number;
  totalCorrect: number;
  lessonId: string | null;
  createdAt: string;
}

export default function ManageFlashcardsPage() {
  const { data: session } = useSession();
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "mastered" | "learning">("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/flashcards/review");
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setCards(data.cards || []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this flashcard?")) return;
    try {
      await fetch(`/api/flashcards/review?id=${id}`, { method: "DELETE" });
      setCards((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const filtered = cards.filter((card) => {
    const matchesSearch =
      card.spanishText.toLowerCase().includes(search.toLowerCase()) ||
      card.englishText.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      (filter === "mastered" && card.isMastered) ||
      (filter === "learning" && !card.isMastered);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
          Flashcard Library
        </h1>
        <p className="text-muted-foreground">
          Browse, search, and manage your flashcards
        </p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search flashcards..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          {(["all", "mastered", "learning"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {f === "all" && <BookOpen className="inline h-4 w-4 mr-1.5" />}
              {f === "mastered" && <Award className="inline h-4 w-4 mr-1.5" />}
              {f === "learning" && <Filter className="inline h-4 w-4 mr-1.5" />}
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      {isLoading ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Loading flashcards...</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No flashcards found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="group bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <Badge
                  variant={card.isMastered ? "default" : "secondary"}
                  className="text-xs"
                >
                  {card.isMastered ? "Mastered" : "Learning"}
                </Badge>
                <button
                  onClick={() => handleDelete(card.id)}
                  className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-destructive hover:bg-destructive/10 transition-all"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-1">
                {card.spanishText}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {card.englishText}
              </p>

              {card.exampleSentence && (
                <p className="text-xs text-muted-foreground italic mb-3">
                  &ldquo;{card.exampleSentence}&rdquo;
                </p>
              )}

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  Reviews: {card.totalReviews} • Correct: {card.totalCorrect}
                </span>
                <span>EF: {card.easeFactor.toFixed(1)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}