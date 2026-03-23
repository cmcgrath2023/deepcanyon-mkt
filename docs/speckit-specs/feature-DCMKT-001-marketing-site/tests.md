# SPEC-DC-007: Tests

## Automated Tests

### Lighthouse CI (run on every deploy)
- Performance score > 90
- Accessibility score > 90
- Best Practices score > 90
- SEO score > 90
- CLS < 0.1, LCP < 2.5s, FID < 100ms

### Link Checker
- All internal links resolve (no 404s)
- All external links to app.deepcanyon.ai respond
- No broken anchor links (#features, #pricing, etc.)
- All images load (no broken src)

### Meta Tags
- Every page has unique <title>
- Every page has meta description
- Homepage has og:image, og:title, og:description
- Homepage has twitter:card meta
- Structured data validates (Google Rich Results Test)

### Responsive
- Screenshot comparison at 375px, 768px, 1024px, 1440px
- No horizontal scroll at any breakpoint
- Text readable at all sizes (minimum 14px body)
- CTAs tappable on mobile (minimum 44px touch target)

## Human Testing Checklist

### Navigation
- [ ] Logo links to / (homepage)
- [ ] "Features" scrolls to features section
- [ ] "Agents" scrolls to agent section
- [ ] "Pricing" scrolls to pricing section
- [ ] "FAQ" scrolls to FAQ section
- [ ] "Log In" opens app.deepcanyon.ai/login in same tab
- [ ] "Get Started" opens app.deepcanyon.ai/signup in same tab
- [ ] Nav is fixed on scroll
- [ ] Nav works on mobile (hamburger or simplified)

### Hero
- [ ] Headline renders correctly
- [ ] Pulse indicator animates
- [ ] Primary CTA → app.deepcanyon.ai/signup
- [ ] Secondary CTA → scrolls to agents section
- [ ] Fine print visible and readable

### Features
- [ ] All 6 feature cards display
- [ ] Icons render
- [ ] Responsive: 1 column mobile, 2 tablet, 3 desktop

### Agents
- [ ] All 5 agents display with correct colors
- [ ] Descriptions accurate
- [ ] CTA card at end links to signup

### How It Works
- [ ] 4 steps display in order
- [ ] Responsive layout works

### Pricing
- [ ] 3 tiers display correctly
- [ ] "Most Popular" badge on Pro
- [ ] AUM fee shown for Pro and Elite
- [ ] All CTAs work
- [ ] Fine print about trial and AUM visible

### FAQ
- [ ] All questions visible
- [ ] Answers readable
- [ ] Risk-related answers include appropriate disclaimers

### Footer
- [ ] Logo and tagline
- [ ] All section links work
- [ ] Legal links present (terms, privacy, risk)
- [ ] Contact info present
- [ ] Copyright year correct (2026)
- [ ] FINRA/SIPC disclosure text present
- [ ] Risk disclaimer present

### Mobile (test on real device)
- [ ] Page loads smoothly
- [ ] No horizontal scroll
- [ ] All sections readable
- [ ] CTAs are large enough to tap
- [ ] Pricing cards stack vertically
- [ ] Nav is usable

### SEO
- [ ] View page source — title tag present
- [ ] View page source — meta description present
- [ ] Share URL on Slack/Twitter — OG image appears
- [ ] Google "site:deepcanyon.ai" — pages indexed (after deploy)
