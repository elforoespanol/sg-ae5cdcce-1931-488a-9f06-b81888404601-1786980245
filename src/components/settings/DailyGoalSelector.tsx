import { useState } from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface DailyGoalSelectorProps {
  currentGoal: number;
  onSave: (goal: number) => Promise<void>;
}

const PRESETS = [5, 10, 20, 50];

export function DailyGoalSelector({ currentGoal, onSave }: DailyGoalSelectorProps) {
  const [goal, setGoal] = useState(currentGoal);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      await onSave(goal);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } finally {
      setSaving(false);
    }
  };

  const weeklyTotal = goal * 7;
  const monthlyTotal = goal * 30;

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label className="flex items-center gap-2">
          <Target className="h-4 w-4 text-primary" />
          Daily Flashcard Goal
        </Label>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setGoal(preset)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                goal === preset
                  ? "bg-primary text-primary-foreground shadow-sm ring-2 ring-primary ring-offset-2"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {preset} cards
            </button>
          ))}
        </div>
        <input
          type="range"
          min={5}
          max={100}
          step={5}
          value={goal}
          onChange={(e) => setGoal(Number(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>5 cards</span>
          <span className="font-medium text-foreground">{goal} cards/day</span>
          <span>100 cards</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <motion.div
          key={weeklyTotal}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="p-4 rounded-lg bg-muted/50 space-y-1"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4" />
            Weekly
          </div>
          <p className="text-2xl font-bold text-foreground">{weeklyTotal}</p>
          <p className="text-xs text-muted-foreground">flashcards per week</p>
        </motion.div>
        <motion.div
          key={monthlyTotal}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="p-4 rounded-lg bg-muted/50 space-y-1"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4" />
            Monthly
          </div>
          <p className="text-2xl font-bold text-foreground">{monthlyTotal}</p>
          <p className="text-xs text-muted-foreground">flashcards per month</p>
        </motion.div>
      </div>

      <div className="flex items-center gap-3">
        <Button onClick={handleSave} disabled={saving || goal === currentGoal}>
          {saving ? "Saving..." : "Save Goal"}
        </Button>
        {saved && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm text-green-600 font-medium"
          >
            Goal updated!
          </motion.span>
        )}
      </div>
    </div>
  );
}