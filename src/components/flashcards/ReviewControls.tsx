import { motion } from "framer-motion";
import { RotateCcw, Zap, Check, Star } from "lucide-react";

interface ReviewControlsProps {
  onRate: (rating: number) => void;
  disabled: boolean;
}

const buttons = [
  { rating: 0, label: "Again", sublabel: "Didn't know it", color: "bg-red-500 hover:bg-red-600", icon: RotateCcw, key: "1" },
  { rating: 1, label: "Hard", sublabel: "Barely got it", color: "bg-orange-500 hover:bg-orange-600", icon: Zap, key: "2" },
  { rating: 2, label: "Good", sublabel: "Got it right", color: "bg-emerald-500 hover:bg-emerald-600", icon: Check, key: "3" },
  { rating: 3, label: "Easy", sublabel: "Too easy!", color: "bg-blue-500 hover:bg-blue-600", icon: Star, key: "4" },
];

export function ReviewControls({ onRate, disabled }: ReviewControlsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-lg mx-auto">
      {buttons.map(({ rating, label, sublabel, color, icon: Icon, key }) => (
        <motion.button
          key={rating}
          whileHover={{ scale: disabled ? 1 : 1.05 }}
          whileTap={{ scale: disabled ? 1 : 0.95 }}
          onClick={() => onRate(rating)}
          disabled={disabled}
          className={`flex flex-col items-center gap-1.5 p-4 rounded-xl text-white font-medium transition-all ${color} ${
            disabled ? "opacity-50 cursor-not-allowed" : "shadow-lg"
          }`}
        >
          <Icon className="h-5 w-5" />
          <span className="text-sm">{label}</span>
          <span className="text-[10px] opacity-80">{sublabel}</span>
          <span className="text-[10px] opacity-60 font-mono">{key}</span>
        </motion.button>
      ))}
    </div>
  );
}