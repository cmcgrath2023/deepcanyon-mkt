import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

const bullets = [
  "Gold momentum: EMA 20/50 crossover trend-following system",
  "Silver volatility: RSI + Bollinger mean reversion plays",
  "Auto-hedge: gold positions activate when VIX > 25 or SPY drops > 3%",
  "Cattle-corn spread strategies and seasonal hog trading",
  "Copper-AI correlation tracking — semiconductor and data center demand signals",
];

export default function CommoditiesMetalsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 bg-canyon-dark relative overflow-hidden">
          <div className="absolute w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(139,126,175,0.06) 0%, transparent 70%)", filter: "blur(120px)", top: "-200px", left: "50%", transform: "translateX(-50%)" }} />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-[#8B7EAF] uppercase tracking-wider mb-4">What We Offer</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] font-serif">Hard Assets. Intelligent Allocation.</h1>
            <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">Gold, silver, crude oil, natural gas, copper, and agriculture. Precious metals automatically activate as portfolio hedges when volatility spikes.</p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="mx-auto max-w-4xl space-y-16">
            <div>
              <h2 className="text-2xl font-semibold text-white font-serif mb-4">How It Works</h2>
              <p className="text-white/50 leading-relaxed">The system tracks supply chain dynamics, geopolitical risk, seasonal patterns, and the copper-AI correlation thesis. When market stress rises, precious metals positions activate automatically as portfolio hedges — no manual intervention needed.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white font-serif mb-6">Key Capabilities</h2>
              <ul className="space-y-4">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B7EAF] mt-2 shrink-0" />
                    <span className="text-white/60">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { stat: "Auto", label: "Hedge Activation" },
                { stat: "VIX", label: "Trigger Monitoring" },
                { stat: "Seasonal", label: "Pattern Trading" },
              ].map((s) => (
                <div key={s.label} className="p-6 rounded-xl bg-canyon-dark text-center">
                  <div className="text-3xl font-bold text-[#8B7EAF]">{s.stat}</div>
                  <div className="text-sm text-white/40 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
