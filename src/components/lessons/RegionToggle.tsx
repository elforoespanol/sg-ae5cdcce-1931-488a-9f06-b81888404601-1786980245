import { useRegion } from "@/contexts/RegionContext";
import { Globe, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export function RegionToggle() {
  const { region, setRegion } = useRegion();

  return (
    <div className="inline-flex items-center bg-muted rounded-full p-1 gap-1">
      <button
        onClick={() => setRegion("SPAIN")}
        className={`px-4 py-1 rounded-full font-medium transition-all ${
          region === "SPAIN"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Spain
      </button>
      <button
        onClick={() => setRegion("LATAM")}
        className={`px-4 py-1 rounded-full font-medium transition-all ${
          region === "LATAM"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Latam
      </button>
    </div>
  );
}