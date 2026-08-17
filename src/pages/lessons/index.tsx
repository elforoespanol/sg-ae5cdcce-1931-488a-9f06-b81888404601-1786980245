import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BookOpen, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { RegionContext } from "@/contexts/RegionContext";
import { RegionToggle } from "@/components/lessons/RegionToggle";
import { LessonCard } from "@/components/LessonCard";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";

export const dynamic = "force-dynamic";

const LEVELS = ["A1", "A2", "B1", "B2"];

export default function LessonsPage() {
  const router = useRouter();
  const [selectedLevel, setSelectedLevel] = useState("A1");
  const [region, setRegion] = useState<"SPAIN" | "LATAM">("SPAIN");
  const [lessons, setLessons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/lessons/by-level?level=${selectedLevel}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch lessons: ${response.statusText}`);
        }
        
        const data = await response.json();
        setLessons(data.lessons || []);
        setError(null);
      } catch (err) {
        console.error("Error fetching lessons:", err);
        setError("Failed to load lessons. Please try again.");
        setLessons([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, [selectedLevel]);

  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      <Head>
        <title>Lessons - EspañolMastery</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-background to-card">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <BookOpen size={32} />
                <h1 className="text-4xl font-bold">Lessons</h1>
              </div>
              <RegionToggle />
            </div>
            <p className="text-primary-foreground/90 text-lg">
              Choose your level and start learning Spanish with interactive lessons
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Level Selection */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Select a Level</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {LEVELS.map((level) => (
                <motion.button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`py-4 px-6 rounded-lg font-semibold transition-all ${
                    selectedLevel === level
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-card border border-border hover:bg-accent"
                  }`}
                >
                  {level}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Lessons Grid */}
          {error && (
            <div className="bg-destructive/10 text-destructive p-4 rounded-lg mb-6">
              {error}
            </div>
          )}

          {loading ? (
            <LoadingSkeleton />
          ) : lessons.length === 0 ? (
            <div className="text-center py-12">
              <Lock size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground text-lg">No lessons available for this level.</p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {lessons.map((lesson) => (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <LessonCard
                    id={lesson.id}
                    title={lesson.title}
                    description={lesson.description}
                    level={lesson.level}
                    difficulty={lesson.difficulty}
                    durationMinutes={lesson.durationMinutes}
                    imageUrl={lesson.imageUrl}
                    order={lesson.order}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </RegionContext.Provider>
  );
}