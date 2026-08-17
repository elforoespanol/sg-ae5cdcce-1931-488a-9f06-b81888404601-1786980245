import { useRegion } from "@/contexts/RegionContext";
import type { DialogueScenario } from "@/lib/lessons-data";
import { MapPin, Globe, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface DialogueCardProps {
  scenarios: DialogueScenario[];
}

export function DialogueCard({ scenarios }: DialogueCardProps) {
  const { region } = useRegion();

  const filtered = scenarios.filter((s) => s.region === region);
  const otherScenarios = scenarios.filter((s) => s.region !== region);

  return (
    <div className="space-y-6">
      {/* Active region dialogues */}
      {filtered.map((scenario) => (
        <div
          key={scenario.id}
          className="rounded-xl border border-border bg-card p-5 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-3">
            {scenario.region === "SPAIN" ? (
              <MapPin className="h-4 w-4 text-brand-terracotta" />
            ) : (
              <Globe className="h-4 w-4 text-brand-terracotta" />
            )}
            <h4 className="font-serif font-medium text-foreground">{scenario.title}</h4>
            <span className="ml-auto text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
              {scenario.setting}
            </span>
          </div>
          <div className="space-y-2">
            {scenario.lines.map((line, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="text-xs font-medium text-brand-terracotta w-16 shrink-0 pt-0.5">
                  {line.speaker}
                </span>
                <p className="text-sm text-foreground">{line.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Divider */}
      {otherScenarios.length > 0 && (
        <div className="flex items-center gap-3 py-2">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground font-medium">
            {region === "SPAIN" ? "LATAM Variants" : "Spain Variants"}
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>
      )}

      {/* Other region dialogues (muted) */}
      {otherScenarios.map((scenario) => (
        <div
          key={scenario.id}
          className="rounded-xl border border-border/60 bg-muted/20 p-5 opacity-70 hover:opacity-100 transition-opacity"
        >
          <div className="flex items-center gap-2 mb-3">
            {scenario.region === "SPAIN" ? (
              <MapPin className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Globe className="h-4 w-4 text-muted-foreground" />
            )}
            <h4 className="font-serif font-medium text-muted-foreground">{scenario.title}</h4>
            <span className="ml-auto text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
              {scenario.setting}
            </span>
          </div>
          <div className="space-y-2">
            {scenario.lines.map((line, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="text-xs font-medium text-muted-foreground w-16 shrink-0 pt-0.5">
                  {line.speaker}
                </span>
                <p className="text-sm text-muted-foreground">{line.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}