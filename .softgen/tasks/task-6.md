---
title: User Settings, Profile, and UI Polish
status: in_progress
priority: medium
type: feature
tags: [settings, profile, ui-polish, error-boundary, loading-states]
created_by: agent
created_at: 2026-08-09T07:50:00Z
position: 6
---

## Notes
Add user settings, profile pages, and polish the UI with loading states, error handling, and consistent design.
- User settings: profile, learning goals, notifications, account
- Public profile with stats and achievements showcase
- Error boundary for graceful error handling
- Skeleton loaders for all async pages
- Custom 404 and error pages
- Enhanced Navbar with notifications and profile dropdown
- Utility functions for formatting and level calculation

## Checklist
- [ ] Update Prisma schema with user settings fields
- [ ] Create settings page with all sections
- [ ] Create profile page
- [ ] Create ProfileForm component
- [ ] Create PasswordChange component
- [ ] Create DailyGoalSelector component
- [ ] Create API routes for profile/password updates
- [ ] Create ErrorBoundary component
- [ ] Create LoadingSkeleton components
- [ ] Update 404 page with Spanish theme
- [ ] Create error page
- [ ] Update Navbar with notifications and profile dropdown
- [ ] Update globals.css with transitions and animations
- [ ] Update lib/utils.ts with helpers
- [ ] Validate build passes

## Acceptance
- Settings page allows updating profile, password, and goals
- Profile page shows public stats and achievements
- Loading skeletons appear during data fetching
- Error boundary catches rendering errors gracefully
- Custom 404 page is Spanish-themed
- All interactive elements have hover transitions