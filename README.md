# Ishant Bishnoi — Portfolio

Single-page animated portfolio. Dark theme, Kanit typography, gradient display headings, scroll-driven marquee, character-by-character text reveal, magnetic hero portrait, and sticky-stacking project cards.

**Stack:** Vite · React 18 · TypeScript · Tailwind CSS 3.4 · Framer Motion 12 · lucide-react

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
```

## Editing content

All copy lives as const arrays at the top of each file in `src/sections/` — projects in `ProjectsSection.tsx`, internships/education/achievements in `ExperienceSection.tsx`, services in `ServicesSection.tsx`.

Assets:

- Hero portrait — `public/portrait.png` (transparent cut-out; referenced by `PORTRAIT_URL` in `src/sections/HeroSection.tsx`)
- Project card visuals — `VISUALS` in `src/sections/ProjectsSection.tsx` (currently template art + GitHub OpenGraph images; swap for real screenshots when available)
