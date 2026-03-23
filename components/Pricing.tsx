"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";

const tiers = [
  {
    name: "Core",
    slug: "core",
    monthly: 29,
    annual: 24,
    aum: null,
    tradeFee: "$5",
    featured: false,
    cta: "Start 3-Day Free Trial",
    features: [
      { text: "AI-powered trading intelligence", included: true },
      { text: "US equities & crypto", included: true },
      { text: "5 trades per day", included: true },
      { text: "$5 per crypto trade", included: true },
      { text: "Daily market briefing", included: true },
      { text: "Email support", included: true },
      { text: "3-day free trial", included: true },
      { text: "AI Agent Team (5 agents)", included: false },
    ],
  },
  {
    name: "Pro",
    slug: "pro",
    monthly: 99,
    annual: 83,
    aum: "0.25%",
    tradeFee: "$3",
    featured: true,
    cta: "Start 3-Day Free Trial",
    agentHighlight: "Unlock the full AI Agent Team",
    features: [
      { text: "All 5 AI agents — Warren, Fin, Liza, Ferd & Tara", included: true },
      { text: "All markets: equities, crypto, forex, commodities", included: true },
      { text: "Unlimited trades", included: true },
      { text: "$3 per crypto trade", included: true },
      { text: "Full agent chat + Discord", included: true },
      { text: "Agent-driven research & news analysis", included: true },
      { text: "Priority support", included: true },
      { text: "3-day free trial", included: true },
    ],
  },
  {
    name: "Advanced",
    slug: "advanced",
    monthly: 199,
    annual: 166,
    aum: "0.5%",
    tradeFee: "$3",
    featured: false,
    cta: "Start 3-Day Free Trial",
    agentHighlight: "Dedicated AI Agent Team",
    features: [
      { text: "All 5 agents + dedicated instance", included: true },
      { text: "All markets + options & REITs", included: true },
      { text: "Unlimited trades", included: true },
      { text: "$3 per crypto trade", included: true },
      { text: "Custom agent strategies + Playbooks", included: true },
      { text: "API access", included: true },
      { text: "1-on-1 onboarding sessions", included: true },
      { text: "Early access to new features", included: true },
    ],
  },
  {
    name: "Business",
    slug: "business",
    monthly: null,
    annual: null,
    aum: "Custom",
    tradeFee: "Custom",
    featured: false,
    cta: "Get in Touch",
    agentHighlight: "For Family Offices & Ventures",
    features: [
      { text: "Everything in Advanced", included: true },
      { text: "Family Office multi-account management", included: true },
      { text: "Ventures investing — private companies (coming soon)", included: true },
      { text: "Dedicated agent cluster", included: true },
      { text: "Custom strategy development & Playbooks", included: true },
      { text: "SLA-backed uptime guarantees", included: true },
      { text: "Direct Slack/Teams channel", included: true },
      { text: "Quarterly strategy reviews", included: true },
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center tracking-tight font-serif">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-canyon-sage/60 text-center text-lg max-w-2xl mx-auto">
          3-day free trial on all plans. Cancel anytime.
        </p>

        {/* Toggle */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span
            className={`text-sm ${!annual ? "text-white" : "text-canyon-sage/50"}`}
          >
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
              annual ? "bg-canyon-bright" : "bg-canyon-green/50"
            }`}
            aria-label="Toggle annual pricing"
          >
            <span
              className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                annual ? "translate-x-6" : ""
              }`}
            />
          </button>
          <span
            className={`text-sm ${annual ? "text-white" : "text-canyon-sage/50"}`}
          >
            Annual
          </span>
          {annual && (
            <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-canyon-sage/10 text-canyon-sage border border-canyon-sage/20">
              Save ~17%
            </span>
          )}
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative p-8 rounded-2xl border ${
                t.slug === 'business'
                  ? "bg-[#5B8FA8] border-[#5B8FA8]/50"
                  : t.featured
                    ? "bg-canyon-mid border-sand/30 ring-1 ring-sand/15"
                    : "bg-canyon-dark border-canyon-green/30"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full bg-lime text-canyon-deep">
                  Most Popular
                </span>
              )}

              <h3 className={`text-xl font-semibold ${t.slug === 'business' ? 'text-[#091413]' : 'text-white'}`}>{t.name}</h3>

              {"agentHighlight" in t && t.agentHighlight && (
                <p className={`mt-2 text-xs font-medium rounded-full px-3 py-1 inline-block ${
                  t.slug === 'business'
                    ? 'text-[#091413] bg-[#091413]/10 border border-[#091413]/20'
                    : 'text-canyon-sage bg-canyon-bright/10 border border-canyon-bright/20'
                }`}>
                  {t.agentHighlight}
                </p>
              )}

              <div className="mt-4 flex items-baseline gap-1">
                {t.monthly ? (
                  <>
                    <span className={`text-5xl font-bold ${t.slug === 'business' ? 'text-[#091413]' : 'text-white'}`}>
                      ${annual ? t.annual : t.monthly}
                    </span>
                    <span className={`text-lg ${t.slug === 'business' ? 'text-[#091413]/50' : 'text-canyon-sage/50'}`}>/mo</span>
                  </>
                ) : (
                  <span className={`text-4xl font-bold ${t.slug === 'business' ? 'text-[#091413]' : 'text-white'}`}>Custom</span>
                )}
              </div>

              <div className="mt-1 space-y-0.5">
                {t.aum && (
                  <p className={`text-sm ${t.slug === 'business' ? 'text-[#091413]/60' : 'text-canyon-sage/50'}`}>
                    + {t.aum}/yr AUM fee
                  </p>
                )}
                {t.tradeFee && (
                  <p className={`text-sm ${t.slug === 'business' ? 'text-[#091413]/60' : 'text-canyon-sage/50'}`}>
                    {t.tradeFee}/crypto trade
                  </p>
                )}
              </div>

              <a
                href={t.slug === 'business' ? '/contact' : `https://app.deepcanyon.ai/signup?tier=${t.slug}`}
                className={`mt-6 w-full inline-flex items-center justify-center h-10 rounded-full font-semibold text-sm transition-colors duration-150 ${
                  t.featured
                    ? "bg-lime text-canyon-deep hover:bg-lime-hover"
                    : t.slug === 'business'
                      ? "bg-[#091413] text-white hover:bg-[#091413]/80"
                      : "bg-canyon-green/20 border border-canyon-green/40 text-white hover:bg-canyon-green/30"
                }`}
              >
                {t.cta}
              </a>

              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-3">
                    {f.included ? (
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${t.slug === 'business' ? 'text-[#091413]/70' : 'text-canyon-bright'}`}
                      />
                    ) : (
                      <X
                        size={16}
                        className="text-canyon-green/40 mt-0.5 shrink-0"
                      />
                    )}
                    <span
                      className={`text-sm ${
                        t.slug === 'business'
                          ? f.included ? "text-[#091413]/80" : "text-[#091413]/40"
                          : f.included ? "text-canyon-sage/70" : "text-canyon-sage/35"
                      }`}
                    >
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Fee explainer */}
        <div className="mt-8 text-sm text-canyon-sage/40 text-center max-w-2xl mx-auto space-y-2">
          <p>
            <strong className="text-canyon-sage/50">Crypto trade fee:</strong>{" "}
            A flat per-trade fee on crypto executions — up to 60% less than
            competitors charging $10+/trade.
          </p>
          <p>
            <strong className="text-canyon-sage/50">AUM fee:</strong> A small
            annual fee based on your account value, calculated monthly. Aligns
            our success with yours.
          </p>
        </div>

        {/* Risk disclaimer */}
        <p className="mt-4 text-xs text-canyon-sage/25 text-center max-w-xl mx-auto">
          Trading involves substantial risk of loss and is not suitable for every
          investor.
        </p>
      </div>
    </section>
  );
}
