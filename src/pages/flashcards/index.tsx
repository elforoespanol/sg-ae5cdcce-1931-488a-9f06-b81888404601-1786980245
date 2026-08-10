import Head from "next/head";
import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Zap } from "lucide-react";
import { FlashcardItem } from "@/components/flashcards/FlashcardItem";
import { ReviewControls } from "@/components/flashcards/ReviewControls";
import { FlashcardProgress } from "@/components/flashcards/FlashcardProgress";
import { SessionComplete } from "@/components/flashcards/SessionComplete";
import { EmptyDeck } from "@/components/flashcards/EmptyDeck";
import { useRouter } from "next/navigation";

interface Flashcard {
  id: string;
  spanishText: string;
  englishText: string;
  exampleSentence: string | null;
  interval: number;
  easeFactor: number;
  repetitions: number;
  isMastered: boolean;
  totalReviews: number;
  totalCorrect: number;
}

export default function FlashcardsPage() {
  const { user: authUser, status } = useAuth();
  const router = useRouter();
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [stats, setStats] = useState<{
    total: number;
    correct: number;
    ratings: number[];
    startTime: number;
  }>({ total: 0, correct: 0, ratings: [], startTime: Date.now() });

  const fetchCards = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/flashcards/review");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setCards(data.cards || []);
      setCurrentIndex(0);
      setSessionComplete(false);
      setStats({ total: 0, correct: 0, ratings: [], startTime: Date.now() });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  const handleRate = useCallback(async (rating: number) => {
    const currentCard = cards[currentIndex];
    if (!currentCard) return;

    try {
      await fetch("/api/flashcards/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ flashcardId: currentCard.id, rating }),
      });

      setStats((prev) => ({
        total: prev.total + 1,
        correct: prev.correct + (rating >= 2 ? 1 : 0),
        ratings: [...prev.ratings, rating],
        startTime: prev.startTime,
      }));

      if (currentIndex + 1 >= cards.length) {
        setSessionComplete(true);
      } else {
        setCurrentIndex((prev) => prev + 1);
        setIsFlipped(false);
      }
    } catch (err) {
      console.error(err);
    }
  }, [cards, currentIndex]);

  const progress = cards.length > 0 ? (currentIndex / cards.length) * 100 : 0;

  if (status === "loading" || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Zap className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (cards.length === 0 && !sessionComplete) {
    return (
      <div className="container py-12">
        <EmptyDeck />
      </div>
    );
  }

  if (sessionComplete) {
    return (
      <div className="container py-12">
        <SessionComplete stats={stats} onRestart={fetchCards} />
      </div>
    );
  }

  const currentCard = cards[currentIndex];

  return (
    <div className="container py-6 md:py-10 max-w-2xl mx-auto">
      <Head>
        <title>Flashcards — Speak Spanish Like I Did</title>
        <meta name="description" content="Review Spanish vocabulary with spaced repetition flashcards." />
      </Head>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Flame className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">
            {cards.length} cards due
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
          Review Flashcards
        </h1>
      </div>

      {/* Progress */}
      <div className="mb-8">
        <FlashcardProgress
          current={currentIndex}
          total={cards.length}
          progress={progress}
        />
      </div>

      {/* Card */}
      <div className="mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <FlashcardItem
              spanishText={currentCard.spanishText}
              englishText={currentCard.englishText}
              exampleSentence={currentCard.exampleSentence}
              isMastered={currentCard.isMastered}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mb-6">
        <p className="text-center text-sm text-muted-foreground mb-4">
          Think of the answer, then tap the card to flip
        </p>
        <ReviewControls onRate={handleRate} disabled={false} />
      </div>
    </div>
  );
}