import { useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, Target, Clock, RotateCcw, Home } from "lucide-react";
import Link from "next/link";
import confetti from "canvas-confetti";

interface SessionCompleteProps {
  stats: {
    total: number;
    correct: number;
    ratings: number[];
    startTime: number;
  };
  onRestart: () => void;
}

export function SessionComplete({ stats, onRestart }: SessionCompleteProps) {
  const accuracy = stats.total > 0 ? (stats.correct / stats.total) * 100 : 0;
  const duration = Math.round((Date.now() - stats.startTime) / 1000);
  const avgTime = stats.total > 0 ? Math.round(duration / stats.total) : 0;

  const ratingCounts = [0, 0, 0, 0];
  stats.ratings.forEach((r) => ratingCounts[r]++);

  useEffect(() => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ["#e6734d", "#1e3a8a", "#f59e0b"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ["#e6734d", "#1e3a8a", "#f59e0b"],
      });

      if (Date.now() < end) requestAnimationFrame(frame);
    };

    frame();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-md mx-auto text-center space-y-8 py-12"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-amber-100"
      >
        <Trophy className="h-12 w-12 text-amber-600" />
      </motion.div>

      <div className="space-y-2">
        <h2 className="text-3xl font-serif font-bold text-foreground">¡Muy bien!</h2>
        <p className="text-muted-foreground">Session complete. You&rsquo;re making great progress!</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-xl p-4">
          <Target className="h-5 w-5 text-primary mx-auto mb-2" />
          <p className="text-2xl font-bold text-foreground">{Math.round(accuracy)}%</p>
          <p className="text-xs text-muted-foreground">Accuracy</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <Clock className="h-5 w-5 text-primary mx-auto mb-2" />
          <p className="text-2xl font-bold text-foreground">{avgTime}s</p>
          <p className="text-xs text-muted-foreground">Avg Time</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <Trophy className="h-5 w-5 text-primary mx-auto mb-2" />
          <p className="text-2xl font-bold text-foreground">{stats.total}</p>
          <p className="text-xs text-muted-foreground">Cards</p>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-foreground">Rating Distribution</p>
        <div className="flex items-center gap-2 justify-center">
          {[
            { label: "Again", count: ratingCounts[0], color: "bg-red-500" },
            { label: "Hard", count: ratingCounts[1], color: "bg-orange-500" },
            { label: "Good", count: ratingCounts[2], color: "bg-emerald-500" },
            { label: "Easy", count: ratingCounts[3], color: "bg-blue-500" },
          ].map(({ label, count, color }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className={`h-16 w-8 rounded-md ${color} flex items-end justify-center`}>
                <div
                  className="w-full bg-white/20 rounded-b-md"
                  style={{ height: `${stats.total > 0 ? (count / stats.total) * 100 : 0}%` }}
                />
              </div>
              <span className="text-[10px] text-muted-foreground">{label}</span>
              <span className="text-xs font-bold">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3 justify-center">
        <button
          onClick={onRestart}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
        >
          <RotateCcw className="h-4 w-4" />
          Study Again
        </button>
        <Link
          href="/dashboard"
          className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border font-medium hover:bg-muted transition-colors"
        >
          <Home className="h-4 w-4" />
          Dashboard
        </Link>
      </div>
    </motion.div>
  );
}