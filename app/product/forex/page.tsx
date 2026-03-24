import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Forex Trading — Deep Canyon",
  description: "7 currency pairs across London, New York, and Tokyo sessions. Session momentum, carry trades, and central bank tracking.",
  openGraph: { title: "Forex Trading — Deep Canyon", description: "7 currency pairs across global sessions with AI-powered execution.", images: [{ url: "https://deepcanyon.ai/Meta-OG.png", width: 1200, height: 630 }] },
};

const bullets = [
  "Session momentum strategies that capture London and NY open moves",
  "Carry trade evaluation — long high-yield, short low-yield currencies",
  "Automatic pre-positioning around FOMC, CPI, NFP, and ECB decisions",
  "Correlated pair detection prevents overexposure across similar trades",
  "Tight automated stops — bank winners at $50, cut losers at $20",
];

export default function ForexPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 bg-canyon-dark relative overflow-hidden">
          <div className="absolute w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(91,143,168,0.06) 0%, transparent 70%)", filter: "blur(120px)", top: "-200px", left: "50%", transform: "translateX(-50%)" }} />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-[#5B8FA8] uppercase tracking-wider mb-4">What We Offer</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] font-serif">Seven Sessions. Seven Pairs. Zero Gaps.</h1>
            <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">EUR/USD, GBP/USD, USD/JPY, and carry trade pairs like AUD/JPY and NZD/JPY — across London, New York, and Tokyo.</p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="mx-auto max-w-4xl space-y-16">
            <div>
              <h2 className="text-2xl font-semibold text-white font-serif mb-4">How It Works</h2>
              <p className="text-white/50 leading-relaxed">The system tracks central bank policy, interest rate differentials, and economic calendar events — then rides session-open volatility spikes across London, New York, and Tokyo. Carry trade evaluation identifies yield opportunities while correlated pair detection prevents overexposure.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white font-serif mb-6">Key Capabilities</h2>
              <ul className="space-y-4">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B8FA8] mt-2 shrink-0" />
                    <span className="text-white/60">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { stat: "7", label: "Currency Pairs" },
                { stat: "3", label: "Major Sessions" },
                { stat: "OANDA", label: "Execution Partner" },
              ].map((s) => (
                <div key={s.label} className="p-6 rounded-xl bg-canyon-dark text-center">
                  <div className="text-3xl font-bold text-[#5B8FA8]">{s.stat}</div>
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
