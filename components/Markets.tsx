import { ArrowRight, LayoutGrid, Grid2x2Check, Brain, TrendingUp, Globe } from "lucide-react";

const cards = [
  {
    label: "7-Vote Signal Engine",
    subtitle: "Consensus-driven execution",
    desc: "Every trade requires consensus from seven independent indicators — RSI, MACD, Bollinger Bands, EMA stack, momentum, mean reversion, and a neural ensemble. No single signal trades alone.",
    href: "/features/signal-engine",
    accent: "#BCFD49",
    bgImage: "/images/candidates/08-rock-formations.jpg",
    icon1: LayoutGrid,
    icon2: Grid2x2Check,
  },
  {
    label: "Bayesian Intelligence",
    subtitle: "AI that learns from every trade",
    desc: "Per-ticker win rates, indicator reliability, timing patterns, and market regime beliefs update continuously. The system that trades today is smarter than the one that traded yesterday.",
    href: "/features/bayesian-intelligence",
    accent: "#5B8FA8",
    bgImage: "/images/candidates/04-sandstone-waves.jpg",
    svgImage: "/images/bayesian-brain.svg",
  },
  {
    label: "Crypto",
    subtitle: "24/7 automated execution",
    desc: "Bitcoin, Ethereum, Solana, and 15+ tokens — monitored and traded around the clock. On-chain data, social sentiment, and macro catalysts processed in real time.",
    href: "/product/crypto",
    accent: "#D4A843",
    bgImage: "/images/candidates/03-red-rock-sunlight.jpg",
    productImage: "/images/crypto-on-mobi-larger.avif",
  },
  {
    label: "Equities & Options",
    subtitle: "260+ tickers with a 7-vote edge",
    desc: "The full US equity universe scanned continuously. Sector rotation, earnings analysis, and options strategies — covered calls, puts, and collars — all driven by consensus signals.",
    href: "/product/equities-options",
    accent: "#408A71",
    bgImage: "/images/candidates/05-lower-antelope.jpg",
    icon1: TrendingUp,
  },
  {
    label: "24/7 Global Coverage",
    subtitle: "Your portfolio never sleeps",
    desc: "Seven trading sessions across Sydney, Tokyo, London, Frankfurt, and New York. Crypto runs around the clock. Session handoffs are seamless — your portfolio is always active.",
    href: "/features/global-coverage",
    accent: "#C47A6E",
    bgImage: "/images/candidates/07-antelope-arizona.jpg",
    icon1: Globe,
  },
];

export default function Markets() {
  return (
    <section id="markets" className="relative py-24 md:py-32 px-6 bg-canyon-deep">
      <div className="max-w-7xl mx-auto">
        {/* Sticky header */}
        <div className="sticky top-16 bg-canyon-deep z-10 pb-8 pt-4">
          <p className="text-sm uppercase tracking-wider font-semibold text-canyon-light mb-3">
            Platform
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight font-serif">
            Multi-Layered Trading Intelligence
          </h2>
        </div>

        <div className="relative">
          {cards.map((c, i) => {
            const isLast = i === cards.length - 1;
            const Icon1 = "icon1" in c ? c.icon1 : null;
            const Icon2 = "icon2" in c ? c.icon2 : null;

            return (
              <div key={c.label}>
                <div
                  className="sticky top-[120px] w-full overflow-hidden"
                  style={{
                    zIndex: i + 1,
                    marginTop: i > 0 ? "-600px" : "0",
                  }}
                >
                  {/* Canyon background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${c.bgImage})` }}
                  />
                  <div className="absolute inset-0 bg-canyon-deep/80" />

                  {/* Card header */}
                  <div className="relative z-10 px-8 pt-6 pb-3">
                    <p
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: c.accent }}
                    >
                      {c.subtitle}
                    </p>
                  </div>

                  {/* Card body */}
                  <div className="relative z-10 flex w-full flex-col md:flex-row items-center justify-between gap-x-10 gap-y-12 px-8 pb-12 pt-8 md:pb-16 md:pt-12 lg:px-20 min-h-[600px]">
                    {/* Text */}
                    <div className="flex-1 max-w-lg">
                      <h3 className="text-2xl lg:text-4xl font-semibold text-white tracking-tight font-serif">
                        {c.label}
                      </h3>
                      <p className="mt-4 text-base text-white/60 leading-relaxed">
                        {c.desc}
                      </p>
                      <a
                        href={c.href}
                        className="mt-8 inline-flex items-center gap-2 px-6 h-11 bg-lime text-canyon-deep font-semibold text-sm rounded-full hover:bg-lime-hover transition-colors duration-150"
                      >
                        Learn more
                        <ArrowRight size={16} />
                      </a>
                    </div>

                    {/* Visual side */}
                    <div className="flex-1 flex items-center justify-center">
                      {"svgImage" in c && c.svgImage ? (
                        <img
                          src={c.svgImage}
                          alt={c.label}
                          className="w-4/5 max-w-[420px] h-auto"
                        />
                      ) : "productImage" in c && c.productImage ? (
                        <img
                          src={c.productImage}
                          alt={c.label}
                          className="w-full max-w-[480px] h-auto"
                        />
                      ) : Icon1 && Icon2 ? (
                        <div className="flex items-center gap-6">
                          <Icon1 size={120} strokeWidth={0.6} style={{ color: c.accent }} className="opacity-60" />
                          <Icon2 size={120} strokeWidth={0.6} style={{ color: c.accent }} className="opacity-80" />
                        </div>
                      ) : Icon1 ? (
                        <Icon1 size={160} strokeWidth={0.5} style={{ color: c.accent }} className="opacity-50" />
                      ) : null}
                    </div>
                  </div>
                </div>

                {/* Spacer drives the scroll-to-stack effect */}
                {!isLast && <div className="h-[600px]" />}
              </div>
            );
          })}

          <div className="h-[200px]" />
        </div>
      </div>
    </section>
  );
}
