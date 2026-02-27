# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (Next.js on localhost:3000)
- **Build:** `npm run build`
- **Lint:** `npm run lint` (ESLint with next/core-web-vitals + typescript configs)
- **No test suite is configured.**

## Architecture

This is a **Next.js 16** marketing site for a dental clinic, using the App Router, React 19, Tailwind CSS v4, and TypeScript.

### Routing

All pages live under `app/` using the App Router convention (folder + `page.tsx`):
- `/` — Homepage (services overview, team, testimonials, contact)
- `/about` — About the clinic
- `/services` — Service detail page
- `/team` — Team page
- `not-found.tsx` — Custom 404

Shared layout in `app/layout.tsx` wraps all pages with `Navbar` and `Footer`.

### Key conventions

- **Path alias:** `@/*` maps to project root (e.g., `@/components/Button`)
- **Image registry:** All image paths and alt text are centralized in `lib/images.ts`. Reference images through this registry rather than hardcoding paths.
- **Utility function:** `lib/cn.ts` exports a `cn()` helper (wraps `clsx`) for conditional class merging.
- **Components** are in `components/` as flat files (no nested folders). All are presentational, receiving data via props from page-level files.
- **Scroll animations:** `hooks/useScrollReveal.ts` provides IntersectionObserver-based reveal animations. Elements use the `.reveal` / `.revealed` CSS classes defined in `globals.css`. Respects `prefers-reduced-motion`.

### Design system

Design documentation lives in `docs/design/`:
- `STYLE_GUIDE.md` — Aesthetic direction, typography rules, color usage
- `DESIGN_TOKENS.md` — Token definitions
- `COMPONENTS.md` — Component specs
- `design-tokens.css` — Imported into `globals.css`
- `refs/` — Visual reference images

**Fonts:** Playfair Display (`font-display`) for h1/h2 headings; Plus Jakarta Sans (`font-body`) for everything else. Loaded via `next/font/google` in the root layout.

**Color palette:** Primary (blue `#1A6EFF`), Secondary (lighter blue), Accent (green/emerald), Neutral (gray scale), plus semantic colors (success/warning/error). All defined as `--color-*` CSS custom properties in the `@theme` block.

**Images:** All served as `.webp` from `public/images/`, organized by section (hero, team, services, about, testimonials, features).
