# Speak Spanish Like I Did

A comprehensive Spanish learning platform built with Next.js, AI-powered tutoring, flashcards with spaced repetition, and gamification.

## Features

- **Structured Lessons** — 30 lessons across CEFR levels (A1–C2) with vocabulary, grammar, and interactive exercises
- **AI Language Tutor** — Chat with GPT-4o for real-time conversation practice, grammar corrections, and cultural insights
- **Smart Flashcards** — AI-generated flashcards with SM-2 spaced repetition algorithm
- **Gamification** — XP system, levels, achievements, and daily streaks
- **Progress Tracking** — Dashboard with study analytics, heat maps, and skill breakdowns
- **User Profiles** — Customizable settings, learning goals, and public profiles

## Tech Stack

- **Framework**: Next.js 15 (Page Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: PostgreSQL via Prisma ORM
- **Auth**: NextAuth.js with credentials provider
- **AI**: OpenAI GPT-4o
- **Animations**: Framer Motion
- **Charts**: Recharts

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (or Supabase)
- OpenAI API key

### Environment Setup

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Required variables:
- `DATABASE_URL` — PostgreSQL connection string
- `NEXTAUTH_SECRET` — Random string for JWT signing
- `NEXTAUTH_URL` — Your app URL
- `OPENAI_API_KEY` — OpenAI API key

### Installation

```bash
npm install
```

### Database Setup

```bash
# Push schema and seed data
npm run db:reset
```

Or manually:
```bash
npx prisma db push
npx prisma db seed
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment (Vercel)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Build Command

The build script handles Prisma generation and database push:
```bash
prisma generate && prisma db push && next build
```

## Project Structure

```
src/
  components/     # React components
  contexts/       # React contexts
  hooks/          # Custom hooks
  lib/            # Utilities, algorithms, validations
  pages/          # Next.js pages
  services/       # API service layer
  styles/         # Global styles
prisma/
  schema.prisma   # Database schema
  seed.ts         # Seed data
```

## License

MIT