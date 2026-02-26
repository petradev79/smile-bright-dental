# Smile Bright Dental — Design Tokens Reference

> Complete reference for all design tokens defined in `design-tokens.css`.
> Each token maps to a CSS custom property and has a corresponding Tailwind CSS v4 usage.

---

## How Tokens Work in This Project

Tokens are defined as CSS custom properties in `:root` inside `design-tokens.css`. They are consumed in two ways:

1. **Directly** — `var(--color-primary-500)` in any CSS
2. **Via Tailwind v4** — registered in the `@theme inline { }` block in `globals.css`, then used as utility classes like `bg-primary-500`

### Integration Example

```css
/* globals.css */
@import "tailwindcss";

@theme inline {
  --color-primary-50:  var(--color-primary-50);
  --color-primary-500: var(--color-primary-500);
  /* ... register all tokens you want as Tailwind utilities */

  --font-display: var(--font-display);
  --font-body:    var(--font-body);
}
```

Then in JSX:

```tsx
<h1 className="font-display text-5xl font-bold tracking-tight text-neutral-900">
  Welcome to Smile Bright
</h1>
```

---

## 1. Colors

### Primary (Vivid Blue)

| Token | Value | Swatch | Tailwind Class | Usage |
|-------|-------|--------|---------------|-------|
| `--color-primary-50` | `#EBF3FF` | ![](https://placehold.co/24/EBF3FF/EBF3FF) | `bg-primary-50` | Tinted backgrounds, selected rows |
| `--color-primary-100` | `#D6E7FF` | ![](https://placehold.co/24/D6E7FF/D6E7FF) | `bg-primary-100` | Light badge bg, info alerts |
| `--color-primary-200` | `#A8CDFF` | ![](https://placehold.co/24/A8CDFF/A8CDFF) | `bg-primary-200` | Borders on active inputs |
| `--color-primary-300` | `#70ABFF` | ![](https://placehold.co/24/70ABFF/70ABFF) | `text-primary-300` | Icon tints |
| `--color-primary-400` | `#3B8AFF` | ![](https://placehold.co/24/3B8AFF/3B8AFF) | `text-primary-400` | Focus rings, sparkle accents |
| `--color-primary-500` | `#1A6EFF` | ![](https://placehold.co/24/1A6EFF/1A6EFF) | `bg-primary-500` | **Main brand blue.** Primary buttons, CTA sections |
| `--color-primary-600` | `#0055E6` | ![](https://placehold.co/24/0055E6/0055E6) | `bg-primary-600` | Hover state for primary buttons, links |
| `--color-primary-700` | `#0043B8` | ![](https://placehold.co/24/0043B8/0043B8) | `bg-primary-700` | Active state, gradient end |
| `--color-primary-800` | `#003391` | ![](https://placehold.co/24/003391/003391) | `text-primary-800` | Dark blue text on light bg |
| `--color-primary-900` | `#00246B` | ![](https://placehold.co/24/00246B/00246B) | `text-primary-900` | Headings on blue-tinted bg |
| `--color-primary-950` | `#001744` | ![](https://placehold.co/24/001744/001744) | `bg-primary-950` | Deepest blue (footer bg option) |

### Secondary (Soft Sky)

Lighter blue range for secondary UI. Same structure as primary — see `design-tokens.css` for all 11 stops.

### Neutral (Warm Slate)

| Token | Value | Tailwind Class | Usage |
|-------|-------|---------------|-------|
| `--color-neutral-0` | `#FFFFFF` | `bg-white` | Page background |
| `--color-neutral-50` | `#F8F9FB` | `bg-neutral-50` | Alternating section bg |
| `--color-neutral-100` | `#F0F2F5` | `bg-neutral-100` | Input backgrounds, disabled bg |
| `--color-neutral-200` | `#E2E5EB` | `border-neutral-200` | Default borders, dividers |
| `--color-neutral-300` | `#C8CDD6` | `border-neutral-300` | Strong borders |
| `--color-neutral-400` | `#9BA3B2` | `text-neutral-400` | Placeholder text |
| `--color-neutral-500` | `#6E7889` | `text-neutral-500` | Muted text, icons |
| `--color-neutral-600` | `#515B6B` | `text-neutral-600` | Secondary body text |
| `--color-neutral-700` | `#3B4354` | `text-neutral-700` | Primary body text |
| `--color-neutral-800` | `#272D3B` | `text-neutral-800` | Strong text, subheadings |
| `--color-neutral-900` | `#171B26` | `text-neutral-900` | Headings |
| `--color-neutral-950` | `#0C0F16` | `text-neutral-950` | Near-black |

### Accent (Aqua Mint)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-accent-500` | `#10B981` | Success badges, health indicators |
| `--color-accent-100` | `#D1FAE9` | Success alert background |

### Semantic Feedback

| Token | Value | Usage |
|-------|-------|-------|
| `--color-success-500` | `#16A34A` | Form success |
| `--color-warning-500` | `#F59E0B` | Warnings |
| `--color-error-500` | `#DC2626` | Errors, destructive actions |
| `--color-info-500` | = `primary-500` | Informational messages |

---

## 2. Typography

### Font Families

| Token | Stack | Tailwind |
|-------|-------|---------|
| `--font-display` | Playfair Display → Georgia → serif | `font-display` |
| `--font-body` | Plus Jakarta Sans → Segoe UI → sans-serif | `font-body` |
| `--font-mono` | Geist Mono → Consolas → monospace | `font-mono` |

### Heading Recipes

```
H1: font-display text-5xl lg:text-7xl font-bold tracking-tighter leading-tight
H2: font-display text-3xl lg:text-4xl font-bold tracking-tight leading-snug
H3: font-body   text-xl  lg:text-2xl font-semibold leading-snug
H4: font-body   text-lg             font-semibold leading-snug
```

### Body Recipes

```
Body:    font-body text-base  text-neutral-700 leading-relaxed
Lead:    font-body text-lg    text-neutral-600 leading-relaxed
Caption: font-body text-sm    text-neutral-500
Small:   font-body text-xs    text-neutral-400
```

---

## 3. Spacing

All spacing tokens follow a `4px` base unit. Use Tailwind's default spacing utilities (`p-4`, `gap-6`, `mt-8`, etc.) which align with these tokens.

| Token | Value | Tailwind | Common Use |
|-------|-------|---------|------------|
| `--space-1` | 4px | `p-1` | Tight inner gaps |
| `--space-2` | 8px | `p-2` | Icon padding, tight gaps |
| `--space-3` | 12px | `p-3` | Small card padding |
| `--space-4` | 16px | `p-4` | Default card padding, mobile gutter |
| `--space-6` | 24px | `p-6` | Card padding desktop, section sub-gaps |
| `--space-8` | 32px | `p-8` | Desktop gutter, inter-card spacing |
| `--space-10` | 40px | `gap-10` | Between heading and content |
| `--space-12` | 48px | `py-12` | Section padding (mobile) |
| `--space-16` | 64px | `py-16` | Section padding (tablet) |
| `--space-20` | 80px | `py-20` | Large gaps |
| `--space-24` | 96px | `py-24` | Section padding (desktop) |
| `--space-32` | 128px | `py-32` | Hero vertical padding |

---

## 4. Layout

| Token | Value | Usage |
|-------|-------|-------|
| `--content-width` | 1200px | Main content max-width |
| `--content-narrow` | 720px | Narrow text columns |
| `--gutter` | 16px → 24px → 32px | Responsive page gutters |
| `--section-py-sm/md/lg` | 48/64/96px | Section vertical rhythm |

Tailwind implementation:

```tsx
<section className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
```

---

## 5. Borders & Radii

| Token | Value | Tailwind | Usage |
|-------|-------|---------|-------|
| `--radius-sm` | 4px | `rounded-sm` | Badges, small tags |
| `--radius-md` | 8px | `rounded-md` | Inputs |
| `--radius-lg` | 12px | `rounded-lg` | Inputs, small cards |
| `--radius-xl` | 16px | `rounded-xl` | Standard cards |
| `--radius-2xl` | 20px | `rounded-2xl` | Large cards, modals |
| `--radius-3xl` | 24px | `rounded-3xl` | Hero cards |
| `--radius-full` | 9999px | `rounded-full` | Buttons (pill), avatars |

---

## 6. Shadows

| Token | Tailwind | Usage |
|-------|---------|-------|
| `--shadow-xs` | `shadow-xs` | Subtle separation |
| `--shadow-sm` | `shadow-sm` | Resting cards |
| `--shadow-md` | `shadow-md` | Slightly elevated |
| `--shadow-lg` | `shadow-lg` | Hovered cards |
| `--shadow-xl` | `shadow-xl` | Dropdowns, popovers |
| `--shadow-2xl` | `shadow-2xl` | Modals |
| `--shadow-primary` | Custom | Blue glow on primary CTA |
| `--shadow-primary-lg` | Custom | Larger blue glow on hero CTA |

Custom shadow usage:

```tsx
<button className="shadow-[var(--shadow-primary)] hover:shadow-[var(--shadow-primary-lg)]">
  Book Appointment
</button>
```

---

## 7. Transitions & Animation

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | 120ms | Color changes, link hovers |
| `--duration-normal` | 200ms | Button hovers, card transforms |
| `--duration-slow` | 350ms | Panel open/close |
| `--duration-reveal` | 700ms | Scroll-triggered reveals |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful overshoots (button scale) |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Fade/slide in animations |

---

## 8. Gradients & Decorative

| Token | Value | Usage |
|-------|-------|-------|
| `--gradient-brand` | `135deg, primary-500 → primary-700` | Blue section backgrounds |
| `--gradient-brand-light` | `135deg, primary-50 → secondary-100` | Subtle tinted sections |
| `--gradient-radial-glow` | Radial, primary at 12% opacity | Top-of-page ambient glow |
| `--glass-bg` | `rgba(255,255,255,0.75)` | Frosted glass card overlay |
| `--glass-backdrop` | `saturate(180%) blur(20px)` | Backdrop filter for glass |

---

## 9. Z-Index

| Token | Value | Usage |
|-------|-------|-------|
| `--z-base` | 0 | Default |
| `--z-raised` | 10 | Cards above their section |
| `--z-dropdown` | 100 | Dropdown menus |
| `--z-sticky` | 200 | Sticky navbar |
| `--z-overlay` | 300 | Overlays |
| `--z-modal` | 400 | Modals |
| `--z-toast` | 500 | Toast notifications |
| `--z-tooltip` | 600 | Tooltips |
