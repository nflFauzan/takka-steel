# Motion Design System — Takka Steel
**Date:** 2026-06-25
**Scope:** Full site (all pages)
**Approach:** B — Motion System + Layout Fixes

---

## Context

Takka Steel is an Indonesian steel materials distributor. The company profile site uses Next.js + Tailwind + framer-motion. The existing `Reveal.tsx` is a CSS-only IntersectionObserver fade — primitive and inconsistent with the framer-motion already used in ProductSections.

**Design constraints:**
- Trust-first industrial audience (contractors, homeowners)
- DESIGN_VARIANCE: 6 / MOTION_INTENSITY: 6 / VISUAL_DENSITY: 5
- No GSAP (not installed, not needed for this tone)
- All motion must honor `prefers-reduced-motion`
- framer-motion already in `dependencies`

---

## New Motion Primitives

### 1. MotionReveal (rewrites src/components/Reveal.tsx)

**Purpose:** Replace the CSS-only reveal with a framer-motion component. All existing usages upgrade automatically.

**Props:**
- children: ReactNode
- className?: string
- delay?: number (ms, default 0)
- direction?: 'up' | 'left' | 'right' (default 'up')
- once?: boolean (default true)

**Behavior:**
- direction="up": y: 24 to 0
- direction="left": x: -32 to 0
- direction="right": x: 32 to 0
- All directions: filter blur(8px) to blur(0px), opacity 0 to 1
- Spring: stiffness 80, damping 18
- Viewport: once true, amount 0.2
- Reduced motion: renders immediately visible (no animation)

**Implementation note:** Rewrites src/components/Reveal.tsx in-place. All existing usages inherit the upgrade without touching call sites.

---

### 2. AnimatedStat (new: src/components/AnimatedStat.tsx)

**Purpose:** Scroll-triggered animated counter for numeric stats.

**Props:**
- value: string (e.g. "1.000+", "2022", "13+")
- label: string (e.g. "Pelanggan")
- className?: string

**Behavior:**
- Parses numeric portion of value, strips formatting characters
- Uses useInView to trigger on first viewport entry
- useSpring drives count from 0 to target (for normal numbers like 1000, 13)
- For year values (detected as 4-digit numbers >= 1900): count from target-10 to target to avoid animating 2000+ frames
- Non-numeric values (no digits at all) skip animation, just fade in via MotionReveal
- Suffix (+, k, etc.) appears with 200ms delay after number lands
- Respects prefers-reduced-motion: shows final value immediately

**Applied at:** Tentang "Siapa Kami" stats grid (4 stat items)

---

### 3. Hero Parallax (inline pattern per hero)

**Purpose:** Background image moves at 30% of scroll speed.

**Pattern:**
- useRef on the section element
- useScroll with target=ref, offset ["start start", "end start"]
- useTransform scrollYProgress [0,1] to ["0%", "30%"] for bgY
- Apply style={{ y: bgY }} to background img only
- Text/CTAs are statically positioned in foreground

**Applied at:** /produk hero, /tentang hero

---

## Per-Page Changes

### Home (/)

| Element | Change |
|---|---|
| OrderProcess | Replace 3 equal cards with horizontal numbered timeline strip (desktop: single row, steps connected by a hairline, each step width ~33%). Mobile: vertical stack, each step full-width. Remove eyebrow "Mudah & Cepat". Staggered MotionReveal per step (delay 0/120/240ms). |
| LocationSection | Replace placeholder icon-div with real Google Maps iframe (company.mapsEmbedUrl). |
| FaqSection | MotionReveal on each details item, staggered. |
| CtaBandDark | Headline MotionReveal direction="up", buttons enter 100ms after. |

### Produk (/produk)

| Element | Change |
|---|---|
| Hero | Add parallax to background photo. Text/CTAs stay fixed. |
| TrustStrip brands row | Each brand name staggered MotionReveal at 40ms apart. |
| TrustStrip facts grid | MotionReveal staggered on scroll. |
| ProductBento tiles | Add whileHover scale 1.02 y -4 with spring stiffness 300 damping 20. |

### Tentang (/tentang)

| Element | Change |
|---|---|
| Hero | Add parallax to background photo. |
| Siapa Kami stats | Wrap numeric dd values with AnimatedStat. |
| Pendiri split | Left image: MotionReveal direction="left". Right text: MotionReveal direction="right". |
| Activity Gallery | Each photo staggered MotionReveal at delay index*60ms. |
| Testimonials | Replace 3 equal static cards with horizontal scroll-snap strip on mobile, 3-col grid on desktop. Each card MotionReveal direction="up". |

---

## Implementation Order

1. Rewrite src/components/Reveal.tsx to MotionReveal
2. Create src/components/AnimatedStat.tsx
3. Fix home page OrderProcess layout and LocationSection map
4. Apply hero parallax to produk and tentang
5. Apply AnimatedStat to tentang stats grid
6. Apply direction variants to split sections in tentang
7. Add whileHover physics to ProductBento tiles
8. Fix tentang testimonials to scroll-snap

---

## Anti-Patterns to Avoid

- No infinite loop animations
- No motion on static informational text
- Every animation must communicate hierarchy or entry orientation
- No decorative glow effects or blobs
- framer-motion only, no GSAP mixing
- prefers-reduced-motion respected in every animated component

---

## Taste-Skill Pre-Flight Checklist

- [ ] MotionReveal honors useReducedMotion()
- [ ] AnimatedStat honors useReducedMotion()
- [ ] Hero parallax uses useScroll + useTransform, not window.addEventListener
- [ ] All animated elements use only transform and opacity
- [ ] once: true on all viewport-triggered animations
- [ ] No useState for continuous values
- [ ] Marquee count: zero
- [ ] Eyebrow count post-changes: home <= 2, produk <= 2, tentang <= 3
