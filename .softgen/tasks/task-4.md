---
title: Flashcard System with AI Generation and Spaced Repetition
status: in_progress
priority: high
type: feature
tags: [flashcards, spaced-repetition, ai, sm-2, review]
created_by: agent
created_at: 2026-08-09T07:31:00Z
position: 4
---

## Notes
Complete flashcard system with AI generation and SM-2 spaced repetition.
- Prisma schema: Flashcard, FlashcardReviewLog models
- SM-2 algorithm for calculating next review dates
- AI flashcard generation from lesson content
- Review session with card flip, rating controls, progress tracking
- Flashcard management page
- Session completion with stats and confetti
- Web Speech API for pronunciation

## Checklist
- [ ] Update Prisma schema with Flashcard and FlashcardReviewLog
- [ ] Install canvas-confetti package
- [ ] Create lib/spaced-repetition.ts (SM-2 algorithm)
- [ ] Create API: /api/flashcards/generate (AI generation)
- [ ] Create API: /api/flashcards/review (GET due cards, POST review)
- [ ] Create flashcard review page
- [ ] Create flashcard management page
- [ ] Create FlashcardDeck component
- [ ] Create FlashcardItem component with 3D flip
- [ ] Create ReviewControls component
- [ ] Create FlashcardProgress component
- [ ] Create SessionComplete component
- [ ] Create EmptyDeck component
- [ ] Create useReviewSession hook
- [ ] Push database schema
- [ ] Validate build passes

## Acceptance
- Flashcards can be generated from lesson content via AI
- Review session shows cards with flip animation
- SM-2 algorithm calculates next review dates
- Session completion shows stats and confetti
- Management page allows browsing and editing cards