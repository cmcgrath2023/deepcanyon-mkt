import { UserPlus, ShieldCheck, Sliders, Zap } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: UserPlus,
    title: "Sign Up & Verify",
    desc: "Create your account and complete a 2-minute identity verification. Your brokerage account is held with Alpaca Securities, member FINRA/SIPC.",
    accent: "#BCFD49",
  },
  {
    num: "02",
    icon: Sliders,
    title: "Choose a Playbook",
    desc: "Pick a proven strategy playbook or configure your own — set your risk tolerance, target markets, position sizing, and trading style.",
    accent: "#D4A843",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Fund Your Account",
    desc: "Link your bank and deposit from $500. Your funds are held securely at Alpaca. Deep Canyon never has direct access to your capital.",
    accent: "#5B8FA8",
  },
  {
    num: "04",
    icon: Zap,
    title: "Intelligence Activates",
    desc: "The system starts scanning 260+ tickers, generating 7-vote consensus signals, and executing trades. Every decision is logged and transparent.",
    accent: "#408A71",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center tracking-tight font-serif">
          How It Works
        </h2>
        <p className="mt-4 text-canyon-sage/60 text-center text-lg max-w-2xl mx-auto">
          From signup to autonomous trading in under 10 minutes.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="relative p-8 rounded-2xl bg-canyon-dark border border-canyon-green/20 hover:border-canyon-green/40 transition-colors duration-200"
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className="text-xs font-mono font-bold px-2.5 py-1 rounded-full"
                  style={{ color: s.accent, backgroundColor: `${s.accent}15` }}
                >
                  {s.num}
                </span>
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${s.accent}12` }}
                >
                  <s.icon size={20} style={{ color: s.accent }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-white/45 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
