import {
  Bitcoin,
  DollarSign,
  TrendingUp,
  Gem,
  ArrowRight,
} from "lucide-react";

const markets = [
  {
    id: "crypto",
    label: "Crypto",
    headline: "Crypto that never stops trading",
    desc: "Bitcoin, Ethereum, Solana, and 15+ tokens — monitored and traded 24 hours a day, 7 days a week. The intelligence layer processes on-chain data, social sentiment, and macro catalysts in real time.",
    bullets: ["18 trading pairs", "24/7 execution", "On-chain + social signals"],
    icon: Bitcoin,
    accentColor: "#D4A843",
    bgColor: "#1a1d14",
    image: "/images/crypto-on-mobi-larger.avif",
    href: "/product/crypto",
  },
  {
    id: "forex",
    label: "Forex",
    headline: "Seven sessions. Zero gaps.",
    desc: "EUR/USD, GBP/USD, USD/JPY, and carry trade pairs. The system tracks central bank policy, interest rate differentials, and economic calendar events across London, New York, and Tokyo.",
    bullets: ["7 currency pairs", "Session momentum", "Central bank tracking"],
    icon: DollarSign,
    accentColor: "#5B8FA8",
    bgColor: "#0f1a1f",
    image: null,
    href: "/product/forex",
  },
  {
    id: "equities",
    label: "Equities & Options",
    headline: "Stocks and options with a 7-vote edge",
    desc: "260+ tickers scanned continuously. Every signal must pass a 7-indicator consensus. Options strategies layer on top for income and hedging.",
    bullets: ["260+ tickers", "Sector rotation", "Options strategies"],
    icon: TrendingUp,
    accentColor: "#408A71",
    bgColor: "#0f1f1a",
    image: null,
    href: "/product/equities-options",
  },
  {
    id: "commodities",
    label: "Commodities & Metals",
    headline: "Hard assets. Intelligent allocation.",
    desc: "Gold, silver, crude oil, natural gas, copper, and agriculture. Precious metals automatically activate as portfolio hedges when volatility spikes.",
    bullets: ["Auto-hedging", "VIX triggers", "Seasonal patterns"],
    icon: Gem,
    accentColor: "#8B7EAF",
    bgColor: "#161420",
    image: null,
    href: "/product/commodities-metals",
  },
];

export default function Markets() {
  return (
    <section id="markets" className="relative py-24 md:py-32 px-4 lg:px-10 bg-canyon-deep">
      <div className="max-w-7xl mx-auto">
        {/* Sticky header */}
        <div className="sticky top-16 bg-canyon-deep z-10 pb-8 pt-4">
          <p className="text-sm uppercase tracking-wider font-semibold text-canyon-light mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight font-serif">
            Every Market. One Intelligence Layer.
          </h2>
        </div>

        <div className="relative">
          {markets.map((m, i) => {
            const Icon = m.icon;
            const isLast = i === markets.length - 1;

            return (
              <div key={m.id}>
                <div
                  className="sticky top-[120px] w-full rounded-none mb-8"
                  style={{
                    zIndex: i + 1,
                    marginTop: i > 0 ? "-600px" : undefined,
                    backgroundColor: m.bgColor,
                  }}
                >
                  {/* Card header */}
                  <div
                    className="px-6 pt-6 pb-3 rounded-none"
                    style={{ backgroundColor: m.bgColor }}
                  >
                    <p
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: m.accentColor }}
                    >
                      {m.label}
                    </p>
                  </div>

                  {/* Card content */}
                  <div className="flex w-full flex-col md:flex-row items-center justify-between gap-x-5 gap-y-12 px-6 pb-9 pt-7 md:pb-14 md:pt-12 lg:px-20 min-h-[600px]">
                    {/* Text side */}
                    <div className="flex-1 max-w-lg">
                      <h3 className="text-2xl lg:text-4xl font-semibold text-white tracking-tight font-serif">
                        {m.headline}
                      </h3>
                      <p className="mt-4 text-base text-white/50 leading-relaxed">
                        {m.desc}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        {m.bullets.map((b) => (
                          <span
                            key={b}
                            className="text-xs font-medium px-3 py-1.5 rounded-full"
                            style={{
                              color: m.accentColor,
                              backgroundColor: `${m.accentColor}15`,
                            }}
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                      <a
                        href={m.href}
                        className="mt-8 inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150 group"
                        style={{ color: m.accentColor }}
                      >
                        Explore {m.label.toLowerCase()}
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform duration-150"
                        />
                      </a>
                    </div>

                    {/* Image/visual side */}
                    <div className="flex-1 flex items-center justify-center">
                      {m.image ? (
                        <div className="w-full max-w-[520px] rounded-2xl overflow-hidden">
                          <img
                            src={m.image}
                            alt={m.label}
                            className="w-full h-auto"
                          />
                        </div>
                      ) : (
                        <div
                          className="w-40 h-40 md:w-56 md:h-56 rounded-3xl flex items-center justify-center"
                          style={{ backgroundColor: `${m.accentColor}10` }}
                        >
                          <Icon
                            size={80}
                            strokeWidth={0.8}
                            style={{ color: m.accentColor, opacity: 0.3 }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Spacer for scroll effect */}
                {!isLast && <div className="h-[600px]" />}
              </div>
            );
          })}

          {/* Final spacer */}
          <div className="h-[200px]" />
        </div>
      </div>
    </section>
  );
}
