import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface LessonCardProps {
  id: string;
  title: string;
  description: string;
  level: string;
  difficulty: string;
  durationMinutes: number;
  imageUrl?: string | null;
  progress?: {
    isCompleted: boolean;
    timeSpentMinutes: number;
  } | null;
  order: number;
}

const difficultyColors: Record<string, string> = {
  BEGINNER: "bg-emerald-100 text-emerald-700",
  ELEMENTARY: "bg-blue-100 text-blue-700",
  INTERMEDIATE: "bg-amber-100 text-amber-700",
  UPPER_INTERMEDIATE: "bg-orange-100 text-orange-700",
  ADVANCED: "bg-red-100 text-red-700",
  MASTERY: "bg-purple-100 text-purple-700",
};

const levelColors: Record<string, string> = {
  A1: "bg-emerald-500",
  A2: "bg-blue-500",
  B1: "bg-amber-500",
  B2: "bg-orange-500",
  C1: "bg-red-500",
  C2: "bg-purple-500",
};

export function LessonCard({
  id,
  title,
  description,
  level,
  difficulty,
  durationMinutes,
  imageUrl,
  progress,
}: LessonCardProps) {
  const isCompleted = progress?.isCompleted ?? false;
  const hasStarted = progress && progress.timeSpentMinutes > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Link href={`/lessons/${id}`}>
        <Card className={cn(
          "border-0 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden group",
          isCompleted && "ring-1 ring-emerald-200"
        )}>
          {/* Image or color header */}
          <div className={cn(
            "h-32 w-full relative overflow-hidden",
            !imageUrl && levelColors[level]
          )}>
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-serif text-white/90">{level}</span>
              </div>
            )}
            {isCompleted && (
              <div className="absolute top-3 right-3">
                <CheckCircle2 className="h-6 w-6 text-emerald-500 bg-white rounded-full" />
              </div>
            )}
          </div>

          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary" className={cn("text-xs font-medium", difficultyColors[difficulty])}>
                {difficulty.replace("_", " ")}
              </Badge>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {durationMinutes} min
              </div>
            </div>

            <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {description}
            </p>

            {hasStarted && !isCompleted && (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>In progress</span>
                  <span>{progress?.timeSpentMinutes} min</span>
                </div>
                <Progress
                  value={Math.min((progress?.timeSpentMinutes ?? 0) / durationMinutes * 100, 100)}
                  className="h-1.5"
                />
              </div>
            )}

            {isCompleted && (
              <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Completed
              </div>
            )}

            {!hasStarted && !isCompleted && (
              <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
                <BarChart3 className="h-3.5 w-3.5" />
                Start learning
              </div>
            )}
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}