import { useState } from "react";
import { motion } from "framer-motion";
import type { FlashcardItem } from "@/lib/lessons-data";
import { useRegion } from "@/contexts/RegionContext";
import { RotateCw, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RegionAwareFlashcardProps {
  flashcard: FlashcardItem;
  onAddToFlashcards?: (card: FlashcardItem) => void;
}

export function RegionAwareFlashcard({ flashcard, onAddToFlashcards }: RegionAwareFlashcardProps) {
  const { region } = useRegion();
  const [flipped, setFlipped] = useState(false);

  const isSpain = region === "SPAIN";
  const frontText = isSpain ? flashcard.frontSpain : flashcard.frontLatam;
  const exampleText = isSpain
    ? flashcard.exampleSentenceSpain
    : flashcard.exampleSentenceLatam;

  return (
    <div className="perspective-1000 w-full max-w-sm mx-auto">
      <div
        className="relative h-64 cursor-pointer"
        onClick={() => setFlipped(!flipped)}
      >
        <motion.div
          className="absolute inset-0 rounded-xl border border-border bg-card shadow-sm p-6 flex flex-col items-center justify-center text-center backface-hidden"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
            {flashcard.partOfSpeech}
          </span>
          <h3 className="font-serif text-2xl text-foreground mb-2">{frontText}</h3>
          <p className="text-sm text-muted-foreground italic">"{exampleText}"</p>
          <div className="mt-4">
            <RotateCw className="h-4 w-4 text-muted-foreground/50" />
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 rounded-xl border border-brand-terracotta bg-brand-terracotta/5 shadow-sm p-6 flex flex-col items-center justify-center text-center"
          initial={{ rotateY: 180 }}
          animate={{ rotateY: flipped ? 0 : 180 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-xs text-brand-terracotta uppercase tracking-wide mb-2">
            Translation
          </span>
          <h3 className="font-serif text-2xl text-foreground mb-3">
            {flashcard.backEnglish}
          </h3>
          <p className="text-xs text-muted-foreground px-2">
            {flashcard.variantDifferenceNote}
          </p>
          {onAddToFlashcards && (
            <Button
              size="sm"
              variant="outline"
              className="mt-4 gap-1 text-xs"
              onClick={(e) => {
                e.stopPropagation();
                onAddToFlashcards(flashcard);
              }}
            >
              <Plus className="h-3 w-3" />
              Add to Deck
            </Button>
          )}
        </motion.div>
      </div>
    </div>
  );
}