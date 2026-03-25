import { ArrowRight } from "lucide-react";

const cards = [
  {
    label: "7-Vote Signal Engine",
    subtitle: "Consensus-driven execution",
    desc: "Every trade requires consensus from seven independent indicators — RSI, MACD, Bollinger Bands, EMA stack, momentum, mean reversion, and a neural ensemble. No single signal trades alone.",
    image: "/images/seven-vote-grid.svg",
    href: "/features/signal-engine",
    accent: "#BCFD49",
  },
  {
    label: "Bayesian Intelligence",
    subtitle: "AI that learns from every trade",
    desc: "Per-ticker win rates, indicator reliability, timing patterns, and market regime beliefs update continuously. The system that trades today is smarter than the one that traded yesterday.",
    image: "/images/bayesian-brain.svg",
    href: "/features/bayesian-intelligence",
    accent: "#5B8FA8",
  },
  {
    label: "Crypto",
    subtitle: "24/7 automated execution",
    desc: "Bitcoin, Ethereum, Solana, and 15+ tokens — monitored and traded around the clock. On-chain data, social sentiment, and macro catalysts processed in real time.",
    image: "/images/crypto-on-mobi-larger.avif",
    href: "/product/crypto",
    accent: "#D4A843",
  },
  {
    label: "Equities & Options",
    subtitle: "260+ tickers with a 7-vote edge",
    desc: "The full US equity universe scanned continuously. Sector rotation, earnings analysis, and options strategies — covered calls, puts, and collars — all driven by consensus signals.",
    image: "/images/stock-charts.jpg",
    href: "/product/equities-options",
    accent: "#408A71",
  },
  {
    label: "24/7 Global Coverage",
    subtitle: "Your portfolio never sleeps",
    desc: "Seven trading sessions across Sydney, Tokyo, London, Frankfurt, and New York. Crypto runs around the clock. Session handoffs are seamless — your portfolio is always active.",
    image: "/images/intelligence-layers.svg",
    href: "/features/global-coverage",
    accent: "#C47A6E",
  },
];

export default function Markets() {
  return (
    <section id="markets" className="py-20 md:py-28 px-6">
      <div className="mx-auto max-w-7xl space-y-6">
        {cards.map((c, i) => {
          const reverse = i % 2 === 1;
          const isSvg = c.image.endsWith(".svg");

          return (
            <div
              key={c.label}
              className={`flex flex-col ${
                reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-stretch rounded-2xl overflow-hidden bg-canyon-dark`}
            >
              {/* Image side */}
              <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[480px] bg-canyon-deep flex items-center justify-center overflow-hidden">
                {isSvg ? (
                  <img
                    src={c.image}
                    alt={c.label}
                    className="w-4/5 max-w-[400px] h-auto"
                  />
                ) : (
                  <img
                    src={c.image}
                    alt={c.label}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Text side */}
              <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <p
                  className="text-sm font-semibold uppercase tracking-wider mb-3"
                  style={{ color: c.accent }}
                >
                  {c.subtitle}
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight font-serif">
                  {c.label}
                </h2>
                <p className="mt-4 text-base text-white/50 leading-relaxed">
                  {c.desc}
                </p>
                <div className="mt-8">
                  <a
                    href={c.href}
                    className="inline-flex items-center gap-2 px-6 h-11 bg-lime text-canyon-deep font-semibold text-sm rounded-full hover:bg-lime-hover transition-colors duration-150"
                  >
                    Learn more
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
