# Smile Bright Dental — Style Guide

> Aesthetic direction, principles, and rules governing the visual identity of the Smile Bright Dental website.

---

## 1. Aesthetic Direction

**Concept:** *Refined Clinical Warmth*

Smile Bright balances medical trustworthiness with approachable warmth. The design avoids the cold sterility of typical healthcare sites and the overwhelming playfulness of consumer brands. Instead, it occupies a confident middle ground — clean, generous white space punctuated by bold blue accents, softened by rounded shapes and warm photography.

**Keywords:** Confident · Clean · Warm · Professional · Approachable

**Memorable detail:** Every section should feel like walking into a well-lit, modern dental office — calming, spacious, and reassuringly high-quality.

---

## 2. Typography

### Font Pairing

| Role | Family | Loaded Via | CSS Variable |
|------|--------|-----------|-------------|
| **Display / Headings** | Playfair Display | `next/font/google` | `--font-display` |
| **Body / UI** | Plus Jakarta Sans | `next/font/google` | `--font-body` |
| **Code / Technical** | Geist Mono | `next/font/google` | `--font-mono` |

**Playfair Display** brings editorial elegance to section titles — its high contrast strokes and refined serifs convey heritage and professionalism. Used exclusively for `h1` and `h2` headings, and occasionally for large decorative stats.

**Plus Jakarta Sans** is the workhorse. Its soft, geometric letterforms feel modern yet friendly — perfect for body copy, navigation, buttons, labels, and `h3`–`h6` subheadings. It pairs beautifully with Playfair's formality without clashing.

### Type Scale

| Token | Size | Use |
|-------|------|-----|
| `text-7xl` | 72px | Hero headline (desktop) |
| `text-5xl` | 48px | Hero headline (tablet) |
| `text-4xl` | 36px | Section headings |
| `text-3xl` | 30px | Section headings (mobile) |
| `text-2xl` | 24px | Card titles, large callouts |
| `text-xl` | 20px | Subheadings, nav links |
| `text-lg` | 18px | Lead paragraphs |
| `text-base` | 16px | Body copy |
| `text-sm` | 14px | Captions, labels, metadata |
| `text-xs` | 12px | Legal text, badges |

### Rules

- **Headings** (`h1`, `h2`): `font-display`, `font-bold` or `font-black`, `tracking-tight`
- **Subheadings** (`h3`–`h6`): `font-body`, `font-semibold`
- **Body text**: `font-body`, `font-regular`, `leading-relaxed`, `text-neutral-600`
- **Never** mix more than 2 font families on one screen
- **Minimum** body font size: 16px (accessibility baseline)
- **Maximum** line length: 65–75 characters (`max-w-prose` or `max-w-[42rem]`)

---

## 3. Color System

### Primary: Vivid Blue `#1A6EFF`

The defining color. Used for primary buttons, active states, links, key accents, and branded backgrounds. It communicates trust, professionalism, and precision — core values for dental care.

### Secondary: Soft Sky

A lighter, desaturated blue range for subtle backgrounds, secondary buttons, and hover states. Creates visual hierarchy without competing with primary blue.

### Neutral: Warm Slate

A warm-leaning gray palette (not pure cool gray). Body text uses `neutral-700` to `neutral-900`. Backgrounds alternate between `neutral-0` (white) and `neutral-50` to create section separation.

### Accent: Aqua Mint `#10B981`

A fresh green for success states, health indicators, and occasional decorative touches. Reinforces the "clinical freshness" motif.

### Usage Rules

| Element | Color Token |
|---------|------------|
| Primary button background | `primary-500` |
| Primary button hover | `primary-600` |
| Link text | `primary-600` |
| Section heading | `neutral-900` |
| Body text | `neutral-600` to `neutral-700` |
| Subtle background (alternating) | `neutral-50` |
| Blue branded sections | `primary-500` → `primary-700` gradient |
| Card border | `neutral-200` |
| Disabled state | `neutral-300` text on `neutral-100` bg |

### Contrast Requirements

- All text must meet **WCAG AA** minimum (4.5:1 for body, 3:1 for large text)
- `primary-500` on white = **4.6:1** — passes AA for large text; use `primary-700` for small text on white
- White on `primary-500` = **4.6:1** — passes AA

---

## 4. Layout Principles

### Grid

- **12-column grid** at desktop, collapsing to 4 columns on mobile
- Maximum content width: `1200px` — centered with auto margins
- Gutter: `16px` mobile → `24px` tablet → `32px` desktop

### Section Rhythm

- Sections alternate between white and `neutral-50` backgrounds
- Blue branded sections (`gradient-brand`) used for high-impact CTAs and differentiator blocks
- Vertical section padding: `48px` mobile → `64px` tablet → `96px` desktop

### Spacing Philosophy

Use **generous negative space**. The references show sections that breathe — content clusters are compact, but the space *between* clusters is large. This creates a premium, unhurried feel.

