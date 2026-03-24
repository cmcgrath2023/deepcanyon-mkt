import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Crypto Trading — Deep Canyon",
  description: "24/7 automated crypto execution across 18 pairs. Bitcoin, Ethereum, Solana and 15+ tokens with AI-powered intelligence.",
  openGraph: { title: "Crypto Trading — Deep Canyon", description: "24/7 automated crypto execution across 18 pairs.", images: [{ url: "https://deepcanyon.ai/dcan-meta.png", width: 1200, height: 630 }] },
};

const bullets = [
  "24/7 automated execution across 18 trading pairs",
  "Real-time sentiment analysis from social and on-chain signals",
  "Bayesian confidence scoring — learns which tokens win and which don't",
  "Adaptive position sizing that tightens in high-volatility regimes",
  "Circuit breakers halt trading automatically on drawdown limits",
];

export default function CryptoPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 bg-canyon-dark relative overflow-hidden">
          <div className="absolute w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(212,168,67,0.06) 0%, transparent 70%)", filter: "blur(120px)", top: "-200px", left: "50%", transform: "translateX(-50%)" }} />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-[#D4A843] uppercase tracking-wider mb-4">What We Offer</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] font-serif">Crypto That Never Stops Trading</h1>
            <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">Bitcoin, Ethereum, Solana, and 15+ tokens — monitored and traded 24 hours a day, 7 days a week.</p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="mx-auto max-w-4xl space-y-16">
            <div>
              <h2 className="text-2xl font-semibold text-white font-serif mb-4">How It Works</h2>
              <p className="text-white/50 leading-relaxed">The intelligence layer processes on-chain data, social sentiment, and macro catalysts in real time to find entries and manage risk while you sleep. Every crypto trade passes through the same 7-vote consensus engine as equities — no shortcuts.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white font-serif mb-6">Key Capabilities</h2>
              <ul className="space-y-4">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] mt-2 shrink-0" />
                    <span className="text-white/60">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { stat: "18", label: "Trading Pairs" },
                { stat: "24/7", label: "Execution" },
                { stat: "$5/$3", label: "Per Trade (Core/Pro)" },
              ].map((s) => (
                <div key={s.label} className="p-6 rounded-xl bg-canyon-dark text-center">
                  <div className="text-3xl font-bold text-[#D4A843]">{s.stat}</div>
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
