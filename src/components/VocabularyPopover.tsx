import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Volume2, X, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VocabularyItem {
  word: string;
  translation: string;
  partOfSpeech: string;
  example: string;
}

interface VocabularyPopoverProps {
  item: VocabularyItem;
  children: React.ReactNode;
}

export function VocabularyPopover({ item, children }: VocabularyPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToFlashcards = async () => {
    if (adding || added) return;
    setAdding(true);

    try {
      const res = await fetch("/api/flashcards/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          spanishText: item.word,
          englishText: item.translation,
          exampleSentence: item.example,
          partOfSpeech: item.partOfSpeech,
        }),
      });

      if (res.ok) {
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
      } else {
        const data = await res.json().catch(() => ({}));
        console.error("Failed to add flashcard:", data.message || res.statusText);
      }
    } catch (err) {
      console.error("Add to flashcard error:", err);
    } finally {
      setAdding(false);
    }
  };

  return (
    <span className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-primary font-medium underline decoration-primary/30 underline-offset-2 hover:decoration-primary transition-all cursor-pointer"
      >
        {children}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Popover */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.2 }}
              className="absolute z-50 left-1/2 -translate-x-1/2 bottom-full mb-2 w-72 bg-card border border-border rounded-xl shadow-lg overflow-hidden"
            >
              {/* Header */}
              <div className="bg-primary/5 px-4 py-3 flex items-start justify-between">
                <div>
                  <h4 className="font-serif text-lg text-foreground">{item.word}</h4>
                  <span className="text-xs text-muted-foreground capitalize">{item.partOfSpeech}</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">Translation</span>
                  <p className="text-foreground font-medium">{item.translation}</p>
                </div>

                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">Example</span>
                  <p className="text-sm text-foreground italic">"{item.example}"</p>
                </div>

                <Button
                  variant={added ? "default" : "outline"}
                  size="sm"
                  className="w-full gap-2 text-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToFlashcards();
                  }}
                  disabled={adding || added}
                >
                  {adding ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : added ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    <Plus className="h-3.5 w-3.5" />
                  )}
                  {added ? "Added!" : "Add to Flashcards"}
                </Button>
              </div>

              {/* Arrow */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 bg-card border-r border-b border-border rotate-45" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </span>
  );
}