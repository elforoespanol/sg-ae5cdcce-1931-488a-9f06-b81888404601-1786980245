import { motion } from "framer-motion";

interface FlashcardProgressProps {
  current: number;
  total: number;
  progress: number;
}

export function FlashcardProgress({ current, total, progress }: FlashcardProgressProps) {
  return (
    <div className="w-full max-w-lg mx-auto space-y-3">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground font-medium">
          Card {current + 1} of {total}
        </span>
        <span className="text-primary font-semibold">{Math.round(progress)}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
      <div className="flex justify-center gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <motion.div
            key={i}
            className={`h-2 rounded-full transition-colors ${
              i < current ? "bg-primary w-6" : i === current ? "bg-primary/60 w-6" : "bg-muted w-2"
            }`}
            initial={false}
            animate={{ width: i === current ? 24 : i < current ? 24 : 8 }}
          />
        ))}
      </div>
    </div>
  );
}