- Within a card: `space-4` to `space-6`
- Between cards in a grid: `space-6` to `space-8`
- Between section heading and content: `space-10` to `space-12`
- Between sections: `section-py` tokens

### Responsive Breakpoints

| Name | Width | Tailwind |
|------|-------|---------|
| Mobile | < 640px | default |
| Tablet | >= 640px | `sm:` |
| Small Desktop | >= 768px | `md:` |
| Desktop | >= 1024px | `lg:` |
| Wide | >= 1280px | `xl:` |

---

## 5. Shape Language

### Rounded Everything

The reference designs use extensively rounded corners — this is a core brand trait.

| Element | Radius |
|---------|--------|
| Buttons | `radius-full` (pill) |
| Cards | `radius-xl` to `radius-2xl` |
| Images / Avatars | `radius-xl` or `radius-full` (circles) |
| Input fields | `radius-lg` |
| Badges / Tags | `radius-full` |
| Modals / Dialogs | `radius-2xl` |

### Circular Motifs

Stats and team member photos use circular containers — this is a distinctive brand element. The circle symbolizes wholeness, completeness, and the "bright smile" concept.

---

## 6. Shadows & Elevation

The design uses subtle, warm shadows to create gentle depth — never harsh or dark.

| Level | Token | Use |
|-------|-------|-----|
| Resting card | `shadow-sm` | Cards at rest |
| Hovered card | `shadow-lg` | Cards on hover |
| Floating element | `shadow-xl` | Dropdowns, tooltips |
| CTA button | `shadow-primary` | Blue glow beneath primary buttons |
| Hero overlay | `shadow-2xl` | Hero card elements |

---

## 7. Motion & Animation

### Principles

1. **Purposeful** — Animation guides attention, never distracts
2. **Quick** — UI transitions are fast (`120–200ms`); reveals are slower (`500–700ms`)
3. **Eased** — Natural deceleration (`ease-out`) for most interactions; spring curves for playful moments

### Page Load Sequence

1. Navbar fades in immediately
2. Hero content staggers in from bottom with `50ms` delays between elements
3. Below-fold sections reveal on scroll via Intersection Observer
4. Stagger delay: `100ms` per card in a grid

### Interaction Animations

| Trigger | Effect | Duration | Easing |
|---------|--------|----------|--------|
| Button hover | Scale to `1.02`, shadow lifts | `200ms` | `ease-spring` |
| Card hover | Translate Y `-4px`, shadow deepens | `200ms` | `ease-out` |
| Link hover | Color shift, optional underline slide | `120ms` | `ease-default` |
| Section reveal | Fade in + translate Y `20px → 0` | `700ms` | `ease-out` |
| Stat counter | Count up from 0 on scroll | `1200ms` | `ease-in-out` |

### CSS Implementation

Prefer CSS transitions and `@keyframes` for all standard animations. Reserve JavaScript animation libraries for complex orchestrated sequences only.

---

## 8. Photography & Imagery

### Style

- **Warm, natural lighting** — never harsh fluorescent
- **Genuine expressions** — real smiles, real interaction between dentist and patient
- **Diverse representation** — variety in age, ethnicity, gender
- **Blue-tinted color grading** — slight cool wash to match brand palette

### Composition

- Hero images: cropped at an angle or with overlapping layout
- Team photos: tight headshots in circular frames
- Service images: close-up details of dental work, equipment, or patient comfort

### Technical

- Format: WebP with JPEG fallback
- Lazy loading on all below-fold images (`loading="lazy"`)
- Use Next.js `<Image>` component with proper `width`/`height`/`sizes`
- Aspect ratios: `16:9` (hero), `4:3` (service cards), `1:1` (avatars)

---

## 9. Iconography

- **Style:** Outlined, 1.5px stroke, rounded caps and joins
- **Size:** 24px default, 20px inline, 32px for feature cards
- **Color:** Inherit from parent text color, or `primary-500` for decorative icons
- **Source:** Lucide React (consistent with the outlined, rounded aesthetic)

### Brand Sparkle

The references feature a distinctive **4-pointed sparkle** icon near the logo and headings. This should be implemented as an SVG component and used sparingly as a decorative accent — max 2–3 times per page.

---

## 10. Accessibility Standards

- **Target:** WCAG 2.1 AA compliance
- All interactive elements have visible focus rings (`ring-2 ring-primary-400 ring-offset-2`)
- Touch targets: minimum `44px × 44px`
- Images: descriptive `alt` text, decorative images marked `alt=""`
- Semantic HTML: proper heading hierarchy, landmarks, ARIA labels
- Reduced motion: `@media (prefers-reduced-motion: reduce)` disables all animations
- Color: never rely on color alone to convey information

---

## 11. Dark Mode

Dark mode is **not** included in the initial design system. The references show a light-only design. If dark mode is added later, the token architecture supports it via CSS custom property overrides inside a `@media (prefers-color-scheme: dark)` or `.dark` class block.
