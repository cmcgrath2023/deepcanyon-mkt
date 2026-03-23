# SPEC-DC-007: Design

## Design Philosophy

Inspired by Robinhood's 2024 visual identity refresh: **bold minimalism with fintech confidence**. The guiding principle is "less is more" — a streamlined, distraction-free experience that feels sophisticated and cutting-edge without being cluttered. Every element earns its place.

Deep Canyon's twist: where Robinhood's identity is built around individual empowerment, ours is built around **team** — five AI agents working for you. The design should feel like a command center that's been distilled down to its essence.

### Design Principles

1. **Canyon Green foundations** — Deep, rich greens (`#091413` base) evoke depth and nature — a canyon at dusk. Dark mode isn't a toggle, it's the identity.
2. **Muted accent pair** — Soft muted yellow for CTAs and warmth, muted blue for informational and trust signals. Two accents, used with restraint.
3. **Typography-driven hierarchy** — Large, lightweight headlines with tight letter-spacing. Let the words do the work, not decoration.
4. **Purposeful color** — Agent colors appear only in their context. Everything else lives within the green-to-white tonal range.
5. **Generous space** — Sections breathe. Darkspace signals confidence and premium positioning.
6. **Motion with intent** — CSS-only animations. No heavy libraries. Every animation communicates something — a pulse means "alive," a fade-in means "arriving."

---

## Color System

### Canyon Green Palette (foundation)

Derived from the brand palette — a tonal green ramp from near-black to pale sage.

| Role | Name | Value | Usage |
|------|------|-------|-------|
| **Background** | Canyon Deep | `#091413` | Page background, primary surfaces |
| **Surface** | Canyon Dark | `#0f2420` | Cards, elevated containers, nav |
| **Surface Hover** | Canyon Mid-Dark | `#1a3d35` | Interactive hover states |
| **Midtone** | Canyon Green | `#285A48` | Borders, dividers, secondary surfaces |
| **Accent Green** | Canyon Bright | `#408A71` | Active states, emphasis borders, icons |
| **Light** | Canyon Light | `#6AB89A` | Secondary text highlights, subtle accents |
| **Pale** | Canyon Sage | `#B0E4CC` | Badges, tags, light accents on dark |
| **Wash** | Canyon Mist | `#D8F2E8` | Decorative only, very sparingly |

### Text Colors

| Role | Value | Usage |
|------|-------|-------|
| Text Primary | `#ffffff` | Headlines, primary content |
| Text Secondary | `#B0E4CC` (Canyon Sage) | Body copy, descriptions — green-tinted instead of gray |
| Text Muted | `rgba(176,228,204,0.45)` | Fine print, captions, disclaimers |
| Text on Accent | `#091413` (Canyon Deep) | Text on yellow/light buttons |

### Accent Colors — Muted Yellow & Blue

Two offset accent colors provide warmth and trust against the green foundation.

| Role | Name | Value | Usage |
|------|------|-------|-------|
| **Muted Yellow** (primary CTA) | Sand | `#D4A843` | Primary buttons, key highlights, pricing badges |
| **Muted Yellow hover** | Sand Light | `#E0BF6A` | CTA hover state |
| **Muted Yellow subtle** | Sand Wash | `rgba(212,168,67,0.12)` | Badge backgrounds, subtle highlights |
| **Muted Blue** (informational) | Slate | `#5B8FA8` | Links, trust signals, informational accents |
| **Muted Blue hover** | Slate Light | `#7AAFC4` | Link hover state |
| **Muted Blue subtle** | Slate Wash | `rgba(91,143,168,0.12)` | Info badge backgrounds |

### Agent Colors (contextual only)

| Agent | Color | Value | Usage |
|-------|-------|-------|-------|
| Warren (MD) | Warm Amber | `#D4A843` | Shares the muted yellow — he's the leader |
| Fin (Trading) | Canyon Bright | `#408A71` | Uses the brand green — trading is core |
| Liza (News) | Slate Blue | `#5B8FA8` | Shares the muted blue — information flow |
| Ferd (Research) | Muted Purple | `#8B7EAF` | Distinct but desaturated to match palette |
| Tara (SRE) | Muted Coral | `#C47A6E` | Warm but restrained, not alarm-red |

Agent colors appear **only** in the Agent Team section and nowhere else. Each gets a subtle glow/gradient treatment at ~5% opacity for card backgrounds. All agent colors are intentionally desaturated to sit comfortably within the muted palette.

### Gradient Blurs (ambient light effects)

Two to three large radial gradients sit behind content to create depth — like light filtering into a canyon.

