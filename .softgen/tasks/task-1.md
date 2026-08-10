---
title: Spanish Learning Platform - Setup & Design System
status: in_progress
priority: urgent
type: chore
tags: [setup, design-system, database, auth]
created_by: agent
created_at: 2026-08-07T14:54:00Z
position: 1
---

## Notes
Building "Speak Spanish Like I Did" — a Spanish language learning platform.
Adapting App Router specs to Page Router (src/pages/).

## Checklist
- [x] Install required packages (next-auth, prisma, bcryptjs, openai, ai, react-hot-toast)
- [x] Set up Prisma schema with User, Account, Session, VerificationToken models
- [x] Update globals.css with Spanish-inspired color palette and fonts
- [x] Update tailwind.config.ts with custom fonts and animations
- [x] Create lib/prisma.ts client singleton
- [x] Create lib/auth.ts NextAuth configuration
- [x] Create API route for NextAuth
- [x] Create middleware for route protection
- [x] Create Navbar component
- [x] Build landing page (index.tsx)
- [x] Build login page
- [x] Build register page

## Acceptance
- App loads without errors
- Design system tokens are applied (cream background, terracotta accents)
- All pages render correctly
- Auth flow works (login/register)