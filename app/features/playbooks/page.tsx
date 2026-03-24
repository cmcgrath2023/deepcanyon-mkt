import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Playbooks — Deep Canyon",
  description: "Choose from proven strategy playbooks or build your own. Define asset allocation, risk parameters, and trading style.",
  openGraph: {
    title: "Playbooks — Deep Canyon",
    description: "Choose from proven strategy playbooks or build your own.",
    images: [{ url: "https://deepcanyon.ai/Meta-OG.png", width: 1200, height: 630 }],
  },
};
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

export default function PlaybooksPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 bg-canyon-dark relative overflow-hidden">
          <div className="absolute w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(212,168,67,0.05) 0%, transparent 70%)", filter: "blur(120px)", top: "-200px", left: "50%", transform: "translateX(-50%)" }} />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-sand uppercase tracking-wider mb-4">Features</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] font-serif">Playbooks</h1>
            <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">Choose from proven strategy playbooks or build your own. Define your risk tolerance, target markets, and trading style.</p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="mx-auto max-w-4xl space-y-16">
            <div>
              <h2 className="text-2xl font-semibold text-white font-serif mb-4">Your Strategy, Your Rules</h2>
              <p className="text-white/50 leading-relaxed">Every Playbook defines how the AI trades for you — which markets to target, how much risk to take, when to be aggressive and when to be conservative. Start with a proven template or build from scratch.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Conservative Income", desc: "Low-risk, cash-secured puts and covered calls. Steady income generation with capital preservation." },
                { title: "Balanced Growth", desc: "Mix of equities, crypto, and forex. Moderate risk with sector rotation and trend following." },
                { title: "Aggressive Momentum", desc: "High-conviction trades across all markets. Larger positions, tighter stops, faster execution." },
                { title: "Custom", desc: "Define every parameter yourself — asset allocation, position sizing, risk limits, indicator weights, and more." },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl bg-canyon-dark">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-sm text-white/50 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-2xl bg-canyon-dark">
              <h2 className="text-2xl font-semibold text-white font-serif mb-4">What a Playbook Controls</h2>
              <ul className="space-y-3 text-white/50">
                {["Target markets and asset classes", "Position sizing and max allocation per trade", "Daily drawdown limits and circuit breakers", "Indicator weight overrides", "Trading session preferences", "Risk tolerance and confidence thresholds"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sand mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
