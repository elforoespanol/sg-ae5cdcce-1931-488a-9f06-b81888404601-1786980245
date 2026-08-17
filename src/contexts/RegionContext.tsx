import { createContext, useState, ReactNode } from "react";

export type RegionMode = "SPAIN" | "LATAM";

export interface RegionContextType {
  region: RegionMode;
  setRegion: (region: RegionMode) => void;
}

export const RegionContext = createContext<RegionContextType>({
  region: "SPAIN",
  setRegion: () => {},
});

export function RegionProvider({ children }: { children: ReactNode }) {
  const [region, setRegion] = useState<RegionMode>("SPAIN");

  return (
    <RegionContext.Provider
      value={{
        region,
        setRegion,
      }}
    >
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion() {
  const context = React.useContext(RegionContext);
  if (!context) {
    throw new Error("useRegion must be used within RegionProvider");
  }
  return context;
}