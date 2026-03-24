import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

export default function BayesianIntelligencePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 bg-canyon-dark relative overflow-hidden">
          <div className="absolute w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(91,143,168,0.05) 0%, transparent 70%)", filter: "blur(120px)", top: "-200px", left: "50%", transform: "translateX(-50%)" }} />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-[#5B8FA8] uppercase tracking-wider mb-4">Features</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] font-serif">Bayesian Intelligence</h1>
            <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">A self-improving AI that learns from every trade. Win rates, indicator reliability, and market regime beliefs update continuously.</p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="mx-auto max-w-4xl space-y-16">
            <div>
              <h2 className="text-2xl font-semibold text-white font-serif mb-4">Learning From Every Outcome</h2>
              <p className="text-white/50 leading-relaxed">After every trade — win or loss — the system updates its beliefs. Per-ticker win rates, indicator reliability scores, optimal entry timing, and market regime classifications all adjust in real time. The system that trades today is smarter than the one that traded yesterday.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Per-Ticker Win Rates", desc: "Each of 260+ tickers has its own performance history. The system knows which assets respond best to which strategies." },
                { title: "Indicator Reliability", desc: "Not all indicators perform equally across all conditions. Bayesian updates track which indicators are most predictive in current market regimes." },
                { title: "Timing Patterns", desc: "Session-specific performance data reveals when signals are most reliable — London open, NY close, overnight crypto." },
                { title: "Market Regime Detection", desc: "Bull, bear, sideways, high-vol, low-vol — the system classifies the current regime and adjusts confidence thresholds accordingly." },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl bg-canyon-dark">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-sm text-white/50 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-2xl bg-canyon-dark">
              <h2 className="text-2xl font-semibold text-white font-serif mb-4">Confidence Before Execution</h2>
              <p className="text-white/50 leading-relaxed">Every signal carries a Bayesian confidence score. The system won't execute a trade unless confidence exceeds the threshold set by your Playbook. This means the system naturally becomes more selective — and more accurate — over time.</p>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
