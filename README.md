# Deep Canyon — Marketing Site

Marketing website for [deepcanyon.ai](https://deepcanyon.ai), an autonomous trading intelligence platform.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS 4**
- **Three.js** — interactive globe hero
- **Framer Motion** — scroll animations

## Getting Started

```bash
npm install
npm run dev -- -p 3004
```

Open [http://localhost:3004](http://localhost:3004).

## Deployment

Static export via `next build` — deployable to Cloudflare Pages.

```bash
npm run build
```

Output goes to `/out`.

## Project Structure

```
app/             → Pages (features, markets, pricing, support)
components/      → Shared components (Nav, Footer, Globe, Hero, etc.)
public/          → Static assets (logos, icons)
docs/            → Spec documents
```
