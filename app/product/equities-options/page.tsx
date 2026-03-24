import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Equities & Options — Deep Canyon",
  description: "260+ tickers scanned continuously with 7-vote consensus. Sector rotation, options strategies, and earnings analysis.",
  openGraph: { title: "Equities & Options — Deep Canyon", description: "260+ tickers with 7-vote consensus trading.", images: [{ url: "https://deepcanyon.ai/dcan-meta.png", width: 1200, height: 630 }] },
};

const bullets = [
  "260+ tickers scanned continuously — most-actives, top movers, sector ETFs",
  "Sector rotation with automatic promotion and demotion based on win rates",
  "Options: cash-secured puts, covered calls, protective puts, and collars",
  "Earnings surprise detection and pre/post-announcement analysis",
  "Short selling support with inverse ETF hedging (SQQQ, SPXS, UVXY)",
];

export default function EquitiesOptionsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 bg-canyon-dark relative overflow-hidden">
          <div className="absolute w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(64,138,113,0.06) 0%, transparent 70%)", filter: "blur(120px)", top: "-200px", left: "50%", transform: "translateX(-50%)" }} />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-canyon-bright uppercase tracking-wider mb-4">What We Offer</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] font-serif">Stocks and Options With a 7-Vote Edge</h1>
            <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">The full US equity universe plus ETFs, scanned continuously across 260+ tickers. Options strategies layer on for income and hedging.</p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="mx-auto max-w-4xl space-y-16">
            <div>
              <h2 className="text-2xl font-semibold text-white font-serif mb-4">How It Works</h2>
              <p className="text-white/50 leading-relaxed">Every signal must pass a 7-indicator consensus — RSI, MACD, Bollinger Bands, EMA stack, momentum, mean reversion, and a neural network ensemble. Sector rotation algorithms automatically promote winning sectors and demote underperformers based on rolling win rates.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white font-serif mb-6">Key Capabilities</h2>
              <ul className="space-y-4">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-canyon-bright mt-2 shrink-0" />
                    <span className="text-white/60">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { stat: "260+", label: "Tickers Scanned" },
                { stat: "7/7", label: "Vote Consensus" },
                { stat: "Alpaca", label: "Execution Partner" },
              ].map((s) => (
                <div key={s.label} className="p-6 rounded-xl bg-canyon-dark text-center">
                  <div className="text-3xl font-bold text-canyon-bright">{s.stat}</div>
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
