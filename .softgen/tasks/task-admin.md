---
title: Admin Panel — Student Management
status: in_progress
priority: high
type: feature
tags: [admin, dashboard, students]
created_by: agent
created_at: 2026-08-10T10:00:00Z
position: 10
---

## Notes
Build a comprehensive admin panel for monitoring students, their progress, and subscription types. Replace Prisma-based APIs with Supabase.

## Checklist
- [ ] Add `subscription_type` column to `users` table
- [ ] Rewrite `/api/admin/stats.ts` to use Supabase
- [ ] Create `/api/admin/students.ts` to list all students
- [ ] Create `/api/admin/students/[id].ts` for student detail view
- [ ] Rewrite `/pages/admin.tsx` with student data table
- [ ] Add student detail modal/drawer with progress, activity, achievements
- [ ] Add search and filter functionality
- [ ] Add subscription type badges

## Acceptance
- [ ] Admin can view all students in a sortable table
- [ ] Admin can click a student to see their full progress and activity
- [ ] Subscription types are visible and filterable
- [ ] Stats API works without Prisma errors