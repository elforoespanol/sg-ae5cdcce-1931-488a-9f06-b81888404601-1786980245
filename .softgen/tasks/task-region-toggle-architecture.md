---
title: Spain/LATAM Toggle Architecture & Lesson Framework
status: in_progress
priority: urgent
type: feature
tags: [architecture, lessons, spain-latam, toggle]
created_by: agent
created_at: 2026-08-16T13:52:00Z
position: 1
---
## Notes
Initialize the structural framework for CEFR-based Spanish lessons with a Spain vs LATAM regional toggle. Lessons array stays empty until data batches arrive.

## Checklist
- [ ] Create RegionContext (global Spain/LATAM toggle state)
- [ ] Update lessons-data.ts with new schema (vocab comparison, dialogues, quiz, flashcards)
- [ ] Create VocabularyComparisonTable component
- [ ] Create DialogueCard component (3 Spain + 3 LATAM)
- [ ] Create LessonQuiz component (5 MCQs)
- [ ] Create RegionAwareFlashcard component
- [ ] Wrap _app.tsx with RegionProvider
- [ ] Update lesson detail page to render new sections
- [ ] Verify build passes
]]></update_file_sections><create_file file_path="src/contexts/RegionContext.tsx"><![CDATA[
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