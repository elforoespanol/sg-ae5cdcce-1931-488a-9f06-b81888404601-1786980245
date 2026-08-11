import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  Clock,
  ChevronLeft,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  Trophy,
  BarChart3,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { VocabularyPopover } from "@/components/VocabularyPopover";
import { toast } from "react-hot-toast";
import { cn } from "@/lib/utils";

const difficultyColors: Record<string, string> = {
  BEGINNER: "bg-emerald-100 text-emerald-700",
  ELEMENTARY: "bg-blue-100 text-blue-700",
  INTERMEDIATE: "bg-amber-100 text-amber-700",
  UPPER_INTERMEDIATE: "bg-orange-100 text-orange-700",
  ADVANCED: "bg-red-100 text-red-700",
  MASTERY: "bg-purple-100 text-purple-700",
};

interface VocabularyItem {
  word: string;
  translation: string;
  partOfSpeech: string;
  example: string;
}

interface GrammarItem {
  title: string;
  content: string;
}

interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  difficulty: string;
  level: string;
  durationMinutes: number;
  vocabularyJson: VocabularyItem[] | null;
  grammarJson: GrammarItem[] | null;
  userProgress: {
    isCompleted: boolean;
    timeSpentMinutes: number;
    quizScore: number | null;
  }[];
}

