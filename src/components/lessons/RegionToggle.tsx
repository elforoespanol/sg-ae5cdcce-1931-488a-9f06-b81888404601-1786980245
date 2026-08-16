import { useRegion } from "@/contexts/RegionContext";
import { Globe, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export function RegionToggle() {
  const { currentMode, setMode } = useRegion();

  return (
    <div className="inline-flex items-center bg-muted rounded-full p-1 gap-1">
      <button
        onClick={() => setMode("SPAIN")}
        className={cn(
          "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all",
          currentMode === "SPAIN"
            ? "bg-brand-terracotta text-white shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-pressed={currentMode === "SPAIN"}
      >
        <MapPin className="h-3 w-3" />
        Spain
      </button>
      <button
        onClick={() => setMode("LATAM")}
        className={cn(
          "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all",
          currentMode === "LATAM"
            ? "bg-brand-terracotta text-white shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-pressed={currentMode === "LATAM"}
      >
        <Globe className="h-3 w-3" />
        LATAM
      </button>
    </div>
  );
}