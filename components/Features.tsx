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
    bg: "/images/hero-canyon.jpg",
  },
  {
    icon: Brain,
    title: "Bayesian Intelligence",
    subtitle: "AI that learns from every trade",
    desc: "The system learns from every trade. Per-ticker win rates, indicator reliability, timing patterns, and market regime beliefs update continuously — adjusting confidence before every execution.",
    href: "/features/bayesian-intelligence",
    accent: "#5B8FA8",
    bg: null,
  },
  {
    icon: BookOpen,
    title: "Playbooks",
    subtitle: "Your strategy, your rules",
    desc: "Choose from proven strategy playbooks or build your own. Each playbook defines asset allocation, risk parameters, and trading style — from conservative income to aggressive momentum.",
    href: "/features/playbooks",
    accent: "#D4A843",
    bg: null,
  },
  {
    icon: Activity,
    title: "24/7 Global Coverage",
    subtitle: "Your portfolio never sleeps",
    desc: "Seven trading sessions across Sydney, Tokyo, Hong Kong, London, Frankfurt, and New York. Crypto runs around the clock. Your portfolio never sleeps.",
    href: "/features/global-coverage",
    accent: "#C47A6E",
    bg: null,
  },
  {
    icon: ShieldCheck,
    title: "Autonomous Risk Management",
    subtitle: "Protection built into every layer",
    desc: "Circuit breakers halt trading on daily drawdown limits. Trailing stops protect winners. Position concentration limits prevent overexposure. Strategy drift detection triggers automatic recalibration.",
    href: "/features/risk-management",
    accent: "#8B7EAF",
    bg: null,
  },
  {
    icon: Gauge,
    title: "Full Transparency & Audit Trail",
    subtitle: "Every decision recorded",
    desc: "Every decision is recorded in a tamper-proof audit chain. See exactly why a signal fired, what confidence score it carried, and how the system learned from the outcome.",
    href: "/features/signal-engine",
    accent: "#408A71",
    bg: null,
  },
];

function FeatureSection({
  feature,
  reverse,
}: {
  feature: (typeof features)[0];
  reverse: boolean;
}) {
  const Icon = feature.icon;
  const hasBg = !!feature.bg;

  return (
    <section className="relative overflow-hidden">
      {/* Background image if present */}
      {hasBg && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${feature.bg})` }}
          />
          <div className="absolute inset-0 bg-canyon-deep/80" />
        </>
      )}

      <div className={`relative z-10 py-20 md:py-28 px-6 ${!hasBg ? "bg-canyon-deep" : ""}`}>
        <div
          className={`mx-auto max-w-7xl flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-12 lg:gap-20`}
        >
          {/* Visual side */}
          <div className="flex-1 w-full flex items-center justify-center">
            <div
              className="w-32 h-32 md:w-40 md:h-40 rounded-3xl flex items-center justify-center"
              style={{ backgroundColor: `${feature.accent}12` }}
            >
              <Icon
                size={64}
                strokeWidth={1}
                style={{ color: feature.accent }}
              />
            </div>
          </div>

          {/* Content side */}
          <div className="flex-1">
            <p
              className="text-sm font-semibold uppercase tracking-wider mb-3"
              style={{ color: feature.accent }}
            >
              {feature.subtitle}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight font-serif">
              {feature.title}
            </h2>
            <p className="mt-4 text-lg text-white/50 leading-relaxed max-w-lg">
              {feature.desc}
            </p>
            <a
              href={feature.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150 group"
              style={{ color: feature.accent }}
            >
              Learn more
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-150"
              />
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
      {/* Section header */}
      <section className="pt-24 md:pt-32 pb-8 px-6 bg-canyon-dark">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight font-serif">
            Multi-Layered Intelligence
          </h2>
          <p className="mt-4 text-canyon-sage/60 text-lg max-w-2xl mx-auto">
            Not a single algorithm. A coordinated intelligence system that
            researches, validates, executes, and learns — across every asset class.
          </p>
        </div>
      </section>

      {/* Individual feature sections */}
      {features.map((f, i) => (
        <FeatureSection key={f.title} feature={f} reverse={i % 2 === 1} />
      ))}

      {/* Feature tiles grid */}
      <section className="py-20 md:py-28 px-6 bg-canyon-dark">
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <a
                key={f.title}
                href={f.href}
                className="group p-8 rounded-2xl bg-canyon-deep hover:bg-canyon-mid/30 transition-colors duration-200"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${f.accent}15` }}
                >
                  <Icon size={20} style={{ color: f.accent }} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-lime transition-colors duration-200">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-white/40 leading-relaxed">
                  {f.desc.slice(0, 100)}...
                </p>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}
