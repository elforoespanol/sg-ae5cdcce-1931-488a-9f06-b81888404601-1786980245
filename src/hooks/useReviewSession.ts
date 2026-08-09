import { useState, useCallback, useEffect } from "react";

interface Flashcard {
  id: string;
  spanishText: string;
  englishText: string;
  exampleSentence: string | null;
  isMastered: boolean;
  lesson?: { title: string } | null;
}

interface SessionStats {
  total: number;
  correct: number;
  ratings: number[];
  startTime: number;
}

export function useReviewSession() {
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [stats, setStats] = useState<SessionStats>({
    total: 0,
    correct: 0,
    ratings: [],
    startTime: Date.now(),
  });

  const fetchDueCards = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/flashcards/review");
      if (!res.ok) throw new Error("Failed to fetch cards");
      const data = await res.json();
      setCards(data);
      setStats((s) => ({ ...s, total: data.length, startTime: Date.now() }));
      setCurrentIndex(0);
      setSessionComplete(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load cards");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const submitReview = useCallback(
    async (rating: number, responseTimeMs?: number) => {
      if (currentIndex >= cards.length) return;

      const card = cards[currentIndex];
      try {
        await fetch("/api/flashcards/review", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ flashcardId: card.id, rating, responseTimeMs }),
        });

        setStats((s) => ({
          ...s,
          correct: s.correct + (rating >= 2 ? 1 : 0),
          ratings: [...s.ratings, rating],
        }));

        if (currentIndex >= cards.length - 1) {
          setSessionComplete(true);
        } else {
          setCurrentIndex((i) => i + 1);
        }
      } catch (err) {
        setError("Failed to submit review");
      }
    },
    [cards, currentIndex]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (sessionComplete || isLoading || cards.length === 0) return;
      if (e.key === "1") submitReview(0);
      if (e.key === "2") submitReview(1);
      if (e.key === "3") submitReview(2);
      if (e.key === "4") submitReview(3);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [submitReview, sessionComplete, isLoading, cards.length]);

  const currentCard = cards[currentIndex] || null;
  const progress = cards.length > 0 ? (currentIndex / cards.length) * 100 : 0;
  const accuracy = stats.total > 0 ? (stats.correct / stats.total) * 100 : 0;

  return {
    cards,
    currentCard,
    currentIndex,
    isLoading,
    error,
    sessionComplete,
    stats,
    progress,
    accuracy,
    fetchDueCards,
    submitReview,
  };
}