import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

const indicators = [
  { name: "RSI", desc: "Relative Strength Index — identifies overbought and oversold conditions" },
  { name: "MACD", desc: "Moving Average Convergence Divergence — tracks momentum shifts and trend reversals" },
  { name: "Bollinger Bands", desc: "Measures volatility and mean reversion opportunities" },
  { name: "EMA Stack", desc: "Exponential Moving Average crossover system — confirms trend direction" },
  { name: "Momentum", desc: "Rate of change analysis — validates strength behind price moves" },
  { name: "Mean Reversion", desc: "Statistical deviation scoring — catches overextended moves" },
  { name: "Neural Ensemble", desc: "LSTM + GRU deep learning models — pattern recognition across timeframes" },
];

export default function SignalEnginePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 bg-canyon-dark relative overflow-hidden">
          <div className="absolute w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(188,253,73,0.04) 0%, transparent 70%)", filter: "blur(120px)", top: "-200px", left: "50%", transform: "translateX(-50%)" }} />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-lime uppercase tracking-wider mb-4">Features</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] font-serif">7-Vote Signal Engine</h1>
            <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">Every trade requires consensus from seven independent indicators. No single signal trades alone — ever.</p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-semibold text-white font-serif mb-4">How It Works</h2>
            <p className="text-white/50 leading-relaxed mb-12">Before any trade executes, all seven indicators must independently agree on direction. This consensus approach eliminates false signals and dramatically reduces drawdowns compared to single-indicator systems.</p>

            <h2 className="text-2xl font-semibold text-white font-serif mb-8">The Seven Votes</h2>
            <div className="space-y-4">
              {indicators.map((ind, i) => (
                <div key={ind.name} className="flex gap-4 p-5 rounded-xl bg-canyon-dark">
                  <span className="text-lime font-mono font-bold text-sm mt-0.5">{i + 1}</span>
                  <div>
                    <h3 className="text-white font-semibold">{ind.name}</h3>
                    <p className="text-sm text-white/50 mt-1">{ind.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-canyon-dark">
              <h2 className="text-2xl font-semibold text-white font-serif mb-4">Why Consensus Matters</h2>
              <p className="text-white/50 leading-relaxed">A single indicator can generate dozens of false signals per day. By requiring all seven to agree, the system filters out noise and only acts on high-conviction opportunities. The result: fewer trades, higher win rates, and better risk-adjusted returns.</p>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
