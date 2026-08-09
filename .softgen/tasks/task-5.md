---
title: Gamification, Achievements, and Progress Tracking
status: in_progress
priority: high
type: feature
tags: [gamification, achievements, xp, streaks, dashboard]
created_by: agent
created_at: 2026-08-09T07:45:00Z
position: 5
---

## Notes
Add gamification layer to Speak Spanish Like I Did:
- Achievement model and UserAchievement tracking
- VocabularyList and VocabularyWord models
- XP and level system
- Streak calendar heat map
- Enhanced dashboard with stats, charts, recommendations
- Achievements page with progress tracking
- Achievement definitions with requirements
- Seed script for achievements

## Checklist
- [ ] Update Prisma schema with Achievement, UserAchievement, VocabularyList, VocabularyWord
- [ ] Install recharts for charts
- [ ] Create lib/achievements.ts with achievement definitions
- [ ] Create lib/seed-achievements.ts seed script
- [ ] Create API: /api/user/stats
- [ ] Create API: /api/achievements/check
- [ ] Create AchievementCard component
- [ ] Create StreakCalendar component
- [ ] Create XPProgress component
- [ ] Enhance dashboard page with XP, streak, charts
- [ ] Create achievements page
- [ ] Push database schema
- [ ] Seed achievements into database
- [ ] Validate build

## Acceptance
- Dashboard shows XP level, streak calendar, and activity chart
- Achievements page displays all achievements with progress
- Achievements unlock based on user activity
- Due flashcard count shows urgency indicator