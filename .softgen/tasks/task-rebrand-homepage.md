---
title: Rebrand Homepage to Academia del Español
status: in_progress
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
- [ ] Update globals.css with Playfair Display, Inter, and brand color tokens
- [ ] Update tailwind.config.ts font families
- [ ] Rewrite src/pages/index.tsx with new homepage structure
- [ ] Update Navbar.tsx with brand styling
- [ ] Generate hero image for right side
- [ ] Run check_for_errors

## Acceptance
- Homepage shows hero with left-aligned headline, academic subheadline, 2 CTAs, right image
- Three pillar value section with academic cards
- Course preview grid with brand card style
- Dashboard preview section
- Testimonials section
- Footer with red accent bar
- All text uses Playfair Display / Inter
- Colors match brand palette