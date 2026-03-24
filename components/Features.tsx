import {
  Layers,
  Brain,
  ShieldCheck,
  Activity,
  BookOpen,
  Gauge,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "7-Vote Signal Engine",
    subtitle: "Consensus-driven execution",
    desc: "Every trade requires consensus. RSI, MACD, Bollinger Bands, EMA stack, momentum, mean reversion, and a neural ensemble (LSTM+GRU) must all agree before a signal fires. No single indicator trades alone.",
    href: "/features/signal-engine",
    accent: "#BCFD49",
    image: "/images/features/signal-engine.jpg",
  },
  {
    icon: Brain,
    title: "Bayesian Intelligence",
    subtitle: "AI that learns from every trade",
    desc: "The system learns from every trade. Per-ticker win rates, indicator reliability, timing patterns, and market regime beliefs update continuously — adjusting confidence before every execution.",
    href: "/features/bayesian-intelligence",
    accent: "#5B8FA8",
    image: "/images/features/bayesian.jpg",
  },
  {
    icon: BookOpen,
    title: "Playbooks",
    subtitle: "Your strategy, your rules",
    desc: "Choose from proven strategy playbooks or build your own. Each playbook defines asset allocation, risk parameters, and trading style — from conservative income to aggressive momentum.",
    href: "/features/playbooks",
    accent: "#D4A843",
    image: "/images/features/playbooks.jpg",
  },
  {
    icon: Activity,
    title: "24/7 Global Coverage",
    subtitle: "Your portfolio never sleeps",
    desc: "Seven trading sessions across Sydney, Tokyo, Hong Kong, London, Frankfurt, and New York. Crypto runs around the clock. Your portfolio never sleeps.",
    href: "/features/global-coverage",
    accent: "#C47A6E",
    image: "/images/features/global-coverage.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Autonomous Risk Management",
    subtitle: "Protection built into every layer",
    desc: "Circuit breakers halt trading on daily drawdown limits. Trailing stops protect winners. Position concentration limits prevent overexposure. Strategy drift detection triggers automatic recalibration.",
    href: "/features/risk-management",
    accent: "#8B7EAF",
    image: "/images/features/risk-management.jpg",
  },
  {
    icon: Gauge,
    title: "Full Transparency & Audit Trail",
    subtitle: "Every decision recorded",
    desc: "Every decision is recorded in a tamper-proof audit chain. See exactly why a signal fired, what confidence score it carried, and how the system learned from the outcome.",
    href: "/features/signal-engine",
    accent: "#408A71",
    image: "/images/features/transparency.jpg",
  },
];

function FeatureSection({
  feature,
  reverse,
}: {
  feature: (typeof features)[0];
  reverse: boolean;
}) {
  return (
    <section className="py-12 md:py-16 px-6">
      <div
        className={`mx-auto max-w-7xl flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-stretch gap-0 rounded-2xl overflow-hidden bg-canyon-dark`}
      >
        {/* Image side — full height */}
        <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[480px]">
          <img
            src={feature.image}
            alt={feature.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text side */}
        <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <p
            className="text-sm font-semibold uppercase tracking-wider mb-3"
            style={{ color: feature.accent }}
          >
            {feature.subtitle}
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight font-serif">
            {feature.title}
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">
            {feature.desc}
          </p>
          <div className="mt-8">
            <a
              href={feature.href}
              className="inline-flex items-center gap-2 px-6 h-11 bg-lime text-canyon-deep font-semibold text-sm rounded-full hover:bg-lime-hover transition-colors duration-150"
            >
              Learn more
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Features() {
  return (
    <>
      {/* Feature sections — alternating image/text */}
      {features.map((f, i) => (
        <FeatureSection key={f.title} feature={f} reverse={i % 2 === 1} />
      ))}
    </>
  );
}
