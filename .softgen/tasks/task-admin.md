---
title: Admin Panel — Student Management
status: done
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
- [x] Add `subscription_type` column to `users` table
- [x] Rewrite `/api/admin/stats.ts` to use Supabase
- [x] Create `/api/admin/students.ts` to list all students
- [x] Create `/api/admin/students/[id].ts` for student detail view
- [x] Rewrite `/pages/admin.tsx` with student data table
- [x] Add student detail modal/drawer with progress, activity, achievements
- [x] Add search and filter functionality
- [x] Add subscription type badges
- [x] Fix iframe preview redirect loops

## Acceptance
- [x] Admin can view all students in a sortable table
- [x] Admin can click a student to see their full progress and activity
- [x] Subscription types are visible and filterable
- [x] Stats API works without Prisma errors