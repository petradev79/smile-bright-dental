# Smile Bright Dental — Component Specifications

> Detailed specs for every UI component, including structure, variants, Tailwind class recipes, TypeScript prop interfaces, and behavioral notes.
>
> **Tech stack:** Next.js 16 · React 19 · Tailwind CSS v4 · TypeScript · Lucide React icons

---

## Table of Contents

1. [Navbar](#1-navbar)
2. [Hero Section](#2-hero-section)
3. [Logo Bar / Trust Strip](#3-logo-bar--trust-strip)
4. [Section Header](#4-section-header)
5. [Service Card](#5-service-card)
6. [About / Feature Split](#6-about--feature-split)
7. [Team Card](#7-team-card)
8. [Stats Section](#8-stats-section)
9. [Differentiators Section](#9-differentiators-section)
10. [Testimonial Card](#10-testimonial-card)
11. [CTA Banner](#11-cta-banner)
12. [Footer](#12-footer)
13. [Button](#13-button)
14. [Input / Form Field](#14-input--form-field)
15. [Badge](#15-badge)
16. [Sparkle Icon](#16-sparkle-icon)

---

## 1. Navbar

**File:** `components/Navbar.tsx`

### Structure

```
<header>                    ← sticky top-0, glass bg, z-sticky
  <nav>                     ← max-w-[1200px], flex between
    <Logo + Wordmark>       ← left
    <NavLinks>              ← center (hidden on mobile)
    <CTA Button>            ← right
    <MobileMenuToggle>      ← right, visible on mobile only
  </nav>
</header>
```

### Props

```ts
interface NavbarProps {
  links: { label: string; href: string }[];
  ctaLabel?: string;        // default: "Contact Us"
  ctaHref?: string;         // default: "/contact"
}
```

### Tailwind Recipe

```tsx
// Outer header
"fixed top-0 inset-x-0 z-[200] bg-white/80 backdrop-blur-xl border-b border-neutral-200/60"

// Inner container
"mx-auto flex max-w-[1200px] items-center justify-between px-4 md:px-6 lg:px-8 h-16 lg:h-20"

// Logo wordmark
"font-display text-xl font-bold text-neutral-900"

// Nav links
"hidden lg:flex items-center gap-8"

// Individual link
"font-body text-sm font-medium text-neutral-600 hover:text-primary-500 transition-colors duration-[120ms]"

// CTA button (see Button component – variant "primary", size "sm")
"rounded-full bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-600 shadow-[var(--shadow-primary)] transition-all duration-200"
```

### Behavior

- On scroll past `60px`: add subtle `shadow-sm` to header
- Mobile: hamburger icon toggles a slide-down overlay with nav links
- Active link: `text-primary-500 font-semibold`

---

## 2. Hero Section

**File:** `components/HeroSection.tsx`

### Structure

```
<section>                         ← full-width, white bg
  <div.container>                 ← max-w, flex row on lg
    <div.content>                 ← left col (55%)
      <h1>                        ← font-display, with <Sparkle/> icon
      <p.lead>                    ← body description
      <div.actions>               ← two buttons: primary + outline
    </div.content>
    <div.media>                   ← right col (45%)
      <Image>                     ← main hero photo, rounded-3xl, slight overlap
      <Image>                     ← secondary smaller photo, overlapping bottom-left
      <FloatingBadge>             ← circular badge overlay (e.g., "Years Experience")
    </div.media>
  </div.container>
</section>
```

### Props

```ts
interface HeroSectionProps {
  heading: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  mainImage: { src: string; alt: string };
  secondaryImage?: { src: string; alt: string };
  floatingBadge?: { icon: React.ReactNode; text: string };
}
```

### Tailwind Recipe

```tsx
// Section
"relative overflow-hidden bg-white py-12 md:py-16 lg:py-24"

// Container
"mx-auto flex max-w-[1200px] flex-col lg:flex-row items-center gap-12 lg:gap-16 px-4 md:px-6 lg:px-8"

// Content column
"flex flex-col gap-6 lg:max-w-[55%] text-center lg:text-left"

// Heading
"font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight text-neutral-900"

// Lead paragraph
"font-body text-lg text-neutral-600 leading-relaxed max-w-[540px]"

// Actions row
"flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"

// Media column
"relative w-full lg:max-w-[45%]"

// Main image
"rounded-3xl shadow-xl object-cover"

// Secondary image (overlapping)
"absolute -bottom-6 -left-6 w-[45%] rounded-2xl shadow-lg border-4 border-white"

// Floating badge
"absolute -bottom-4 right-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg"
```

### Animation

- H1: fade in + slide up, `delay-0`
- Paragraph: fade in + slide up, `delay-[100ms]`
- Buttons: fade in + slide up, `delay-[200ms]`
- Images: fade in + scale from `0.95`, `delay-[300ms]`
- Floating badge: pop in with `ease-spring`, `delay-[600ms]`

---

## 3. Logo Bar / Trust Strip

**File:** `components/LogoBar.tsx`

### Structure

```
<section>                    ← neutral-50 bg, slim padding
  <div.container>
    <div.logos>              ← flex row, gap-8 to gap-12, grayscale
      <Image /> × 5–6       ← partner/client logos
    </div.logos>
  </div.container>
</section>
```

### Props

```ts
interface LogoBarProps {
  logos: { src: string; alt: string; width: number }[];
}
```

### Tailwind Recipe

```tsx
// Section
"bg-neutral-50 py-8 md:py-10"

// Logos container
"mx-auto flex max-w-[1200px] items-center justify-center gap-8 md:gap-12 px-4 flex-wrap"

// Individual logo
"h-6 md:h-8 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
```

---

## 4. Section Header

**File:** `components/SectionHeader.tsx`

A reusable heading block used at the top of every content section.

### Structure

```
<div.header>
  <p.eyebrow>              ← optional small label above heading
  <h2>                     ← section title (font-display)
  <p.description>          ← optional subtitle
</div.header>
```

### Props

```ts
interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";    // default: "center"
  light?: boolean;               // true = white text (for blue bg sections)
}
```

### Tailwind Recipe

```tsx
// Wrapper (centered)
"flex flex-col items-center text-center gap-4 max-w-[600px] mx-auto mb-10 md:mb-12"

// Eyebrow
"font-body text-sm font-semibold uppercase tracking-wider text-primary-500"

// Title
"font-display text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900"
// light variant:
"font-display text-3xl lg:text-4xl font-bold tracking-tight text-white"

// Description
"font-body text-base md:text-lg text-neutral-600 leading-relaxed"
// light variant:
"font-body text-base md:text-lg text-white/80 leading-relaxed"
```

---

## 5. Service Card

**File:** `components/ServiceCard.tsx`

### Visual Reference

From ref images: rounded card with a dental icon in a tinted circle at top, title, short description, and optional "Learn More" link.

### Structure

```
<article>                   ← rounded-2xl card
  <div.icon-wrapper>        ← 56px circle, primary-50 bg, icon inside
    <Icon />
  </div.icon-wrapper>
  <h3>                      ← service name
  <p>                       ← short description
  <a.learn-more>            ← optional link
</article>
```

### Props

```ts
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  featured?: boolean;       // true = primary-500 bg, white text
}
```

### Tailwind Recipe

```tsx
// Card (default)
"group relative flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 md:p-8
 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"

// Card (featured)
"group relative flex flex-col gap-4 rounded-2xl bg-primary-500 p-6 md:p-8
 shadow-[var(--shadow-primary)] hover:shadow-[var(--shadow-primary-lg)] hover:-translate-y-1 transition-all duration-200"

// Icon wrapper (default)
"flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-500"

// Icon wrapper (featured)
"flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 text-white"

// Title
"font-body text-xl font-semibold text-neutral-900"
// featured: "font-body text-xl font-semibold text-white"

// Description
"font-body text-sm text-neutral-600 leading-relaxed"
// featured: "font-body text-sm text-white/80 leading-relaxed"

// Learn more link
"inline-flex items-center gap-1.5 text-sm font-medium text-primary-500 group-hover:gap-2.5 transition-all duration-200"
// featured: "... text-white"
```

### Grid Layout

```tsx
// Services grid
"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
```

---

## 6. About / Feature Split

**File:** `components/FeatureSplit.tsx`

A two-column layout with an image on one side and text content on the other. Used for "Achieve a Confident Smile With Us" section.

### Structure

```
<section>
  <div.container>              ← flex row, alternating
    <div.media>                ← image side (50%)
      <Image />
      <FloatingElement />      ← optional stat or badge overlay
    </div.media>
    <div.content>              ← text side (50%)
      <SectionHeader />
      <p.body />
      <ul.checklist />         ← optional checkmark list
      <Button />               ← optional CTA
    </div.content>
  </div.container>
</section>
```

### Props

```ts
interface FeatureSplitProps {
  image: { src: string; alt: string };
  eyebrow?: string;
  title: string;
  description: string;
  checklist?: string[];
  cta?: { label: string; href: string };
  imagePosition?: "left" | "right";   // default: "left"
  bgColor?: "white" | "neutral";      // default: "white"
}
```

### Tailwind Recipe

```tsx
// Section
"py-12 md:py-16 lg:py-24 bg-white"      // or bg-neutral-50

// Container
"mx-auto flex max-w-[1200px] flex-col lg:flex-row items-center gap-10 lg:gap-16 px-4 md:px-6 lg:px-8"

// Image side
"relative w-full lg:w-1/2"

// Image
"rounded-2xl shadow-lg object-cover w-full aspect-[4/3]"

// Content side
"w-full lg:w-1/2 flex flex-col gap-5"

// Checklist item
"flex items-start gap-3"

// Check icon circle
"mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-500"

// Checklist text
"font-body text-base text-neutral-700"
```

---

## 7. Team Card

**File:** `components/TeamCard.tsx`

### Visual Reference

Circular photo, name below, role/specialty.

### Structure

```
<article>                     ← flex col, centered
  <div.avatar>                ← circular overflow-hidden
    <Image />
  </div.avatar>
  <h3>                        ← name
  <p>                         ← role
</article>
```

### Props

```ts
interface TeamCardProps {
  name: string;
  role: string;
  image: { src: string; alt: string };
  href?: string;
}
```

### Tailwind Recipe

```tsx
// Card
"group flex flex-col items-center gap-4 text-center"

// Avatar container
"relative h-40 w-40 md:h-48 md:w-48 overflow-hidden rounded-full border-4 border-primary-100
 shadow-md group-hover:shadow-lg group-hover:border-primary-300 transition-all duration-200"

// Image
"object-cover w-full h-full"

// Name
"font-body text-lg font-semibold text-neutral-900"

// Role
"font-body text-sm text-neutral-500"
```

### Grid Layout

```tsx
"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10"
```

---

## 8. Stats Section

**File:** `components/StatsSection.tsx`

### Visual Reference

"The Reasons Smile Bright is Unbeatable" — Playfair heading, then a row of circular stat bubbles at different sizes, with number + label. One stat bubble is visually larger/elevated as the "hero stat".

### Structure

```
<section>                         ← white bg
  <div.container>
    <SectionHeader />
    <div.stats-row>               ← flex, centered, overlapping circles
      <StatBubble /> × 4
    </div.stats-row>
  </div.container>
</section>
```

### Props

```ts
interface StatBubbleProps {
  value: string;            // e.g. "25+"
  label: string;            // e.g. "Total Branches"
  size?: "sm" | "md" | "lg";
}

interface StatsSectionProps {
  title: string;
  stats: StatBubbleProps[];
}
```

### Tailwind Recipe

```tsx
// Stats row
"flex items-center justify-center gap-4 md:gap-6 flex-wrap"

// Bubble — size sm
"flex h-28 w-28 flex-col items-center justify-center rounded-full bg-neutral-100 text-center"

// Bubble — size md
"flex h-36 w-36 flex-col items-center justify-center rounded-full bg-primary-100 text-center"

// Bubble — size lg (hero stat)
"flex h-44 w-44 flex-col items-center justify-center rounded-full bg-primary-500 text-center text-white shadow-[var(--shadow-primary)]"

// Value text
"font-display text-2xl md:text-3xl font-bold"

// Label text
"font-body text-xs md:text-sm mt-1"
// light variant (on primary bg): "text-white/80"
// default: "text-neutral-500"
```

### Animation

- Count-up animation on values when section enters viewport
- Bubbles stagger in from bottom with `100ms` delay each

---

## 9. Differentiators Section

**File:** `components/DifferentiatorsSection.tsx`

### Visual Reference

Blue background section "What Makes Us Different From Others" with a white card containing numbered items (01, 02, 03) — each with bold title and description. Optionally a photo on the right.

### Structure

```
<section>                           ← gradient-brand bg
  <div.container>                   ← flex row
    <div.content>                   ← left: SectionHeader (light) + card
      <SectionHeader light />
      <div.card>                    ← white rounded card
        <DiffItem /> × 3
      </div.card>
    </div.content>
    <div.media>                     ← right: image (optional)
      <Image />
    </div.media>
  </div.container>
</section>
```

### Props

```ts
interface DiffItemProps {
  number: string;           // "01", "02", "03"
  title: string;
  description: string;
}

interface DifferentiatorsSectionProps {
  title: string;
  items: DiffItemProps[];
  image?: { src: string; alt: string };
}
```

### Tailwind Recipe

```tsx
// Section
"bg-gradient-to-br from-primary-500 to-primary-700 py-12 md:py-16 lg:py-24"

// White card
"rounded-2xl bg-white p-6 md:p-8 shadow-xl"

// Diff item
"flex gap-4 py-4 border-b border-neutral-100 last:border-b-0"

// Number
"font-display text-lg font-bold text-primary-500 shrink-0 w-8"

// Item title
"font-body text-base font-semibold text-neutral-900"

// Item description
"font-body text-sm text-neutral-600 leading-relaxed mt-1"
```

---

## 10. Testimonial Card

**File:** `components/TestimonialCard.tsx`

### Visual Reference

White card with quotation marks (large decorative `""`), star rating, review text, avatar + name.

### Structure

```
<article>                         ← rounded-2xl card
  <div.quote-icon>                ← decorative open-quote
  <div.stars>                     ← 5 filled stars
  <p.quote>                       ← review text
  <div.author>
    <Image />                     ← small circular avatar
    <div>
      <p.name />
      <p.role />                  ← optional
    </div>
  </div.author>
</article>
```

### Props

```ts
interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorRole?: string;
  authorImage: { src: string; alt: string };
  rating: 1 | 2 | 3 | 4 | 5;
}
```

### Tailwind Recipe

```tsx
// Card
"relative flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm"

// Quote icon
"text-4xl leading-none text-primary-200 font-display select-none"
// Content: „ or open-quote character

// Stars row
"flex gap-0.5 text-yellow-400"
// Each star: <Star className="h-4 w-4 fill-current" />

// Quote text
"font-body text-sm md:text-base text-neutral-700 leading-relaxed"

// Author row
"flex items-center gap-3 mt-auto pt-4 border-t border-neutral-100"

// Author avatar
"h-10 w-10 rounded-full object-cover"

// Author name
"font-body text-sm font-semibold text-neutral-900"

// Author role
"font-body text-xs text-neutral-500"
```

### Layout

```tsx
// Testimonials grid — horizontal scroll on mobile, grid on desktop
"flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0"

// Each card on mobile
"min-w-[300px] snap-center flex-shrink-0 lg:min-w-0"
```

---

## 11. CTA Banner

**File:** `components/CtaBanner.tsx`

### Visual Reference

"Premium Dental Treatment at Affordable Prices" — blue gradient background, centered text, two buttons (primary inverted + outline white).

### Structure

```
<section>                       ← gradient-brand bg
  <div.container>               ← centered content
    <h2>
    <p>
    <div.actions>               ← two buttons
  </div.container>
</section>
```

### Props

```ts
interface CtaBannerProps {
  title: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}
```

### Tailwind Recipe

```tsx
// Section
"bg-gradient-to-br from-primary-500 to-primary-700 py-16 md:py-20 lg:py-24"

// Container
"mx-auto max-w-[720px] text-center px-4 flex flex-col items-center gap-6"

// Title
"font-display text-3xl md:text-4xl font-bold text-white tracking-tight"

// Description
"font-body text-base md:text-lg text-white/80 leading-relaxed"

// Primary button (inverted)
"rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary-600 hover:bg-neutral-50 shadow-lg transition-all duration-200"

// Secondary button (outline white)
"rounded-full border-2 border-white/40 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200"
```

---

## 12. Footer

**File:** `components/Footer.tsx`

### Structure

```
<footer>                          ← dark bg (neutral-900 or primary-950)
  <div.container>
    <div.grid>                    ← 4-column grid
      <div.brand>                 ← logo, tagline, social icons
      <div.links-col />           ← "Quick Links"
      <div.links-col />           ← "Our Services"
      <div.contact />             ← address, phone, email
    </div.grid>
    <div.bottom>                  ← copyright, legal links
  </div.container>
</footer>
```

### Props

```ts
interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterProps {
  columns: FooterColumn[];
  contactInfo?: {
    address?: string;
    phone?: string;
    email?: string;
  };
  socialLinks?: { icon: React.ReactNode; href: string; label: string }[];
}
```

### Tailwind Recipe

```tsx
// Footer
"bg-neutral-900 text-neutral-300 pt-16 pb-8"

// Grid
"mx-auto max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 md:px-6 lg:px-8"

// Column title
"font-body text-sm font-semibold uppercase tracking-wider text-white mb-4"

// Link
"font-body text-sm text-neutral-400 hover:text-white transition-colors duration-[120ms]"

// Social icon
"flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-primary-500 hover:text-white transition-all duration-200"

// Bottom bar
"mt-12 border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500"
```

---

## 13. Button

**File:** `components/Button.tsx`

### Variants & Sizes

| Variant | Background | Text | Border | Shadow |
|---------|-----------|------|--------|--------|
| `primary` | `primary-500` | white | none | `shadow-primary` |
| `secondary` | `primary-50` | `primary-600` | none | none |
| `outline` | transparent | `neutral-700` | `neutral-300` | none |
| `outline-white` | transparent | white | `white/40` | none |
| `ghost` | transparent | `neutral-700` | none | none |
| `inverted` | white | `primary-600` | none | `shadow-lg` |

| Size | Padding | Font | Height |
|------|---------|------|--------|
| `sm` | `px-4 py-2` | `text-sm` | `h-9` |
| `md` | `px-6 py-2.5` | `text-sm` | `h-11` |
| `lg` | `px-8 py-3.5` | `text-base` | `h-13` |

### Props

```ts
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "outline-white" | "ghost" | "inverted";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;        // leading icon
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  asChild?: boolean;              // render as <a> via Slot pattern
}
```

### Tailwind Recipe (primary, md)

```tsx
"inline-flex items-center justify-center gap-2 rounded-full
 bg-primary-500 px-6 py-2.5 text-sm font-semibold text-white
 shadow-[var(--shadow-primary)]
 hover:bg-primary-600 hover:shadow-[var(--shadow-primary-lg)] hover:scale-[1.02]
 active:scale-[0.98]
 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2
 disabled:opacity-50 disabled:pointer-events-none
 transition-all duration-200"
```

All buttons use `rounded-full` (pill shape) — this is a core brand trait.

---

## 14. Input / Form Field

**File:** `components/Input.tsx`

### Structure

```
<div.field>
  <label />
  <input />                  ← or <textarea>, <select>
  <p.error />                ← conditional
</div.field>
```

### Props

```ts
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}
```

### Tailwind Recipe

```tsx
// Label
"font-body text-sm font-medium text-neutral-700 mb-1.5 block"

// Input
"w-full rounded-lg border border-neutral-300 bg-white px-4 py-3
 font-body text-base text-neutral-900 placeholder:text-neutral-400
 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:outline-none
 disabled:bg-neutral-100 disabled:text-neutral-400
 transition-all duration-[120ms]"

// Error state
"border-error-500 focus:border-error-500 focus:ring-error-100"

// Error message
"mt-1.5 text-xs text-error-500 font-body"
```

---

## 15. Badge

**File:** `components/Badge.tsx`

### Props

```ts
interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "error";
  size?: "sm" | "md";
}
```

### Tailwind Recipe

```tsx
// Base
"inline-flex items-center rounded-full font-body font-medium"

// Size sm
"px-2.5 py-0.5 text-xs"

// Size md
"px-3 py-1 text-sm"

// Variants
// default:  "bg-neutral-100 text-neutral-700"
// primary:  "bg-primary-50 text-primary-700"
// success:  "bg-success-100 text-success-500"
// warning:  "bg-warning-100 text-warning-500"
// error:    "bg-error-100 text-error-500"
```

---

## 16. Sparkle Icon

**File:** `components/SparkleIcon.tsx`

A decorative 4-pointed sparkle SVG used beside the logo and headings. Matches the reference images.

### Props

```ts
interface SparkleIconProps {
  className?: string;
  size?: number;           // default: 24
  animated?: boolean;      // gentle rotate + pulse
}
```

### Implementation

```tsx
export function SparkleIcon({ className, size = 24, animated }: SparkleIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn(
        "text-primary-400",
        animated && "animate-[sparkle-spin_3s_ease-in-out_infinite]",
        className
      )}
    >
      <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z" />
    </svg>
  );
}
```

### Keyframe (add to globals.css)

```css
@keyframes sparkle-spin {
  0%, 100% { transform: rotate(0deg) scale(1); opacity: 1; }
  50%      { transform: rotate(180deg) scale(0.85); opacity: 0.7; }
}
```

---

## Component File Structure

```
components/
├── Button.tsx
├── Badge.tsx
├── SparkleIcon.tsx
├── Input.tsx
├── SectionHeader.tsx
├── Navbar.tsx
├── HeroSection.tsx
├── LogoBar.tsx
├── ServiceCard.tsx
├── FeatureSplit.tsx
├── TeamCard.tsx
├── StatsSection.tsx
├── DifferentiatorsSection.tsx
├── TestimonialCard.tsx
├── CtaBanner.tsx
└── Footer.tsx
```

---

## Scroll-Reveal Animation Utility

A shared hook/wrapper for scroll-triggered entrance animations:

```ts
// hooks/useScrollReveal.ts
// Uses IntersectionObserver to add class when element enters viewport

interface ScrollRevealOptions {
  threshold?: number;        // default: 0.15
  delay?: number;            // stagger delay in ms
  once?: boolean;            // default: true — animate only once
}
```

### CSS Classes

```css
/* Base state (hidden) */
.reveal {
  opacity: 0;
  transform: translateY(20px);
}

/* Revealed state */
.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
  transition: opacity var(--duration-reveal) var(--ease-out),
              transform var(--duration-reveal) var(--ease-out);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; }
}
```
