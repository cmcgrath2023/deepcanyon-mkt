import { ArrowRight } from "lucide-react";

const cards = [
  {
    label: "7-Vote Signal Engine",
    subtitle: "Consensus-driven execution",
    desc: "Every trade requires consensus from seven independent indicators — RSI, MACD, Bollinger Bands, EMA stack, momentum, mean reversion, and a neural ensemble. No single signal trades alone.",
    href: "/features/signal-engine",
    accent: "#BCFD49",
    solidColor: "#1a3d35",
    image: "/images/card-signal.jpg",
  },
  {
    label: "Bayesian Intelligence",
    subtitle: "AI that learns from every trade",
    desc: "Per-ticker win rates, indicator reliability, timing patterns, and market regime beliefs update continuously. The system that trades today is smarter than the one that traded yesterday.",
    href: "/features/bayesian-intelligence",
    accent: "#5B8FA8",
    solidColor: "#0f2420",
    image: "/images/card-bayesian.jpg",
  },
  {
    label: "Crypto",
    subtitle: "24/7 automated execution",
    desc: "Bitcoin, Ethereum, Solana, and 15+ tokens — monitored and traded around the clock. On-chain data, social sentiment, and macro catalysts processed in real time.",
    href: "/product/crypto",
    accent: "#D4A843",
    solidColor: "#285A48",
    image: "/images/crypto-on-mobi-larger.avif",
  },
  {
    label: "Equities & Options",
    subtitle: "260+ tickers with a 7-vote edge",
    desc: "The full US equity universe scanned continuously. Sector rotation, earnings analysis, and options strategies — covered calls, puts, and collars — all driven by consensus signals.",
    href: "/product/equities-options",
    accent: "#408A71",
    solidColor: "#091413",
    image: "/images/card-equities.jpg",
  },
  {
    label: "24/7 Global Coverage",
    subtitle: "Your portfolio never sleeps",
    desc: "Seven trading sessions across Sydney, Tokyo, London, Frankfurt, and New York. Crypto runs around the clock. Session handoffs are seamless — your portfolio is always active.",
    href: "/features/global-coverage",
    accent: "#C47A6E",
    solidColor: "#0f2420",
    image: "/images/card-global.jpg",
  },
];

export default function Markets() {
  return (
    <section id="markets" className="relative py-24 md:py-32 px-6 bg-canyon-deep">
      <div className="max-w-7xl mx-auto">
        {/* Header — scrolls away */}
        <div className="pb-12">
          <p className="text-sm uppercase tracking-wider font-semibold text-canyon-light mb-3">
            Platform
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight font-serif">
            Multi-Layered Trading Intelligence
          </h2>
        </div>

        <div className="relative">
          {/* Card 1 */}
          <div className="sticky top-[80px] w-full mb-8 overflow-hidden" style={{ zIndex: 1 }}>
            <CardInner card={cards[0]} />
          </div>
          <div className="h-[600px]" />

          {/* Card 2 */}
          <div className="sticky top-[110px] w-full -mt-[600px] mb-8 overflow-hidden" style={{ zIndex: 2 }}>
            <CardInner card={cards[1]} />
          </div>
          <div className="h-[600px]" />

          {/* Card 3 */}
          <div className="sticky top-[140px] w-full -mt-[600px] mb-8 overflow-hidden" style={{ zIndex: 3 }}>
            <CardInner card={cards[2]} />
          </div>
          <div className="h-[600px]" />

          {/* Card 4 */}
          <div className="sticky top-[170px] w-full -mt-[600px] mb-8 overflow-hidden" style={{ zIndex: 4 }}>
            <CardInner card={cards[3]} />
          </div>
          <div className="h-[600px]" />

          {/* Card 5 */}
          <div className="sticky top-[200px] w-full -mt-[600px] mb-8 overflow-hidden" style={{ zIndex: 5 }}>
            <CardInner card={cards[4]} />
          </div>

          <div className="h-[200px]" />
        </div>
      </div>
    </section>
  );
}

function CardInner({ card: c }: { card: (typeof cards)[0] }) {
  return (
    <div className="flex flex-col md:flex-row min-h-[600px]">
      {/* Left half — solid color with text */}
      <div
        className="md:w-1/2 px-8 py-12 md:px-16 md:py-16 flex flex-col justify-center"
        style={{ backgroundColor: c.solidColor }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-wider mb-4"
          style={{ color: c.accent }}
        >
          {c.subtitle}
        </p>
        <h3 className="text-2xl lg:text-4xl font-semibold text-white tracking-tight font-serif">
          {c.label}
        </h3>
        <p className="mt-4 text-base text-white/60 leading-relaxed max-w-md">
          {c.desc}
        </p>
        <a
          href={c.href}
          className="mt-8 inline-flex items-center gap-2 px-6 h-11 bg-lime text-canyon-deep font-semibold text-sm rounded-full hover:bg-lime-hover transition-colors duration-150 w-fit"
        >
          Learn more
          <ArrowRight size={16} />
        </a>
      </div>

      {/* Right half — full bleed image */}
      <div className="md:w-1/2 relative min-h-[300px] md:min-h-0 overflow-hidden">
        <img src={c.image} alt={c.label} className="absolute inset-0 w-full h-full object-cover" />
      </div>
    </div>
  );
}
