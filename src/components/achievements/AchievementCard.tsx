import { motion } from "framer-motion";
import { Lock, Sparkles } from "lucide-react";
import { ICON_MAP } from "@/lib/achievements";

interface AchievementCardProps {
  id: string;
  name: string;
  description: string;
  iconName: string;
  category: string;
  unlockedAt?: Date | null;
  progress?: number;
  requirement?: number;
}

export function AchievementCard({
  name,
  description,
  iconName,
  category,
  unlockedAt,
  progress = 0,
  requirement = 1,
}: AchievementCardProps) {
  const isUnlocked = !!unlockedAt;
  const Icon = ICON_MAP[iconName] || Sparkles;

  const categoryColors: Record<string, string> = {
    lessons: "bg-emerald-50 text-emerald-600 border-emerald-200",
    chat: "bg-blue-50 text-blue-600 border-blue-200",
    flashcards: "bg-purple-50 text-purple-600 border-purple-200",
    streak: "bg-orange-50 text-orange-600 border-orange-200",
    special: "bg-amber-50 text-amber-600 border-amber-200",
  };

  return (
    <motion.div
      whileHover={isUnlocked ? { y: -4 } : {}}
      className={`relative rounded-xl border p-5 transition-all ${
        isUnlocked
          ? "bg-card shadow-sm hover:shadow-md"
          : "bg-muted/30 border-muted"
      }`}
    >
      {!isUnlocked && (
        <div className="absolute inset-0 bg-background/40 rounded-xl flex items-center justify-center z-10 backdrop-blur-[1px]">
          <div className="flex flex-col items-center gap-1">
            <Lock className="h-5 w-5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Locked</span>
          </div>
        </div>
      )}

      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
            categoryColors[category] || categoryColors.special
          } ${!isUnlocked ? "grayscale opacity-50" : ""}`}
        >
          <Icon className="h-6 w-6" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className={`font-medium text-sm ${!isUnlocked ? "text-muted-foreground" : "text-foreground"}`}>
            {name}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{description}</p>

          {!isUnlocked && progress > 0 && (
            <div className="mt-2">
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>{progress}</span>
                <span>{requirement}</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, (progress / requirement) * 100)}%` }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </div>
          )}

          {isUnlocked && (
            <p className="text-xs text-primary mt-1.5">
              Unlocked {unlockedAt ? new Date(unlockedAt).toLocaleDateString() : ""}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}