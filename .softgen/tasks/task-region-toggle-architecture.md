---
title: Spain/LATAM Toggle Architecture & Lesson Framework
status: done
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
- [x] Create RegionContext (global Spain/LATAM toggle state)
- [x] Update lessons-data.ts with new schema (vocab comparison, dialogues, quiz, flashcards)
- [x] Create VocabularyComparisonTable component
- [x] Create DialogueCard component (3 Spain + 3 LATAM)
- [x] Create LessonQuiz component (5 MCQs)
- [x] Create RegionAwareFlashcard component
- [x] Wrap _app.tsx with RegionProvider
- [x] Update lesson detail page to render new sections
- [x] Verify build passes

## Acceptance
- [ ] Region toggle visible in lesson header
- [ ] Switching toggle updates vocabulary table, grammar content, dialogues, and flashcards
- [ ] Quiz component renders 5 questions with scoring