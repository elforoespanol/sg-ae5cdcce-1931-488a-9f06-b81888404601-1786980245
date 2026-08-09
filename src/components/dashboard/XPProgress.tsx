import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { getLevelInfo } from "@/lib/achievements";

interface XPProgressProps {
  totalXp: number;
}

export function XPProgress({ totalXp }: XPProgressProps) {
  const { level, title, xpForNext, progress } = getLevelInfo(totalXp);
  const xpInLevel = totalXp - (xpForNext - (level === 1 ? 100 : level === 2 ? 200 : level === 3 ? 300 : level === 4 ? 400 : level === 5 ? 500 : level === 6 ? 700 : level === 7 ? 800 : level === 8 ? 1000 : 1000));
  const xpNeeded = xpForNext - (xpForNext - (level === 1 ? 100 : level === 2 ? 200 : level === 3 ? 300 : level === 4 ? 400 : level === 5 ? 500 : level === 6 ? 700 : level === 7 ? 800 : level === 8 ? 1000 : 1000));

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200/50">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
            <span className="text-sm font-medium text-amber-700">Level {level}</span>
          </div>
          <h3 className="font-serif text-xl text-foreground">{title}</h3>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-foreground">{totalXp}</div>
          <div className="text-xs text-muted-foreground">Total XP</div>
        </div>
      </div>

      <div className="relative h-3 bg-amber-200/50 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
        <span>{Math.max(0, xpInLevel)} XP</span>
        <span>{xpNeeded} XP to next level</span>
      </div>
    </div>
  );
}