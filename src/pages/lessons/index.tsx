import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { Search, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LessonCard } from "@/components/LessonCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/contexts/AuthContext";

const levels = ["ALL", "A1", "A2", "B1", "B2", "C1", "C2"];

interface Lesson {
  id: string;
  title: string;
  slug: string;
  description: string;
  difficulty: string;
  level: string;
  order: number;
  imageUrl: string | null;
  durationMinutes: number;
  isPublished: boolean;
  userProgress: {
    isCompleted: boolean;
    timeSpentMinutes: number;
    lastAccessedAt: string;
  }[];
}

export default function LessonsPage() {
  const { user: authUser, status } = useAuth();
  const router = useRouter();
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLevel, setSelectedLevel] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated") return;

    const fetchLessons = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (selectedLevel !== "ALL") params.append("level", selectedLevel);
        if (searchQuery) params.append("search", searchQuery);

        const res = await fetch(`/api/lessons?${params.toString()}`);
        if (!res.ok) {
          console.error("Lessons API error:", res.status);
          setLessons([]);
          return;
        }
        const data = await res.json();
        setLessons(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch lessons:", error);
        setLessons([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, [selectedLevel, searchQuery, status]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!authUser) return null;

  return (
    <div className="min-h-screen bg-gradient-hero pb-20">
      <Head>
        <title>Lessons — Speak Spanish Like I Did</title>
        <meta name="description" content="Browse Spanish lessons from A1 beginner to C2 mastery." />
      </Head>
      <div className="container py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="h-7 w-7 text-primary" />
            <h1 className="font-serif text-3xl md:text-4xl text-foreground">
              Lessons
            </h1>
          </div>
          <p className="text-muted-foreground">
            Browse our curated Spanish lessons from beginner to mastery
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search lessons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-0 shadow-sm"
            />
          </div>

          {/* Level Tabs */}
          <div className="flex flex-wrap gap-2">
            {levels.map((level) => (
              <Button
                key={level}
                variant={selectedLevel === level ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedLevel(level)}
                className={`rounded-full transition-all ${
                  selectedLevel === level
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-card border-0 hover:bg-muted"
                }`}
              >
                {level === "ALL" ? "All Levels" : level}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Lesson Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="h-32 w-full rounded-xl" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : lessons.length === 0 ? (
          <div className="text-center py-16">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground/40" />
            <h3 className="font-serif text-xl text-foreground mb-2">No lessons found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or level filter
            </p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {Array.isArray(lessons) && lessons.map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  id={lesson.id}
                  title={lesson.title}
                  description={lesson.description}
                  level={lesson.level}
                  difficulty={lesson.difficulty}
                  durationMinutes={lesson.durationMinutes}
                  imageUrl={lesson.imageUrl}
                  progress={lesson.userProgress?.[0] ?? null}
                  order={lesson.order}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}