```css
/* Hero — warm glow, top-right */
.hero-glow {
  position: absolute;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(212,168,67,0.06) 0%, transparent 70%);
  filter: blur(120px);
  top: -200px;
  right: -200px;
}

/* Hero — green glow, bottom-left */
.hero-glow-secondary {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(64,138,113,0.08) 0%, transparent 70%);
  filter: blur(120px);
  bottom: -100px;
  left: -100px;
}

/* Sections — blue atmospheric wash */
.section-glow {
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(91,143,168,0.05) 0%, transparent 70%);
  filter: blur(100px);
}
```

Use sparingly — max 2 per section, 5-8% opacity. They should feel like ambient light filtering through a canyon, not decorative blobs.

---

## Typography

### Font Stack

| Role | Font | Fallback | Weight | Tracking |
|------|------|----------|--------|----------|
| **Display** (hero headline) | Inter | system-ui, sans-serif | 700 (bold) | `-0.03em` |
| **Heading** (section titles) | Inter | system-ui, sans-serif | 600 (semibold) | `-0.02em` |
| **Body** | Inter | system-ui, sans-serif | 400 (regular) | `0` |
| **Mono** (data, code) | Geist Mono | ui-monospace, monospace | 400 | `0` |

Inter is our single typeface — no serif pairing. This keeps the feel technical and modern rather than editorial. Robinhood uses multiple type families for warmth; we stay monolithic for precision.

### Type Scale

| Level | Desktop | Mobile | Line Height | Usage |
|-------|---------|--------|-------------|-------|
| Display | `72px` / `text-7xl` | `44px` / `text-5xl` | `1.05` | Hero headline only |
| H1 | `48px` / `text-5xl` | `36px` / `text-4xl` | `1.1` | Section headings |
| H2 | `36px` / `text-4xl` | `28px` / `text-3xl` | `1.15` | Sub-section headings |
| H3 | `24px` / `text-2xl` | `20px` / `text-xl` | `1.3` | Card headings |
| Body | `18px` / `text-lg` | `16px` / `text-base` | `1.6` | Paragraph text |
| Small | `14px` / `text-sm` | `14px` / `text-sm` | `1.5` | Supporting text |
| Caption | `12px` / `text-xs` | `12px` / `text-xs` | `1.4` | Fine print, disclaimers |

---

## Layout & Grid

### Container

```
Max width: 1280px (7xl)
Padding: 24px mobile / 32px tablet / 48px desktop
```

### Section Spacing

```
Between sections: 120px desktop / 80px tablet / 64px mobile
Internal section padding: 80px desktop / 48px mobile (top and bottom)
```

### Grid

- **Mobile** (<640px): Single column, full width
- **Tablet** (640–1024px): 2 columns, 24px gap
- **Desktop** (>1024px): 3 columns for features/pricing, 2 columns for split layouts, 32px gap

---

## Component Design

### Navigation Bar

Solid dark bar — like Robinhood's pure black nav. Always opaque, always present. The darkest element on the page.

```
Position: fixed, top: 0, z-50
Height: 64px
Background: #091413 (Canyon Deep — solid, no transparency)
Border-bottom: 1px solid #285A48/20
```

