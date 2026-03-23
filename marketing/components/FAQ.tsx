"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How does Deep Canyon work?",
    a: "Deep Canyon uses a multi-layered AI intelligence system that continuously scans 260+ tickers across equities, crypto, forex, and commodities. Every trade signal must pass a 7-indicator consensus — RSI, MACD, Bollinger Bands, EMA stack, momentum, mean reversion, and a neural network ensemble. The system executes, manages risk, and learns from every outcome using Bayesian intelligence.",
  },
  {
    q: "What is the 7-vote signal engine?",
    a: "Every potential trade must be confirmed by at least 4 of 7 independent indicators before it fires. No single indicator can trigger a trade alone. This multi-confirmation approach filters out noise and only acts on high-conviction opportunities with a minimum 1.5:1 reward-to-risk ratio.",
  },
  {
    q: "What are Playbooks?",
    a: "Playbooks are pre-configured trading strategies that define your asset allocation, risk parameters, position sizing, and trading style. Choose from proven playbooks or build your own. Each playbook is optimized for different goals — from conservative income generation to aggressive momentum trading across multiple asset classes.",
  },
  {
    q: "Do I need trading experience?",
    a: "No. The intelligence system handles research, analysis, and execution autonomously. You choose a playbook that matches your risk tolerance and goals. The system does the rest — scanning markets, generating signals, executing trades, and managing risk 24/7.",
  },
  {
    q: "Is my money safe?",
    a: "Your brokerage account is held with Alpaca Securities LLC, a member of FINRA and SIPC. SIPC protects securities customers up to $500,000 (including $250,000 for cash claims). Deep Canyon never has direct access to your funds — all trades execute through your Alpaca account.",
  },
  {
    q: "What markets can I trade?",
    a: "Depending on your plan: US equities (Starter), or equities plus crypto, forex, commodities, and metals (Pro and Elite). Elite adds options strategies and REITs. Crypto trades 24/7. Equities trade during US market hours. Forex covers London, New York, and Tokyo sessions.",
  },
  {
    q: "Can I lose money?",
    a: "Yes. All trading involves substantial risk of loss. The system uses automated risk management — stop-losses, circuit breakers, position concentration limits, and trailing stops — but no system can eliminate market risk. Only invest what you can afford to lose.",
  },
  {
    q: "How does the system learn?",
    a: "Every trade generates a learning record — what market conditions existed, what signals fired, and what the outcome was. Bayesian intelligence updates per-ticker win rates, indicator reliability scores, timing patterns, and market regime beliefs. Proven patterns are promoted to a skill library. The system gets more precise over time.",
  },
  {
    q: "How do fees work?",
    a: "There are three fee components. The monthly subscription ($29-$199/mo) gives you access to the platform and intelligence system. The crypto trade fee ($3-$5 per trade, depending on tier) is a flat per-execution fee — significantly lower than competitors charging $10+ per trade. The AUM fee (Pro: 0.25%/yr, Elite: 0.5%/yr) is a small annual fee based on your account value, calculated monthly, that aligns our success with yours. Starter has no AUM fee.",
  },
  {
    q: "Can I withdraw my money anytime?",
    a: "Yes. Withdraw funds at any time through your Alpaca brokerage account, typically within 1-3 business days. There are no lock-up periods or withdrawal penalties.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-canyon-green/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-center justify-between text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-lg font-medium text-white pr-4">{q}</span>
        <ChevronDown
          size={20}
          className={`text-canyon-bright shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          open ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-canyon-sage/70 text-base leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-canyon-dark">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center tracking-tight font-serif">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-canyon-sage/60 text-center text-lg">
          Everything you need to know before getting started.
        </p>

        <div className="mt-12">
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
