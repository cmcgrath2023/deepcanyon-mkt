import { UserPlus, ShieldCheck, Sliders, Zap } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: UserPlus,
    title: "Sign Up & Verify",
    desc: "Create your account and complete a 2-minute identity verification. Your brokerage account is held with Alpaca Securities, member FINRA/SIPC.",
  },
  {
    num: "02",
    icon: Sliders,
    title: "Choose a Playbook",
    desc: "Pick a proven strategy playbook or configure your own — set your risk tolerance, target markets, position sizing, and trading style.",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Fund Your Account",
    desc: "Link your bank and deposit from $500. Your funds are held securely at Alpaca. Deep Canyon never has direct access to your capital.",
  },
  {
    num: "04",
    icon: Zap,
    title: "Intelligence Activates",
    desc: "The system starts scanning 260+ tickers, generating 7-vote consensus signals, and executing trades. Every decision is logged and transparent.",
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

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="relative">
              <span className="text-sand text-sm font-mono font-bold">
                {s.num}
              </span>
              <div className="mt-4 w-10 h-10 rounded-lg bg-canyon-bright/15 flex items-center justify-center">
                <s.icon size={20} className="text-canyon-light" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-canyon-sage/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
