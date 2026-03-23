# SPEC-DC-007: Public Marketing Site — deepcanyon.ai

## Summary

Standalone public marketing website at `deepcanyon.ai` that sells the Deep Canyon platform. Separate project from the app (`app.deepcanyon.ai`). Static site — no auth, no API calls, no state. Optimized for conversion, SEO, and fast load times.

Reference: Robinhood's approach — `robinhood.com` is marketing, "Log In" links to the app.

## Functional Requirements

### FR1: Site Structure

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Homepage | Hero, features, agents, pricing, FAQ, CTAs |
| `/pricing` | Pricing detail | Full tier comparison, AUM fee explanation |
| `/about` | About | Team, mission, technology stack overview |
| `/security` | Security | How funds are protected, SIPC, encryption |
| `/legal/terms` | Terms of Service | Legal terms |
| `/legal/privacy` | Privacy Policy | Data handling, GDPR/CCPA |
| `/legal/risk` | Risk Disclosure | Required trading risk disclosures |
| `/blog` | Blog (future) | SEO content, market insights |

### FR2: Homepage Sections (in order)

1. **Navigation** — Fixed top bar. Logo, section links (Features, Agents, Pricing, FAQ), "Log In" (→ app.deepcanyon.ai/login), "Get Started" CTA (→ app.deepcanyon.ai/signup)

2. **Hero** — Full-width, dark background with subtle gradient effects
   - Badge: "5 AI Agents Trading 24/7" with pulse indicator
   - Headline: "Your AI Trading Team. Always Working."
   - Subheadline: "Five specialized AI agents analyze markets, execute trades, and manage risk around the clock. You set the strategy. They do the work."
   - Primary CTA: "Start 7-Day Free Trial"
   - Secondary CTA: "Meet the Team"
   - Fine print: "No credit card required. Brokerage services provided by Alpaca Securities LLC, member FINRA/SIPC."

3. **Social Proof / Stats** (optional, add when we have data)
   - Users, trades executed, assets managed
   - Or: "Trusted by X traders" / logos

4. **How It Works** — 4 steps
   - Sign Up (email or Google)
   - Verify Identity (2-minute KYC)
   - Fund (link bank, deposit from $500)
   - Trade (agents start working immediately)

5. **Features** — 6 feature cards
   - AI Agents That Trade For You
   - Multi-Asset Coverage (equities, crypto, forex, commodities, metals, options, REITs)
   - Talk To Your Team (conversational AI, plain English)
   - Adaptive Intelligence (Bayesian learning, gets smarter over time)
   - Risk Management Built In (stops, limits, circuit breakers)
   - Full Transparency (every decision recorded, nothing is a black box)

6. **Meet Your Trading Team** — Agent showcase
   - Warren (MD) — amber, authoritative, big picture
   - Fin (Trading) — emerald, positions and P&L
   - Liza (News) — blue, headlines and catalysts
   - Ferd (Research) — purple, sectors and patterns
   - Tara (SRE) — red, system health and uptime
   - Each with role, color, 1-2 sentence description

7. **Dashboard Preview** — Screenshot or animated demo of the app
   - Show the dashboard with P&L, positions, agent activity
   - Possibly a chat interaction with Warren

8. **Pricing** — 3 tiers

| | Starter | Pro | Elite |
|---|---|---|---|
| Price | $29/mo | $79/mo | $199/mo |
| AUM Fee | None | 0.25%/yr | 0.5%/yr |
| Agents | Warren only | All 5 | All 5 + dedicated |
| Markets | US equities | All markets | All + options/REITs |
| Trades | 5/day | Unlimited | Unlimited |
| Chat | Daily briefing | Full agent chat | Full + priority |
| Support | Email | Priority | 1-on-1 sessions |
| Trial | 7 days free | 7 days free | Contact us |

   - "Most Popular" badge on Pro
   - AUM fee explained: "A small annual fee based on your account value, calculated monthly. Aligns our success with yours."
   - Annual pricing option: save ~2 months

9. **FAQ** — 8-10 questions
   - How does it work?
   - Do I need trading experience?
   - Is my money safe? (SIPC, Alpaca as broker-dealer)
   - What markets? (depends on tier)
   - Can I lose money? (yes, risk disclosure)
   - What is the AUM fee?
   - Can I withdraw anytime?
   - How do I cancel?
   - What is Alpaca?
   - Do agents trade 24/7? (crypto yes, equities during market hours)

10. **Final CTA** — "Start Trading with AI Today" + trial button

11. **Footer**
    - Logo, tagline
    - Product links (Features, Pricing, Agents, FAQ)
    - Legal links (Terms, Privacy, Risk Disclosure)
    - Connect (Discord, Twitter, support@deepcanyon.ai)
    - Copyright + regulatory fine print:
      "Brokerage services provided by Alpaca Securities LLC, member FINRA/SIPC. Deep Canyon is not a registered broker-dealer or investment advisor. Trading involves substantial risk of loss."

### FR3: CTAs and Conversion

- Primary CTA everywhere: "Start 7-Day Free Trial" → `app.deepcanyon.ai/signup`
- Secondary CTA: "Log In" → `app.deepcanyon.ai/login`
- Sticky CTA on mobile (bottom bar)
- Exit-intent popup (future, optional)
- All external links to app use `app.deepcanyon.ai` subdomain

### FR4: SEO

- Meta tags: title, description, og:image, twitter:card for every page
- Structured data: Organization, Product, FAQ schema
- Sitemap.xml and robots.txt
- Blog section (future) for long-tail SEO
- Target keywords: "AI trading platform", "autonomous trading", "AI trading bot", "automated wealth management"

### FR5: Legal Requirements

- Risk disclosure on every page with pricing/returns: "Trading involves substantial risk of loss and is not suitable for every investor."
- FINRA/SIPC disclosure: "Brokerage services provided by Alpaca Securities LLC, member FINRA/SIPC."
- "Deep Canyon is not a registered broker-dealer or investment advisor"
- Privacy policy covering KYC data, Alpaca relationship, data retention
- Terms of service covering subscription, cancellation, liability

## Non-Functional Requirements

- Page load < 2 seconds (Lighthouse performance > 90)
- Static export (no server-side rendering needed)
- Mobile-first responsive design
- Dark theme matching app aesthetic (#0a0a1a base)
- Works without JavaScript for core content (progressive enhancement)
- WCAG 2.1 AA accessibility

## Technical Constraints

- Separate Next.js project at `/marketing` in repo root
- Static export (`output: 'export'` in next.config)
- Deploy to DO Static Site or Cloudflare Pages
- Domain: deepcanyon.ai (root)
- No backend, no API calls, no database
- Analytics: Plausible or PostHog (privacy-friendly, no cookies)

## Acceptance Criteria

- [ ] Homepage loads in < 2 seconds on 3G
- [ ] All CTAs link to app.deepcanyon.ai/signup or /login
- [ ] Mobile responsive — all sections readable on 375px width
- [ ] Pricing tiers display correctly with AUM fee info
- [ ] Risk disclosures present on pricing section and footer
- [ ] FINRA/SIPC disclosure in footer
- [ ] SEO meta tags on all pages
- [ ] Lighthouse performance > 90, accessibility > 90
