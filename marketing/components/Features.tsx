import {
  Layers,
  Brain,
  ShieldCheck,
  Activity,
  BookOpen,
  Gauge,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "7-Vote Signal Engine",
    desc: "Every trade requires consensus. RSI, MACD, Bollinger Bands, EMA stack, momentum, mean reversion, and a neural ensemble (LSTM+GRU) must all agree before a signal fires. No single indicator trades alone.",
  },
  {
    icon: Brain,
    title: "Bayesian Intelligence",
    desc: "The system learns from every trade. Per-ticker win rates, indicator reliability, timing patterns, and market regime beliefs update continuously — adjusting confidence before every execution.",
  },
  {
    icon: BookOpen,
    title: "Playbooks",
    desc: "Choose from proven strategy playbooks or build your own. Each playbook defines asset allocation, risk parameters, and trading style — from conservative income to aggressive momentum.",
  },
  {
    icon: Activity,
    title: "24/7 Global Coverage",
    desc: "Seven trading sessions across Sydney, Tokyo, Hong Kong, London, Frankfurt, and New York. Crypto runs around the clock. Your portfolio never sleeps.",
  },
  {
    icon: ShieldCheck,
    title: "Autonomous Risk Management",
    desc: "Circuit breakers halt trading on daily drawdown limits. Trailing stops protect winners. Position concentration limits prevent overexposure. Strategy drift detection triggers automatic recalibration.",
  },
  {
    icon: Gauge,
    title: "Full Transparency & Audit Trail",
    desc: "Every decision is recorded in a tamper-proof audit chain. See exactly why a signal fired, what confidence score it carried, and how the system learned from the outcome.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 px-6 bg-canyon-dark">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center tracking-tight font-serif">
          Multi-Layered Intelligence
        </h2>
        <p className="mt-4 text-canyon-sage/60 text-center text-lg max-w-2xl mx-auto">
          Not a single algorithm. A coordinated intelligence system that
          researches, validates, executes, and learns — across every asset class.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-8 rounded-2xl bg-canyon-deep border border-canyon-green/30"
            >
              <div className="w-10 h-10 rounded-lg bg-canyon-bright/15 flex items-center justify-center">
                <f.icon size={20} className="text-canyon-light" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-canyon-sage/60 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
