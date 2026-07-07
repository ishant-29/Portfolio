# Portfolio Landing Page — Design Spec

**Date:** 2026-07-07
**Owner:** Ishant Bishnoi (bishnoiishu00@gmail.com)

## Goal

A single-page animated portfolio for Ishant Bishnoi, AI Engineer, built by
personalizing a fully-specified "Jack — 3D Creator" template design (provided
verbatim by the user) with Ishant's real GitHub projects, internships,
education, and contact details.

## Source design (kept 100% intact)

- Dark theme `#0C0C0C`, Kanit font (300–900), gradient headings
  (`linear-gradient(180deg, #646973, #BBCCD7)` clipped to text)
- Framer Motion animation vocabulary: `FadeIn` (whileInView, once),
  `Magnet` (mouse-following portrait), `AnimatedText` (per-character
  scroll-driven opacity), scroll-linked marquee rows, sticky-stacking
  project cards (`targetScale = 1 - (total - 1 - index) * 0.03`)
- Marquee GIFs from motionsites.ai and abstract card visuals from the
  spec's CloudFront URLs, both kept as-is
- Fluid type via `clamp()`, Tailwind default breakpoints, `overflow-x: clip`

## Personalization decisions (user-approved 2026-07-07)

1. **Projects — all five repos** (user chose over the recommended three):
   01 NexusMind (Generative AI, live link to chat-ui-metawurks.vercel.app),
   02 EpiCast, 03 DAMA, 04 Droid, 05 Chess Manager (GitHub "View Code" links).
   Card image slot 1 = GitHub OpenGraph image per repo; slots 2–3 cycle the
   nine spec CloudFront visuals. Swap for real screenshots later.
2. **Experience & Education section added** between About and Services:
   MetaWurks SDE-1 + cHeal internships (numbered rows), education grid
   (MCA PES 8.57 / C.N. Rao Scholar, BCA NIMS 8.51, XII 96.2%, X 84.83%),
   achievement pills.
3. **Hero portrait: placeholder kept** (Jack's figma.site image) — marked
   with a TODO in `HeroSection.tsx` for Ishant's own cut-out photo.
4. Navbar "Price" → "Experience"; all four links are smooth-scroll anchors.
5. Hero heading "Hi, i'm ishant" at 12/13/14/15vw (scaled from the spec's
   14/15/16/17.5vw because the name is longer than "jack").
6. Services adapted to AI expertise: Machine Learning, Generative AI,
   Data Engineering, Forecasting & Analytics, AI Product Development.
7. New Contact footer: "Let's talk" heading, mailto ContactButton, Lucide
   icon links (email, phone, LinkedIn, GitHub), copyright.

## Architecture

Vite + React 18 + TypeScript + Tailwind 3.4 + Framer Motion 12 + Lucide.
`src/components/` holds the five reusable primitives; `src/sections/` holds
the seven page sections composed in `App.tsx` in order: Hero, Marquee, About,
Experience, Services (white, rounded top), Projects (dark, pulled up over
Services), Contact.

## Verification

`npm run build` (tsc + vite) passes; headless-Edge render confirms all
sections mount and the hero matches the spec visually.
