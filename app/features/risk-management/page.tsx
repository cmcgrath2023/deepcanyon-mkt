import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Risk Management — Deep Canyon",
  description: "Circuit breakers, trailing stops, position concentration limits, and strategy drift detection — all autonomous.",
  openGraph: {
    title: "Risk Management — Deep Canyon",
    description: "Autonomous risk management: circuit breakers, trailing stops, concentration limits, and drift detection.",
    images: [{ url: "https://deepcanyon.ai/dcan-meta.png", width: 1200, height: 630 }],
  },
};
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

export default function RiskManagementPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 bg-canyon-dark relative overflow-hidden">
          <div className="absolute w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(139,126,175,0.05) 0%, transparent 70%)", filter: "blur(120px)", top: "-200px", left: "50%", transform: "translateX(-50%)" }} />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-[#8B7EAF] uppercase tracking-wider mb-4">Features</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] font-serif">Risk Management</h1>
            <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">Circuit breakers, trailing stops, concentration limits, and drift detection — all autonomous, all the time.</p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="mx-auto max-w-4xl space-y-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Circuit Breakers", desc: "Trading halts automatically when daily drawdown hits your limit. No emotional override, no chasing losses. The system steps aside and waits for better conditions." },
                { title: "Trailing Stops", desc: "Winners are protected with dynamic trailing stops that lock in gains as price moves in your favor. Stops tighten automatically in high-volatility conditions." },
                { title: "Concentration Limits", desc: "No single position can exceed your defined allocation limit. The system prevents overexposure to any single ticker, sector, or asset class." },
                { title: "Drift Detection", desc: "When actual portfolio allocation drifts from your Playbook targets, the system detects it and triggers automatic recalibration trades." },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl bg-canyon-dark">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-white/50 mt-3 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-2xl bg-canyon-dark">
              <h2 className="text-2xl font-semibold text-white font-serif mb-4">Risk Is Not Optional</h2>
              <p className="text-white/50 leading-relaxed">Every trade has risk parameters defined before execution — stop loss, take profit, position size, and maximum portfolio impact. The system never takes a trade without knowing exactly how much it's willing to lose. This discipline is built into every layer of the platform.</p>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
