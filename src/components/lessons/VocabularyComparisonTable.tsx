import { useRegion } from "@/contexts/RegionContext";
import type { RegionalVocabItem } from "@/lib/lessons-data";
import { cn } from "@/lib/utils";

interface VocabularyComparisonTableProps {
  items: RegionalVocabItem[];
}

export function VocabularyComparisonTable({ items }: VocabularyComparisonTableProps) {
  const { currentMode, isSpain } = useRegion();

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Word</th>
            <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Spain</th>
            <th className="text-left py-2 pr-4 font-medium text-muted-foreground">LATAM</th>
            <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Phonetic</th>
            <th className="text-left py-2 font-medium text-muted-foreground">English</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr
              key={idx}
              className={cn(
                "border-b border-border/50 transition-colors",
                idx % 2 === 0 ? "bg-background" : "bg-muted/30"
              )}
            >
              <td className="py-2.5 pr-4 font-serif font-medium text-foreground">{item.word}</td>
              <td
                className={cn(
                  "py-2.5 pr-4 font-medium",
                  isSpain ? "text-brand-terracotta" : "text-muted-foreground"
                )}
              >
                {item.spainVariant}
              </td>
              <td
                className={cn(
                  "py-2.5 pr-4 font-medium",
                  !isSpain ? "text-brand-terracotta" : "text-muted-foreground"
                )}
              >
                {item.latamVariant}
              </td>
              <td className="py-2.5 pr-4 text-muted-foreground font-mono text-xs">
                {isSpain ? item.phoneticSpain : item.phoneticLatam}
              </td>
              <td className="py-2.5 text-muted-foreground">{item.english}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}