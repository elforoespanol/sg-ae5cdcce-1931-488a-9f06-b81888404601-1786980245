---
title: Dashboard and Lesson System
status: in_progress
priority: high
type: feature
tags: [dashboard, lessons, prisma, api]
created_by: agent
created_at: 2026-08-07T15:14:00Z
position: 2
---

## Notes
Add dashboard and lesson system to Speak Spanish Like I Did platform.
- Prisma schema: Difficulty enum, Lesson model, UserLessonProgress model
- Dashboard layout with sidebar/bottom nav
- Dashboard home: stats, streak, recent activity, quick actions
- Lessons browser: filter by level, search, sort
- Lesson viewer: rich content, vocabulary popovers, grammar callouts, progress tracking
- API routes for lessons and progress
- Seed script with 5 sample lessons
- Components: LessonCard, VocabularyPopover, DashboardStats

## Checklist
- [ ] Install missing packages (next-auth, prisma client, bcryptjs, react-hot-toast)
- [ ] Update Prisma schema with Difficulty, Lesson, UserLessonProgress models
- [ ] Create seed script with 5 sample lessons
- [ ] Create API routes: /api/lessons, /api/lessons/[id]/progress
- [ ] Create DashboardLayout component with sidebar/bottom nav
- [ ] Create DashboardStats component with animated counters
- [ ] Create LessonCard component
- [ ] Create VocabularyPopover component
- [ ] Create dashboard index page (stats, streak, recent activity)
- [ ] Create lessons index page (browser with filters)
- [ ] Create individual lesson page (viewer with content, vocabulary, grammar)
- [ ] Update _app.tsx for dashboard layout support
- [ ] Run check_for_errors

## Acceptance
- Dashboard shows user stats, streak, and recent activity
- Lessons page displays cards filterable by Spanish level
- Individual lesson page shows rich content with vocabulary popovers
- Progress can be tracked and saved to database