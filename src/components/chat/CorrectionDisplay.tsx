import { motion } from "framer-motion";
import { XCircle, CheckCircle, Lightbulb } from "lucide-react";

interface CorrectionDisplayProps {
  original: string;
  corrected: string;
  explanation: string;
}

export function CorrectionDisplay({
  original,
  corrected,
  explanation,
}: CorrectionDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="mt-3 rounded-xl border border-amber-200 bg-amber-50/80 p-4 shadow-sm"
    >
      <div className="flex items-center gap-2 mb-3">
        <Lightbulb className="h-4 w-4 text-amber-600" />
        <span className="text-xs font-semibold uppercase tracking-wide text-amber-700">
          Sofía's Tip
        </span>
      </div>

      <div className="space-y-2.5">
        <div className="flex items-start gap-2.5">
          <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wide text-red-600 mb-0.5">
              Original
            </p>
            <p className="text-sm text-red-700 line-through opacity-80">
              {original}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wide text-emerald-700 mb-0.5">
              Corrected
            </p>
            <p className="text-sm font-medium text-emerald-800">
              {corrected}
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-amber-200/60">
          <p className="text-xs text-amber-800 leading-relaxed">
            {explanation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}