function renderContent(content: string, vocabulary: VocabularyItem[]) {
  // Simple markdown-like rendering
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: string[] = [];
  let inBlockquote = false;
  let blockquoteLines: string[] = [];

  const flushTable = () => {
    if (tableRows.length === 0) return;
    const header = tableRows[0];
    const body = tableRows.slice(2); // Skip header and separator
    elements.push(
      <div key={`table-${elements.length}`} className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-border">
              {header.split("|").filter(Boolean).map((cell, i) => (
                <th key={i} className="text-left py-2 px-3 font-semibold text-foreground">
                  {cell.trim()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, ri) => (
              <tr key={ri} className="border-b border-border/50">
                {row.split("|").filter(Boolean).map((cell, ci) => (
                  <td key={ci} className="py-2 px-3 text-muted-foreground">
                    {renderInline(cell.trim(), vocabulary)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableRows = [];
    inTable = false;
  };

  const flushBlockquote = () => {
    if (blockquoteLines.length === 0) return;
    elements.push(
      <blockquote key={`bq-${elements.length}`} className="border-l-4 border-primary/30 pl-4 py-2 my-6 italic text-foreground/80">
        {blockquoteLines.map((line, i) => (
          <p key={i} className="mb-1">{renderInline(line.replace(/^> /, ""), vocabulary)}</p>
        ))}
      </blockquote>
    );
    blockquoteLines = [];
    inBlockquote = false;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Empty line
    if (!line.trim()) {
      if (inTable) flushTable();
      if (inBlockquote) flushBlockquote();
      continue;
    }

    // Heading
    if (line.startsWith("# ")) {
      if (inTable) flushTable();
      if (inBlockquote) flushBlockquote();
      elements.push(
        <h1 key={i} className="font-serif text-3xl text-foreground mt-10 mb-4">
          {renderInline(line.replace("# ", ""), vocabulary)}
        </h1>
      );
      continue;
    }
    if (line.startsWith("## ")) {
      if (inTable) flushTable();
      if (inBlockquote) flushBlockquote();
      elements.push(
        <h2 key={i} className="font-serif text-2xl text-foreground mt-8 mb-3">
          {renderInline(line.replace("## ", ""), vocabulary)}
        </h2>
      );
      continue;
    }

    // Table
    if (line.includes("|")) {
      if (!inTable) inTable = true;
      tableRows.push(line);
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Blockquote
    if (line.startsWith(">")) {
      if (!inBlockquote) inBlockquote = true;
      blockquoteLines.push(line);
      continue;
    } else if (inBlockquote) {
      flushBlockquote();
    }

    // Bold text (list item or paragraph)
    if (line.startsWith("**") && line.endsWith("**") && line.includes("—")) {
      const [term, ...rest] = line.replace(/\*\*/g, "").split("—");
      elements.push(
        <div key={i} className="flex gap-2 my-1">
          <span className="font-semibold text-foreground min-w-fit">{term.trim()}</span>
          <span className="text-muted-foreground">— {rest.join("—").trim()}</span>
        </div>
      );
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={i} className="text-foreground/80 leading-relaxed my-3">
        {renderInline(line, vocabulary)}
      </p>
    );
  }

  if (inTable) flushTable();
  if (inBlockquote) flushBlockquote();

  return elements;
}

function renderInline(text: string, vocabulary: VocabularyItem[]) {
  if (!vocabulary || vocabulary.length === 0) return text;

  let result: React.ReactNode[] = [text];

  vocabulary.forEach((item) => {
    const newResult: React.ReactNode[] = [];
    result.forEach((node) => {
      if (typeof node !== "string") {
        newResult.push(node);
        return;
      }

      const parts = node.split(new RegExp(`(\\b${item.word}\\b)`, "gi"));
      parts.forEach((part, idx) => {
        const match = part.toLowerCase() === item.word.toLowerCase();
        if (match) {
          newResult.push(
            <VocabularyPopover key={`${item.word}-${idx}`} item={item}>
              {part}
            </VocabularyPopover>
          );
        } else {
          newResult.push(part);
        }
      });
    });
    result = newResult;
  });

  // Bold rendering
  const finalResult: React.ReactNode[] = [];
  result.forEach((node) => {
    if (typeof node !== "string") {
      finalResult.push(node);
      return;
    }

    const boldParts = node.split(/(\*\*[^*]+\*\*)/g);
    boldParts.forEach((part, idx) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        finalResult.push(
          <strong key={`bold-${idx}`} className="font-semibold text-foreground">
            {part.slice(2, -2)}
          </strong>
        );
      } else {
        finalResult.push(part);
      }
    });
  });

  return finalResult;
}

export default function LessonPage() {
  const { user: authUser, status } = useAuth();
  const router = useRouter();
  const { id } = router.query;

  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [markingComplete, setMarkingComplete] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (!id || status !== "authenticated") return;

    const fetchLesson = async () => {
      try {
        const res = await fetch(`/api/lessons/${id}`);
        const data = await res.json();
        setLesson(data);
      } catch (error) {
        console.error("Failed to fetch lesson:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLesson();
  }, [id, status]);

  // Track time spent
  useEffect(() => {
    if (!lesson) return;
    const interval = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
    }, 60000); // Every minute

    return () => clearInterval(interval);
  }, [lesson]);

  const handleMarkComplete = async () => {
    if (!lesson) return;
    setMarkingComplete(true);

    try {
      const res = await fetch(`/api/lessons/${lesson.id}/progress`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          isCompleted: true,
          timeSpentMinutes: Math.max(timeSpent, 1),
        }),
      });

      if (res.ok) {
        toast.success("¡Excelente! Lesson completed!");
        setLesson((prev) =>
          prev
            ? {
                ...prev,
                userProgress: [
                  {
                    isCompleted: true,
                    timeSpentMinutes: (prev.userProgress?.[0]?.timeSpentMinutes ?? 0) + timeSpent,
                    quizScore: prev.userProgress?.[0]?.quizScore ?? null,
                  },
                ],
              }
            : null
        );
      }
    } catch (error) {
      toast.error("Failed to save progress");
    } finally {
      setMarkingComplete(false);
    }
  };

  const handleGenerateFlashcards = () => {
    if (!lesson) return;
    const vocab = lesson.vocabularyJson || [];
    if (vocab.length === 0) {
      toast.error("No vocabulary found in this lesson to create flashcards.");
      return;
    }
    const flashcards = vocab.map((item, idx) => ({
      id: `fc-${lesson.id}-${idx}`,
      spanishText: item.word,
      englishText: item.translation,
      exampleSentence: item.example || null,
      interval: 0,
      easeFactor: 2.5,
      repetitions: 0,
      isMastered: false,
      totalReviews: 0,
      totalCorrect: 0,
    }));
    localStorage.setItem(`sslid_flashcards_${lesson.id}`, JSON.stringify(flashcards));
    toast.success(`${flashcards.length} flashcards generated!`);
    router.push(`/flashcards?lessonId=${lesson.id}`);
  };

  const handlePracticeWithTutor = () => {
    if (!lesson) return;
    const sessionId = `local-chat-lesson-${lesson.id}-${Date.now()}`;
    const newSession = {
      id: sessionId,
      userId: "anonymous",
      userName: "Student",
      title: `Practice: ${lesson.title}`,
      topic: lesson.slug,
      lessonId: lesson.id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      messages: [],
    };
    localStorage.setItem(`sslid_chat_session_${sessionId}`, JSON.stringify(newSession));
    const sessionsList = JSON.parse(localStorage.getItem("sslid_chat_sessions") || "[]");
    sessionsList.unshift({
      id: sessionId,
      title: `Practice: ${lesson.title}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    localStorage.setItem("sslid_chat_sessions", JSON.stringify(sessionsList.slice(0, 50)));
    router.push(`/chat/${sessionId}`);
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground/40" />
          <h2 className="font-serif text-xl text-foreground mb-2">Lesson not found</h2>
          <Link href="/lessons">
            <Button variant="outline">Back to Lessons</Button>
          </Link>
        </div>
      </div>
    );
  }

  const progress = lesson.userProgress?.[0];
  const isCompleted = progress?.isCompleted ?? false;
  const vocabulary = lesson.vocabularyJson ?? [];
  const grammar = lesson.grammarJson ?? [];

  return (
    <div className="min-h-screen bg-gradient-hero pb-20">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container py-6">
          <Link
            href="/lessons"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Lessons
          </Link>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge className={cn("font-medium", difficultyColors[lesson.difficulty])}>
                  {lesson.difficulty.replace("_", " ")}
                </Badge>
                <span className="text-sm font-medium text-primary">{lesson.level}</span>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {lesson.durationMinutes} min
                </div>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl text-foreground">
                {lesson.title}
              </h1>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                {lesson.description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {isCompleted ? (
                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-medium">Completed</span>
                </div>
              ) : (
                <Button
                  onClick={handleMarkComplete}
                  disabled={markingComplete}
                  className="gap-2 bg-primary hover:bg-primary/90"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {markingComplete ? "Saving..." : "Mark Complete"}
                </Button>
              )}
            </div>
          </div>

          {/* Progress bar */}
          {progress && !isCompleted && (
            <div className="mt-4 max-w-md">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                <span>Progress</span>
                <span>{progress.timeSpentMinutes} min studied</span>
              </div>
              <Progress
                value={Math.min((progress.timeSpentMinutes / lesson.durationMinutes) * 100, 100)}
                className="h-2"
              />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 md:p-8">
                <div className="prose prose-slate max-w-none">
                  {renderContent(lesson.content, vocabulary)}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="outline" className="gap-2" onClick={handleGenerateFlashcards}>
                <Sparkles className="h-4 w-4" />
                Generate Flashcards
              </Button>
              <Button variant="outline" className="gap-2" onClick={handlePracticeWithTutor}>
                <MessageSquare className="h-4 w-4" />
                Practice with AI Tutor
              </Button>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Vocabulary Card */}
            {vocabulary.length > 0 && (
              <Card className="border-0 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-serif text-lg text-foreground mb-4 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Vocabulary
                  </h3>
                  <div className="space-y-3">
                    {vocabulary.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-foreground">{item.word}</span>
                          <span className="text-xs text-muted-foreground capitalize">{item.partOfSpeech}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.translation}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Grammar Card */}
            {grammar.length > 0 && (
              <Card className="border-0 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-serif text-lg text-foreground mb-4 flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-primary" />
                    Grammar Notes
                  </h3>
                  <div className="space-y-4">
                    {grammar.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                        <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Completion Card */}
            {!isCompleted && (
              <Card className="border-0 shadow-sm bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Trophy className="h-5 w-5 text-amber-500" />
                    <h3 className="font-medium text-foreground">Keep it up!</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete this lesson to track your progress and build your streak.
                  </p>
                  <Button
                    onClick={handleMarkComplete}
                    disabled={markingComplete}
                    className="w-full gap-2 bg-primary hover:bg-primary/90"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    {markingComplete ? "Saving..." : "Mark as Complete"}
                  </Button>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}