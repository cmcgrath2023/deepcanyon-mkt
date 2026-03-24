import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Platform Features — Deep Canyon",
  description: "Multi-layered trading intelligence: 7-vote signal engine, Bayesian learning, Playbooks, 24/7 global coverage, and autonomous risk management.",
  openGraph: { title: "Platform Features — Deep Canyon", description: "Multi-layered trading intelligence across every asset class.", images: [{ url: "https://deepcanyon.ai/Meta-OG.png", width: 1200, height: 630 }] },
};
import {
  Layers,
  Brain,
  BookOpen,
  Activity,
  ShieldCheck,
  Gauge,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "7-Vote Signal Engine",
    slug: "signal-engine",
    desc: "Every trade requires consensus from seven independent indicators before execution. No single signal trades alone.",
    accent: "#BCFD49",
  },
  {
    icon: Brain,
    title: "Bayesian Intelligence",
    slug: "bayesian-intelligence",
    desc: "The system learns from every trade. Win rates, indicator reliability, and market regime beliefs update continuously.",
    accent: "#5B8FA8",
  },
  {
    icon: BookOpen,
    title: "Playbooks",
    slug: "playbooks",
    desc: "Choose from proven strategy playbooks or build your own — define risk, markets, and trading style.",
    accent: "#D4A843",
  },
  {
    icon: Activity,
    title: "24/7 Global Coverage",
    slug: "global-coverage",
    desc: "Seven trading sessions across Sydney, Tokyo, London, Frankfurt, and New York. Crypto runs around the clock.",
    accent: "#C47A6E",
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    slug: "risk-management",
    desc: "Circuit breakers, trailing stops, concentration limits, and drift detection — all autonomous.",
    accent: "#8B7EAF",
  },
  {
    icon: Gauge,
    title: "Full Transparency",
    slug: "signal-engine",
    desc: "Every decision recorded in a tamper-proof audit chain. See exactly why a signal fired and what happened next.",
    accent: "#408A71",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 bg-canyon-dark relative overflow-hidden">
          <div
            className="absolute w-[800px] h-[800px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(188,253,73,0.04) 0%, transparent 70%)",
              filter: "blur(120px)",
              top: "-200px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium text-lime uppercase tracking-wider mb-4">
              Platform Features
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] font-serif">
              Multi-Layered
              <br />
              Trading Intelligence
            </h1>
            <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              Not a single algorithm. A coordinated intelligence system that
              researches, validates, executes, and learns — across every asset class.
            </p>
          </div>
        </section>

        {/* Feature grid */}
        <section className="py-20 md:py-28 px-6">
          <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <a
                key={f.title}
                href={`/features/${f.slug}`}
                className="group p-8 rounded-2xl bg-canyon-dark hover:bg-canyon-mid/40 transition-colors duration-200"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${f.accent}15` }}
                >
                  <f.icon size={22} style={{ color: f.accent }} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white group-hover:text-lime transition-colors duration-200">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-white/50 leading-relaxed">
                  {f.desc}
                </p>
                <div
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium group-hover:gap-2.5 transition-all duration-200"
                  style={{ color: f.accent }}
                >
                  Learn more
                  <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
