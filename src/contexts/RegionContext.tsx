import React, { createContext, useContext, useState, useCallback } from "react";

export type RegionMode = "SPAIN" | "LATAM";

interface RegionContextValue {
  currentMode: RegionMode;
  setMode: (mode: RegionMode) => void;
  toggleMode: () => void;
  isSpain: boolean;
  isLatam: boolean;
}

const RegionContext = createContext<RegionContextValue | undefined>(undefined);

export function RegionProvider({ children }: { children: React.ReactNode }) {
  const [currentMode, setCurrentMode] = useState<RegionMode>("LATAM");

  const setMode = useCallback((mode: RegionMode) => {
    setCurrentMode(mode);
  }, []);

  const toggleMode = useCallback(() => {
    setCurrentMode((prev) => (prev === "SPAIN" ? "LATAM" : "SPAIN"));
  }, []);

  return (
    <RegionContext.Provider
      value={{
        currentMode,
        setMode,
        toggleMode,
        isSpain: currentMode === "SPAIN",
        isLatam: currentMode === "LATAM",
      }}
    >
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion() {
  const ctx = useContext(RegionContext);
  if (!ctx) throw new Error("useRegion must be used within RegionProvider");
  return ctx;
}