| Element | Spec |
|---------|------|
| Logo | deep-canyon.svg, ~120px wide, **white** |
| Nav links | text-sm, text-white/60, hover:text-white, transition 150ms |
| Active link | text-white |
| "Log In" | Ghost button — text-white/60, hover:text-white |
| "Get Started" | Pill button — bg-[#D4A843], text-[#091413], font-semibold, rounded-full, px-6, h-10 |
| Mobile | Hamburger icon, full-screen overlay on `#091413` background |

The nav is always solid `#091413` — no transparent-to-opaque transition. This creates a strong anchor at the top, just like Robinhood's black bar.

### Buttons

Following Robinhood's pill-shaped CTA pattern, adapted to our palette:

**Primary (Muted Yellow / Sand)**
```
bg-[#D4A843] hover:bg-[#E0BF6A]
text-[#091413] font-semibold
rounded-full (pill shape)
px-8 h-12 (large) / px-6 h-10 (default) / px-4 h-8 (small)
transition-all duration-150
```

**Secondary (Ghost / Canyon)**
```
bg-[#285A48]/20 hover:bg-[#285A48]/40
border border-[#285A48]/50
text-white font-medium
rounded-full
same size variants as primary
```

**Tertiary (Outline)**
```
bg-transparent hover:bg-[#0f2420]
border border-[#408A71]/40
text-[#B0E4CC] font-medium
rounded-full
```

**Text Link**
```
text-[#5B8FA8] hover:text-[#7AAFC4]
underline-offset-4 hover:underline
```

### Cards

```
bg-[#0f2420]
border border-[#285A48]/40
rounded-2xl
p-8 (desktop) / p-6 (mobile)
hover:bg-[#1a3d35] hover:border-[#285A48]/60
transition-all duration-200
```

Agent cards get a colored top-border or left-border accent using the agent's color at ~40% opacity.

### Badges

```
inline-flex items-center gap-2
bg-[#408A71]/15 border border-[#408A71]/25
text-[#6AB89A] text-sm font-medium
rounded-full px-4 py-1.5
```

The hero badge includes a pulsing dot:
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
.pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #408A71;
  animation: pulse 2s ease-in-out infinite;
}
```

### Pricing Cards

Three columns on desktop, stacked on mobile. Pro tier is visually elevated:

**Standard tier card:**
```
bg-[#0f2420] border border-[#285A48]/40 rounded-2xl p-8
```

**Pro tier card (featured):**
```
bg-[#1a3d35] border border-[#D4A843]/30 rounded-2xl p-8
ring-1 ring-[#D4A843]/15
relative — "Most Popular" badge (bg-[#D4A843] text-[#091413]) positioned at top
```

Price display: `text-5xl font-bold text-white` + `text-lg text-[#B0E4CC]/50` for "/mo"

Feature list: checkmark icons (`text-[#408A71]` for included, `text-[#285A48]/40` for excluded), `text-sm text-[#B0E4CC]/70`

### FAQ Accordion

```
border-b border-[#285A48]/30
py-6
```

Question row: `flex justify-between items-center cursor-pointer`
- Question text: `text-lg font-medium text-white`
- Chevron: `text-[#408A71]`, rotates 180deg when open
- Answer: `text-[#B0E4CC]/70 text-base mt-4`, max-height transition for smooth expand

---

## Section-by-Section Design

### 1. Navigation
See component spec above. Transparent on hero, gains background on scroll.

### 2. Hero

Full-viewport height (`min-h-screen`), centered content. The mint/sage color (`#B0E4CC`) is the star here — used for the headline or a large accent element to create immediate visual identity.

```
Layout: centered, max-w-4xl mx-auto, text-center
Background: #0f2420 (Canyon Dark — one step lighter than nav to create depth separation)
Padding-top: 160px (account for fixed nav + breathing room)
```

| Element | Style |
|---------|-------|
| Badge | Mint badge with pulse dot: `bg-[#B0E4CC]/10 border-[#B0E4CC]/20 text-[#B0E4CC]` — "5 AI Agents Trading 24/7" |
| Headline | Display size (72px→44px), bold, **`text-[#B0E4CC]`** (mint), tight tracking. The mint headline on dark green is the signature moment. |
| Subheadline | text-xl (20px→18px), text-white/70, max-w-2xl, mt-6 |
| CTA group | flex gap-4, mt-10, centered |
| Primary CTA | Large pill button — **`bg-[#B0E4CC] text-[#091413]`** (mint button, dark text) |
| Secondary CTA | Large ghost pill button — `border-[#B0E4CC]/30 text-[#B0E4CC]` |
| Fine print | text-xs, text-[#B0E4CC]/30, mt-8, max-w-lg |

The hero uses mint (`#B0E4CC`) as the dominant color — headline, primary CTA, and badge all mint. This creates a strong first impression distinct from every other fintech site. The muted yellow (`#D4A843`) is reserved for secondary CTAs and pricing further down the page.

Two gradient blurs: mint glow top-right, deeper green bottom-left. Both behind content (`z-0`).

```css
/* Hero — mint glow, top-right */
.hero-glow {
  background: radial-gradient(circle, rgba(176,228,204,0.08) 0%, transparent 70%);
}
/* Hero — deep green glow, bottom-left */
.hero-glow-secondary {
  background: radial-gradient(circle, rgba(64,138,113,0.06) 0%, transparent 70%);
}
```

### 3. Social Proof / Stats (future)

When ready, a horizontal strip with 3-4 stats:

```
border-y border-[#285A48]/30
py-16
grid grid-cols-2 md:grid-cols-4 gap-8
text-center
```

Each stat: `text-4xl font-bold text-white` number + `text-sm text-[#B0E4CC]/40` label

### 4. How It Works

4-step horizontal flow on desktop, vertical on mobile.

```
grid grid-cols-1 md:grid-cols-4 gap-8
```

Each step:
- Step number: `text-[#D4A843] text-sm font-mono font-bold` ("01", "02", etc.)
- Connecting line: `h-px bg-gradient-to-r from-[#408A71]/40 to-transparent` between steps (desktop only)
- Title: `text-xl font-semibold text-white mt-4`
- Description: `text-sm text-[#B0E4CC]/60 mt-2`

### 5. Features

Section heading centered, then 6 cards in a 3x2 grid (desktop) / 2x3 (tablet) / 1x6 (mobile).

Each feature card:
- Icon: Simple line icon or small SVG, `text-[#6AB89A]`, 32px
- Title: `text-xl font-semibold text-white mt-4`
- Description: `text-sm text-[#B0E4CC]/60 mt-2 leading-relaxed`

No hover animations on feature cards — they're informational, not interactive.

### 6. Meet Your Trading Team (Agents)

The signature section. 5 agent cards + 1 CTA card in a scrollable horizontal layout on mobile, 3x2 grid on desktop.

Each agent card:
```
bg-[#0f2420] border border-[#285A48]/40 rounded-2xl p-6
border-t-2 border-t-[agent-color]/40
```

- Agent color dot: `w-3 h-3 rounded-full bg-[agent-color]`
- Name + role: `text-lg font-semibold text-white` + `text-sm text-[agent-color]`
- Description: `text-sm text-[#B0E4CC]/60 mt-3`

Background: Each card gets a very subtle radial gradient of its agent color at 3% opacity, centered at the top.

6th card is a CTA: "Ready to meet the team?" with Sand (muted yellow) button.

### 7. Dashboard Preview

Full-width section with a centered browser-chrome mockup containing a dashboard screenshot.

```
max-w-5xl mx-auto
rounded-xl overflow-hidden
border border-[#285A48]/40
shadow-2xl shadow-black/50
```

Browser chrome: dark bar (`bg-[#0f2420]`) with 3 dots and a URL bar showing "app.deepcanyon.ai". Screenshot below.

Optional: subtle `hover:scale-[1.01]` zoom on the image, `transition-transform duration-500`.

### 8. Pricing

See Pricing Cards component spec above. Section includes:

- Toggle: Monthly / Annual (`save ~17%` badge in Canyon Sage on annual)
- 3 tier cards side by side
- AUM fee explainer below cards: `text-sm text-[#B0E4CC]/50 max-w-2xl mx-auto text-center`
- Risk disclaimer: `text-xs text-[#B0E4CC]/30`

### 9. FAQ

See FAQ Accordion component spec above. Max 10 items. Section heading + subheading centered above.

### 10. Final CTA

Full-width section with a subtle gradient background — Canyon Deep to a warmer tone.

```
text-center py-24
background: linear-gradient(180deg, #091413 0%, #0f2420 50%, #091413 100%)
```

- Headline: `text-4xl font-bold text-white`
- Subheadline: `text-lg text-[#B0E4CC]/60 mt-4`
- CTA: Large Sand (muted yellow) pill button, `mt-8`
- Fine print: Risk disclaimer, `text-xs text-[#B0E4CC]/30 mt-6`

### 11. Footer

Multi-column layout following Robinhood's dense-but-organized approach.

```
border-t border-[#285A48]/30
bg-[#060e0c] (slightly darker than Canyon Deep)
pt-16 pb-8
```

**Top row:** Logo + tagline on left, social icons (`text-[#408A71] hover:text-[#6AB89A]`) on right

**Link columns** (4 columns desktop, 2 mobile):
- Product: Features, Pricing, Agents, How It Works
- Company: About, Security, Blog
- Legal: Terms of Service, Privacy Policy, Risk Disclosure
- Connect: Discord, Twitter/X, Email support

Column headers: `text-sm font-semibold text-[#6AB89A] uppercase tracking-wider mb-4`
Links: `text-sm text-[#B0E4CC]/50 hover:text-white`

**Bottom:**
- Regulatory fine print block: FINRA/SIPC, broker-dealer disclaimer, risk warning — `text-xs text-[#B0E4CC]/25 leading-relaxed`
- Copyright: `text-xs text-[#B0E4CC]/25`

---

## Animation & Motion

All animations are **CSS-only**. No Framer Motion, GSAP, or AOS.

### Scroll Reveal

Elements fade in as they enter the viewport using `IntersectionObserver` + CSS classes:

```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

Stagger children by adding `transition-delay` in increments of `100ms`.

### Hover States

Following Robinhood's approach — **opacity-based**, not color-change:

- Buttons: `hover:opacity-90`, `transition-opacity duration-150`
- Cards: `hover:bg-white/[0.04]`, `transition-colors duration-200`
- Links: `hover:text-white`, `transition-colors duration-150`
- Images: `hover:scale-[1.01]`, `transition-transform duration-300`

### Specific Animations

| Element | Animation | Duration |
|---------|-----------|----------|
| Hero badge pulse dot | `opacity 1→0.4→1` | `2s infinite` |
| Nav background | `opacity 0→1` on scroll | `200ms` |
| FAQ chevron | `rotate(0)→rotate(180deg)` | `200ms` |
| Pricing toggle | `translateX` slide | `200ms` |
| Agent cards (mobile) | `scroll-snap-type: x mandatory` | native scroll |

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Responsive Strategy

Mobile-first. Base styles target mobile, scale up with breakpoints.

### Breakpoints (Tailwind defaults)

| Name | Width | Layout Notes |
|------|-------|--------------|
| Base | <640px | Single column, stacked sections, hamburger nav, horizontal scroll carousels |
| `sm` | 640px | 2-column grids begin |
| `md` | 768px | Tablet layout stabilizes |
| `lg` | 1024px | Full desktop layout, 3-column grids |
| `xl` | 1280px | Max container width reached, content centered |

### Mobile-Specific Patterns

- **Sticky bottom CTA bar**: Fixed bottom bar with "Start Free Trial" button, `h-16 bg-[#091413]/95 backdrop-blur border-t border-[#285A48]/30`. Appears after scrolling past the hero.
- **Agent cards**: Horizontal scroll-snap carousel instead of grid
- **Pricing cards**: Stacked vertically, Pro card first (reordered)
- **Nav**: Hamburger → full-screen overlay with large tap targets (min 48px)
- **Hero headline**: Scales from 72px to 44px
- **Section padding**: Reduces from 120px gaps to 64px

---

## Imagery & Assets

### Logo
- `deep-canyon.svg` — white on dark, used in nav and footer
- Keep at consistent width (~120px nav, ~140px footer)

### Dashboard Preview
- Captured from live app at 1440px wide
- Wrapped in browser chrome mockup
- Optimized as WebP with PNG fallback
- `loading="lazy"`, proper `width`/`height` attributes for CLS prevention

### Open Graph Image
- `og-image.png` at 1200x630
- Dark background, logo, headline, subtle agent color accents
- Used for Twitter/LinkedIn/Slack unfurl

### Icons
- Lucide Icons (tree-shakeable, consistent with app)
- 24px default, `stroke-width: 1.5`
- `text-[#6AB89A]` for feature icons, `text-[#285A48]` for UI chrome

### No Photography
Unlike Robinhood, we use **no photography**. The brand is abstract and technical — gradients, glows, geometric shapes, and the dashboard screenshot are our visual language. This keeps the site lightweight and avoids stock photo genericness.

---

## Accessibility

### WCAG 2.1 AA Compliance

- **Color contrast**: All text meets 4.5:1 ratio minimum. `#B0E4CC` on `#091413` = ~9.5:1. Fine print at 30% opacity is decorative/supplementary only.
- **Focus indicators**: `focus-visible:ring-2 focus-visible:ring-[#D4A843] focus-visible:ring-offset-2 focus-visible:ring-offset-[#091413]`
- **Touch targets**: Minimum 44x44px for all interactive elements
- **Semantic HTML**: `<nav>`, `<main>`, `<section>`, `<footer>`, proper heading hierarchy
- **Alt text**: All images have descriptive alt text
- **Skip to content**: Hidden link at top of page, visible on focus
- **Reduced motion**: Respects `prefers-reduced-motion`
- **Keyboard navigation**: Full tab navigation, visible focus states, escape to close modals/menus

---

## Performance Budget

| Metric | Target |
|--------|--------|
| Lighthouse Performance | > 90 |
| First Contentful Paint | < 1.2s |
| Largest Contentful Paint | < 2.0s |
| Cumulative Layout Shift | < 0.1 |
| Total page weight | < 500KB (excluding dashboard image) |
| JavaScript | < 100KB gzipped |
| CSS | < 30KB gzipped |
| Fonts | Inter variable (subset) ~40KB |

### Implementation Notes

- Static export — no SSR overhead
- Inter loaded via `next/font` (self-hosted, no external requests)
- Images: WebP with `<picture>` fallback, proper `width`/`height`
- No animation libraries — CSS only
- No icon font — inline SVGs via Lucide, tree-shaken
- Tailwind CSS purged in production
