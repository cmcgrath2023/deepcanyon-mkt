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
    subheadline:
      "Bitcoin, Ethereum, Solana, and 15+ tokens — monitored and traded 24 hours a day, 7 days a week. The intelligence layer processes on-chain data, social sentiment, and macro catalysts in real time to find entries and manage risk while you sleep.",
    bullets: [
      "24/7 automated execution across 18 trading pairs",
      "Real-time sentiment analysis from social and on-chain signals",
      "Bayesian confidence scoring — learns which tokens win and which don't",
      "Adaptive position sizing that tightens in high-volatility regimes",
      "Circuit breakers halt trading automatically on drawdown limits",
    ],
    icon: Bitcoin,
    accentColor: "#D4A843",
    bgAccent: "rgba(212,168,67,0.06)",
  },
  {
    id: "forex",
    label: "Forex",
    headline: "Seven sessions. Seven currency pairs. Zero gaps.",
    subheadline:
      "EUR/USD, GBP/USD, USD/JPY, and carry trade pairs like AUD/JPY and NZD/JPY. The system tracks central bank policy, interest rate differentials, and economic calendar events — then rides session-open volatility spikes across London, New York, and Tokyo.",
    bullets: [
      "Session momentum strategies that capture London and NY open moves",
      "Carry trade evaluation — long high-yield, short low-yield currencies",
      "Automatic pre-positioning around FOMC, CPI, NFP, and ECB decisions",
      "Correlated pair detection prevents overexposure across similar trades",
      "Tight automated stops — bank winners at $50, cut losers at $20",
    ],
    icon: DollarSign,
    accentColor: "#5B8FA8",
    bgAccent: "rgba(91,143,168,0.06)",
  },
  {
    id: "equities",
    label: "Equities & Options",
    headline: "Stocks and options with a 7-vote edge",
    subheadline:
      "The full US equity universe plus ETFs, scanned continuously across 260+ tickers. Every signal must pass a 7-indicator consensus — RSI, MACD, Bollinger Bands, EMA stack, momentum, mean reversion, and a neural network ensemble. Options strategies layer on top for income and hedging.",
    bullets: [
      "260+ tickers scanned continuously — most-actives, top movers, sector ETFs",
      "Sector rotation with automatic promotion and demotion based on win rates",
      "Options: cash-secured puts, covered calls, protective puts, and collars",
      "Earnings surprise detection and pre/post-announcement analysis",
      "Short selling support with inverse ETF hedging (SQQQ, SPXS, UVXY)",
    ],
    icon: TrendingUp,
    accentColor: "#408A71",
    bgAccent: "rgba(64,138,113,0.06)",
  },
  {
    id: "commodities",
    label: "Commodities & Metals",
    headline: "Hard assets. Intelligent allocation.",
    subheadline:
      "Gold, silver, crude oil, natural gas, copper, cattle, corn, and more. The system tracks supply chain dynamics, geopolitical risk, seasonal patterns, and the copper-AI correlation thesis. Precious metals automatically activate as portfolio hedges when volatility spikes.",
    bullets: [
      "Gold momentum: EMA 20/50 crossover trend-following system",
      "Silver volatility: RSI + Bollinger mean reversion plays",
      "Auto-hedge: gold positions activate when VIX > 25 or SPY drops > 3%",
      "Cattle-corn spread strategies and seasonal hog trading",
      "Copper-AI correlation tracking — semiconductor and data center demand signals",
    ],
    icon: Gem,
    accentColor: "#8B7EAF",
    bgAccent: "rgba(139,126,175,0.06)",
  },
];

function MarketSection({
  market,
  reverse,
}: {
  market: (typeof markets)[0];
  reverse: boolean;
}) {
  const Icon = market.icon;

  return (
    <div
      className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center`}
    >
      {/* Visual side */}
      <div className="flex-1 w-full">
        <div className="relative rounded-2xl border border-canyon-green/30 bg-canyon-dark p-12 flex items-center justify-center aspect-[4/3] overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${market.bgAccent} 0%, transparent 70%)`,
            }}
          />
          <Icon
            size={120}
            strokeWidth={0.8}
            className="relative opacity-20"
            style={{ color: market.accentColor }}
          />
          <div
            className="absolute bottom-6 left-6 text-xs font-mono font-bold uppercase tracking-widest"
            style={{ color: market.accentColor }}
          >
            {market.label}
          </div>
        </div>
      </div>

      {/* Content side */}
      <div className="flex-1">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
          style={{
            color: market.accentColor,
            backgroundColor: `${market.accentColor}15`,
            borderColor: `${market.accentColor}25`,
            borderWidth: "1px",
          }}
        >
          <Icon size={14} />
          {market.label}
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight font-serif">
          {market.headline}
        </h2>

        <p className="mt-4 text-lg text-canyon-sage/70 leading-relaxed">
          {market.subheadline}
        </p>

        <ul className="mt-8 space-y-4">
          {market.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <div
                className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: market.accentColor }}
              />
              <span className="text-sm text-canyon-sage/60">{b}</span>
            </li>
          ))}
        </ul>

        <a
          href={`https://app.deepcanyon.ai/signup`}
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150 group"
          style={{ color: market.accentColor }}
        >
          Start trading {market.label.toLowerCase()}
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform duration-150"
          />
        </a>
      </div>
    </div>
  );
}

export default function Markets() {
  return (
    <section id="markets" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight font-serif">
            Every Market. One Intelligence Layer.
          </h2>
          <p className="mt-4 text-lg text-canyon-sage/60 max-w-3xl mx-auto">
            The same multi-layered system — 7-vote signal engine, Bayesian
            learning, autonomous risk management — applied across every asset
            class. Research, analysis, and execution handled for you.
          </p>
        </div>

        <div className="space-y-32">
          {markets.map((m, i) => (
            <MarketSection key={m.id} market={m} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
