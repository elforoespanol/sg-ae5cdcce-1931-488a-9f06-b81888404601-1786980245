import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Volume2, Award } from "lucide-react";

interface FlashcardItemProps {
  spanishText: string;
  englishText: string;
  exampleSentence: string | null;
  isMastered: boolean;
}

export function FlashcardItem({
  spanishText,
  englishText,
  exampleSentence,
  isMastered,
}: FlashcardItemProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  const handleSpeak = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(spanishText);
    utterance.lang = "es-ES";
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  }, [spanishText]);

  return (
    <div
      className="relative w-full max-w-lg mx-auto aspect-[4/3] cursor-pointer perspective-1000"
      onClick={handleFlip}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front - Spanish */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl shadow-xl bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white flex flex-col items-center justify-center p-8"
          style={{ backfaceVisibility: "hidden" }}
        >
          {isMastered && (
            <div className="absolute top-4 right-4">
              <Award className="h-6 w-6 text-amber-400" />
            </div>
          )}
          <span className="text-xs font-medium uppercase tracking-widest text-indigo-300 mb-4">
            Spanish
          </span>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6">
            {spanishText}
          </h3>
          <button
            onClick={handleSpeak}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm"
          >
            <Volume2 className="h-4 w-4" />
            Listen
          </button>
          <p className="absolute bottom-4 text-xs text-indigo-300">
            Tap to flip
          </p>
        </div>

        {/* Back - English */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl shadow-xl bg-card border border-border flex flex-col items-center justify-center p-8"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-primary mb-4">
            English
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            {englishText}
          </h3>
          {exampleSentence && (
            <p className="text-sm text-muted-foreground text-center italic max-w-sm">
              &ldquo;{exampleSentence}&rdquo;
            </p>
          )}
          <p className="absolute bottom-4 text-xs text-muted-foreground">
            Tap to flip back
          </p>
        </div>
      </motion.div>
    </div>
  );
}