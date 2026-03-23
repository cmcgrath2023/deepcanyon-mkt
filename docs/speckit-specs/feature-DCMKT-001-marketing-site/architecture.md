# SPEC-DC-007: Architecture

## Project Structure

```
marketing/
├── app/
│   ├── layout.tsx          # Root layout, meta, fonts
│   ├── page.tsx            # Homepage (all sections)
│   ├── pricing/
│   │   └── page.tsx        # Detailed pricing comparison
│   ├── about/
│   │   └── page.tsx        # About Deep Canyon
│   ├── security/
│   │   └── page.tsx        # Security & fund protection
│   └── legal/
│       ├── terms/page.tsx
│       ├── privacy/page.tsx
│       └── risk/page.tsx
├── components/
│   ├── Nav.tsx             # Fixed navigation bar
│   ├── Hero.tsx            # Hero section with CTAs
│   ├── HowItWorks.tsx      # 4-step flow
│   ├── Features.tsx        # 6 feature cards
│   ├── AgentTeam.tsx       # Agent showcase
│   ├── DashboardPreview.tsx# App screenshot/demo
│   ├── Pricing.tsx         # Pricing tiers
│   ├── FAQ.tsx             # Accordion FAQ
│   ├── FinalCTA.tsx        # Bottom CTA section
│   └── Footer.tsx          # Site footer with legal
├── public/
│   ├── deep-canyon.svg     # Logo
│   ├── og-image.png        # Open Graph image (1200x630)
│   └── dashboard-preview.png  # App screenshot
├── next.config.ts
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

## Deployment Architecture

```
deepcanyon.ai (DNS)
    │
    ├── / → DO Static Site (or Cloudflare Pages)
    │      marketing/ build output
    │      Static HTML/CSS/JS
    │      CDN-cached globally
    │
    └── app.deepcanyon.ai → DO App Platform
           mtwm-ui/ (Next.js app)
           services/ (Gateway API)
```

## Design System

### Colors
```
Background:     #0a0a1a (near-black)
Surface:        rgba(255,255,255,0.02) - 0.03
Border:         rgba(255,255,255,0.05) - 0.10
Text Primary:   #ffffff
Text Secondary: rgba(255,255,255,0.50)
Text Muted:     rgba(255,255,255,0.25)

Brand Green:    #34d399 (emerald-400)
CTA Amber:      #f59e0b (amber-500)
Agent Warren:   #fbbf24 (amber-400)
Agent Fin:      #34d399 (emerald-400)
Agent Liza:     #60a5fa (blue-400)
Agent Ferd:     #a78bfa (purple-400)
Agent Tara:     #f87171 (red-400)
```

### Typography
- Headings: Inter (or system font stack), bold, tight tracking
- Body: Inter, regular, relaxed leading
- Mono: Geist Mono (for any code/data)
- Scale: 5xl-7xl hero, 3xl-4xl section heads, base body, xs fine print

### Components
- Cards: bg-white/[0.02], border border-white/5, rounded-2xl
- Buttons primary: bg-amber-500/90 hover:bg-amber-500, text-black, font-semibold, rounded-xl
- Buttons secondary: bg-white/5 hover:bg-white/10, border border-white/10, text-white
- Badges: bg-emerald-500/10, border border-emerald-500/20, text-emerald-400, rounded-full
- Gradient blurs: emerald and amber, 600px, blur-3xl, 3-5% opacity

### Responsive Breakpoints
- Mobile: < 640px (single column, stacked)
- Tablet: 640-1024px (2 columns where appropriate)
- Desktop: > 1024px (full layout, 3-column pricing)

## SEO Configuration

### Meta (homepage)
```html
<title>Deep Canyon — AI Trading Team That Works 24/7</title>
<meta name="description" content="Five AI agents analyze markets, execute trades, and manage risk around the clock. Autonomous wealth management powered by adaptive intelligence." />
<meta property="og:title" content="Deep Canyon — Your AI Trading Team" />
<meta property="og:description" content="Five specialized AI agents trade for you 24/7. Start with a 7-day free trial." />
<meta property="og:image" content="https://deepcanyon.ai/og-image.png" />
<meta property="og:url" content="https://deepcanyon.ai" />
<meta name="twitter:card" content="summary_large_image" />
```

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Deep Canyon",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": [
    { "@type": "Offer", "name": "Starter", "price": "29", "priceCurrency": "USD" },
    { "@type": "Offer", "name": "Pro", "price": "79", "priceCurrency": "USD" },
    { "@type": "Offer", "name": "Elite", "price": "199", "priceCurrency": "USD" }
  ]
}
```

## Architectural Decisions

### ADR-DC-008: Separate Marketing Site
- **Context**: Marketing content vs app functionality
- **Decision**: Separate Next.js project with static export
- **Rationale**: Independent deploy cycle, no app dependencies, CDN-cacheable, fast loads, SEO-optimized. Robinhood, Linear, Vercel, Stripe all use this pattern.
- **Consequence**: Two projects to maintain, but marketing site is simple and changes infrequently

### ADR-DC-009: No Cookie Banner
- **Context**: Analytics and privacy compliance
- **Decision**: Use Plausible or PostHog (cookie-free analytics), no marketing cookies
- **Rationale**: No cookie banner needed if we don't set cookies. Better UX, simpler GDPR compliance. Track pageviews and conversions without tracking individuals.
