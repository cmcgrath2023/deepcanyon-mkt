import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import {
  Bitcoin,
  DollarSign,
  TrendingUp,
  Gem,
  ArrowRight,
} from "lucide-react";

const markets = [
  {
    icon: Bitcoin,
    title: "Crypto",
    slug: "crypto",
    desc: "Bitcoin, Ethereum, Solana, and 15+ tokens — monitored and traded 24 hours a day, 7 days a week.",
    accent: "#D4A843",
    stats: ["18 trading pairs", "24/7 execution", "On-chain + social signals"],
  },
  {
    icon: DollarSign,
    title: "Forex",
    slug: "forex",
    desc: "EUR/USD, GBP/USD, USD/JPY, and carry trade pairs across London, New York, and Tokyo sessions.",
    accent: "#5B8FA8",
    stats: ["7 currency pairs", "Session momentum", "Central bank tracking"],
  },
  {
    icon: TrendingUp,
    title: "Equities & Options",
    slug: "equities-options",
    desc: "The full US equity universe scanned continuously. Options strategies layer on for income and hedging.",
    accent: "#408A71",
    stats: ["260+ tickers", "Sector rotation", "Options strategies"],
  },
  {
    icon: Gem,
    title: "Commodities & Metals",
    slug: "commodities-metals",
    desc: "Gold, silver, crude oil, natural gas, copper, and agriculture. Precious metals activate as portfolio hedges.",
    accent: "#8B7EAF",
    stats: ["Hard assets", "Auto-hedging", "Seasonal patterns"],
  },
];

export default function MarketsPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 bg-canyon-dark relative overflow-hidden">
          <div
            className="absolute w-[800px] h-[800px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(64,138,113,0.06) 0%, transparent 70%)",
              filter: "blur(120px)",
              top: "-200px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium text-canyon-light uppercase tracking-wider mb-4">
              What We Do
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] font-serif">
              Every Market.
              <br />
              One Intelligence Layer.
            </h1>
            <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              The same multi-layered system — 7-vote signal engine, Bayesian
              learning, autonomous risk management — applied across every asset class.
            </p>
          </div>
        </section>

        {/* Market cards */}
        <section className="py-20 md:py-28 px-6">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
            {markets.map((m) => (
              <a
                key={m.slug}
                href={`/markets/${m.slug}`}
                className="group relative p-10 rounded-2xl bg-canyon-dark hover:bg-canyon-mid/30 transition-colors duration-200 overflow-hidden"
              >
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 80% 80%, ${m.accent}08, transparent 60%)`,
                  }}
                />
                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${m.accent}15` }}
                  >
                    <m.icon size={26} style={{ color: m.accent }} />
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold text-white group-hover:text-lime transition-colors duration-200">
                    {m.title}
                  </h2>
                  <p className="mt-3 text-sm text-white/50 leading-relaxed">
                    {m.desc}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {m.stats.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-medium px-3 py-1.5 rounded-full"
                        style={{
                          color: m.accent,
                          backgroundColor: `${m.accent}12`,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium group-hover:gap-2.5 transition-all duration-200"
                    style={{ color: m.accent }}
                  >
                    Explore {m.title.toLowerCase()}
                    <ArrowRight size={14} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
