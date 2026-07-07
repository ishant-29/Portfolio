# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page animated portfolio for Ishant Bishnoi (AI Engineer). Vite + React 18 + TypeScript + Tailwind CSS 3.4 + Framer Motion 12 + lucide-react. No router, no state library, no tests — one page composed of seven sections.

**React is pinned to 18.x** because lucide-react@0.344 declares a peer dependency of React ≤18. Don't bump React to 19 without also upgrading lucide-react.

## Commands

- `npm run dev` — Vite dev server (localhost:5173)
- `npm run build` — `tsc -b && vite build` (this is the type-check; there is no separate typecheck script)
- `npm run lint` — oxlint
- `npm run preview` — serve the production build

## Architecture

`src/App.tsx` renders sections in a fixed order that the design depends on: Hero → Marquee → About → Experience → Services → Projects → Contact. Services has a white background with rounded top corners; Projects pulls itself up over it with a negative margin (`-mt-10/-12/-14` + `z-10`) — reordering sections breaks this visual seam.

- `src/components/` — five reusable primitives:
  - `FadeIn` — Framer Motion `whileInView` wrapper (once-only). Accepts `delay/duration/x/y/as`. Uses `motion.create()` for dynamic tags.
  - `Magnet` — mouse-following hover effect (window-level mousemove; `strength` is a divisor, higher = weaker).
  - `AnimatedText` — per-character scroll-driven opacity (0.2 → 1) via `useScroll` on the paragraph with offset `['start 0.8', 'end 0.2']`.
  - `ContactButton` (gradient mailto pill), `LiveProjectButton` (ghost pill, accepts `href`/`label`).
- `src/sections/` — page sections; project/experience/education content lives as const arrays at the top of each section file. Edit those arrays to update content — there is no CMS or data folder.

## Design system (from the original spec — keep intact)

- Background `#0C0C0C`, body text `#D7E2EA`, font Kanit (loaded in `index.html`).
- Gradient display headings use the global `.hero-heading` class (`src/index.css`); heading size is always `clamp(3rem, 12vw, 160px)`.
- Fluid type uses inline `clamp()` styles, spacing uses Tailwind's default breakpoints, horizontal overflow is handled with `overflow-x: clip` on the main wrapper and hero.
- Don't combine Tailwind `translate-*` classes with Framer Motion animations on the same element — Motion's inline transform overwrites them. Positioning wrappers are separate plain divs (see the hero portrait).
- Sticky project-card stacking: each card wrapper is `sticky top-24 h-[85vh]`; scale comes from the shared section `scrollYProgress` (`targetScale = 1 - (total-1-index) * 0.03`, origin-top).

## Pending content swaps (placeholders by design)

- Hero portrait is `public/portrait.png` — Ishant's illustrated portrait with the background flood-fill-removed (transparent PNG; keep transparency if regenerating).
- Project card visuals: GitHub OpenGraph card (slot 0) + real UI screenshots served as optimized WebP from `public/` (slot 1 small, slot 2 hero). Source PNGs also live in `public/`; `nexus2.webp`/`chess2.webp` are detail crops generated from the single screenshots.
- Marquee tiles are data cards (projects/stack/education) defined in `ROW_1`/`ROW_2` arrays in `MarqueeSection.tsx` — no external images.
