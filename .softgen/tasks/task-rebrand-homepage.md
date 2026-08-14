---
title: Rebrand Homepage to Academia del Español
status: done
priority: urgent
type: chore
tags: [branding, homepage, design-system]
created_by: agent
created_at: 2026-08-14T12:21:00Z
position: 1
---
## Notes
Rebrand the entire homepage and UI to align with "Academia del Español Digital Language Network" corporate brand.

Brand rules:
- White backgrounds
- Strong spacing (80–120px sections)
- Colors: Soft Cream (#fdfbf7), Warm Terracotta (#e6734d), Mediterranean Blue (#1e3a8a), White
- Fonts: Playfair Display (headings), Inter (body)
- Cards: White bg, 8–12px radius, subtle shadow, 24–32px padding
- Academic tone, subtle hover effects only

## Checklist
- [x] Update globals.css with Playfair Display, Inter, and brand color tokens
- [x] Update tailwind.config.ts font families
- [x] Rewrite src/pages/index.tsx with new homepage structure
- [x] Update Navbar.tsx with brand styling
- [x] Generate hero image for right side
- [x] Run check_for_errors

## Acceptance
- [x] Homepage shows hero with left-aligned headline, academic subheadline, 2 CTAs, right image
- [x] Three pillar value section with academic cards
- [x] Course preview grid with brand card style
- [x] Dashboard preview section
- [x] Testimonials section
- [x] Footer with red accent bar
- [x] All text uses Playfair Display / Inter
- [x] Colors match brand palette