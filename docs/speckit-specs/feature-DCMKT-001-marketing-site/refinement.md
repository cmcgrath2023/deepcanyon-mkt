# SPEC-DC-007: Refinement

## Implementation Phases

### Phase 1: Project Setup + Homepage
- Create Next.js project at /marketing with static export
- Tailwind CSS 4 with dark theme config
- Copy logo and assets from mtwm-ui/public
- Build homepage with all sections (Hero, Features, Agents, Pricing, FAQ, Footer)
- Nav with links to app.deepcanyon.ai for login/signup

### Phase 2: Inner Pages
- /pricing — detailed tier comparison table, AUM fee calculator, annual vs monthly
- /about — mission, technology, team
- /security — SIPC, Alpaca relationship, encryption, data protection
- /legal/terms, /legal/privacy, /legal/risk — legal pages

### Phase 3: Polish + Assets
- Dashboard preview screenshot/mockup
- Open Graph image (1200x630) for social sharing
- Favicon and apple-touch-icon from deep-canyon.svg
- Mobile sticky CTA bar
- Smooth scroll for anchor links
- Animation on scroll (subtle fade-in, no heavy libraries)

### Phase 4: SEO + Analytics
- Meta tags on all pages
- Structured data (JSON-LD)
- Sitemap.xml generation
- robots.txt
- Plausible or PostHog analytics script (no cookies)

### Phase 5: Deploy
- Static export: `next build && next export`
- Deploy to DO Static Site (or Cloudflare Pages)
- Point deepcanyon.ai DNS to static site
- Point app.deepcanyon.ai to DO App Platform
- Verify all cross-domain links work

## Content Checklist

- [ ] Hero copy finalized
- [ ] Feature descriptions finalized
- [ ] Agent descriptions finalized
- [ ] Pricing tiers confirmed
- [ ] FAQ answers reviewed for accuracy
- [ ] Risk disclosure reviewed by legal (or at minimum follows Alpaca's template)
- [ ] Terms of service drafted
- [ ] Privacy policy drafted
- [ ] Dashboard screenshot captured from live app

## Quality Gates

- Lighthouse performance > 90
- Lighthouse accessibility > 90
- All links to app.deepcanyon.ai functional
- Mobile responsive at 375px, 768px, 1024px, 1440px
- No layout shift (CLS < 0.1)
- All images have alt text
- Risk disclosures present wherever returns/performance are mentioned
