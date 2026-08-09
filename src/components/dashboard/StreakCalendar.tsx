import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { format, subDays, isSameDay } from "date-fns";

interface StudyDay {
  date: Date;
  minutes: number;
}

interface StreakCalendarProps {
  streak: number;
  longestStreak?: number;
  studyData?: StudyDay[];
}

export function StreakCalendar({ streak, longestStreak = 0, studyData = [] }: StreakCalendarProps) {
  const days: { date: Date; minutes: number }[] = [];
  for (let i = 27; i >= 0; i--) {
    const date = subDays(new Date(), i);
    const found = studyData.find((d) => isSameDay(new Date(d.date), date));
    days.push({ date, minutes: found?.minutes || 0 });
  }

  const getIntensity = (minutes: number) => {
    if (minutes === 0) return "bg-muted";
    if (minutes < 15) return "bg-orange-200";
    if (minutes < 30) return "bg-orange-300";
    if (minutes < 45) return "bg-orange-400";
    return "bg-orange-500";
  };

  return (
    <div className="bg-card rounded-2xl p-6 border shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Flame className="h-5 w-5 text-orange-500" />
            <span className="text-sm font-medium text-orange-600">{streak} day streak</span>
          </div>
          <p className="text-xs text-muted-foreground">Longest: {longestStreak} days</p>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1.5">
        {days.map((day, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.02 }}
            className={`aspect-square rounded-md ${getIntensity(day.minutes)} relative group cursor-default`}
            title={`${format(day.date, "MMM d")}: ${day.minutes} min`}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[9px] font-medium text-white drop-shadow-md">
                {format(day.date, "d")}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-sm bg-muted" />
          <div className="w-3 h-3 rounded-sm bg-orange-200" />
          <div className="w-3 h-3 rounded-sm bg-orange-300" />
          <div className="w-3 h-3 rounded-sm bg-orange-400" />
          <div className="w-3 h-3 rounded-sm bg-orange-500" />
        </div>
        <span>More</span>
      </div>
    </div>
  );
}