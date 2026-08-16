import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { QuizQuestion } from "@/lib/lessons-data";
import { CheckCircle, XCircle, ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LessonQuizProps {
  questions: QuizQuestion[];
}

export function LessonQuiz({ questions }: LessonQuizProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[current];

  const handleSelect = (option: string) => {
    if (showResult) return;
    setSelected(option);
  };

  const handleSubmit = () => {
    if (!selected) return;
    setShowResult(true);
    if (selected === q.correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <h3 className="font-serif text-2xl text-foreground mb-2">Quiz Complete</h3>
        <p className="text-muted-foreground mb-6">
          You scored <span className="font-bold text-brand-terracotta">{score}</span> out of{" "}
          <span className="font-bold">{questions.length}</span>
        </p>
        <Button onClick={handleRestart} variant="outline" className="gap-2">
          <RotateCcw className="h-4 w-4" />
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-muted-foreground font-medium">
          Question {current + 1} of {questions.length}
        </span>
        <span className="text-xs text-muted-foreground">
          Score: {score}
        </span>
      </div>

      <h4 className="font-serif text-lg text-foreground mb-4">{q.questionText}</h4>

      <div className="space-y-2 mb-4">
        {q.options.map((option) => {
          const isSelected = selected === option;
          const isCorrect = option === q.correctAnswer;
          const showCorrect = showResult && isCorrect;
          const showWrong = showResult && isSelected && !isCorrect;

          return (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              disabled={showResult}
              className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all ${
                showCorrect
                  ? "border-green-500 bg-green-50 text-green-800"
                  : showWrong
                  ? "border-red-500 bg-red-50 text-red-800"
                  : isSelected
                  ? "border-brand-terracotta bg-brand-terracotta/5 text-foreground"
                  : "border-border bg-background text-foreground hover:border-muted-foreground"
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {showCorrect && <CheckCircle className="h-4 w-4 text-green-600" />}
                {showWrong && <XCircle className="h-4 w-4 text-red-600" />}
              </div>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-4 p-3 rounded-lg bg-muted text-sm text-muted-foreground"
          >
            <span className="font-medium text-foreground">Explanation: </span>
            {q.explanation}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-end">
        {!showResult ? (
          <Button
            onClick={handleSubmit}
            disabled={!selected}
            className="gap-2"
          >
            Check Answer
          </Button>
        ) : (
          <Button onClick={handleNext} className="gap-2">
            {current < questions.length - 1 ? (
              <>
                Next <ArrowRight className="h-4 w-4" />
              </>
            ) : (
              "Finish Quiz"
            )}
          </Button>
        )}
      </div>
    </div>
  );
}