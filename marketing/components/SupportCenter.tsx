"use client";

import { useState } from "react";
import {
  Search,
  ChevronRight,
  UserPlus,
  BookOpen,
  TrendingUp,
  Bitcoin,
  DollarSign,
  Gem,
  ShieldCheck,
  Landmark,
  CreditCard,
  FileText,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";

interface Article {
  title: string;
  slug: string;
}

interface Category {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  articles: Article[];
}

const categories: Category[] = [
  {
    id: "getting-started",
    icon: UserPlus,
    title: "Getting Started",
    description: "Account setup, verification, and your first trade",
    articles: [
      { title: "How to create your Deep Canyon account", slug: "create-account" },
      { title: "Identity verification (KYC) — what to expect", slug: "kyc-verification" },
      { title: "Linking your bank account", slug: "link-bank" },
      { title: "Making your first deposit", slug: "first-deposit" },
      { title: "Choosing your first Playbook", slug: "first-playbook" },
      { title: "Understanding your dashboard", slug: "dashboard-overview" },
      { title: "How your Alpaca brokerage account works", slug: "alpaca-brokerage" },
    ],
  },
  {
    id: "playbooks",
    icon: BookOpen,
    title: "Playbooks",
    description: "Strategy configuration, customization, and management",
    articles: [
      { title: "What are Playbooks?", slug: "what-are-playbooks" },
      { title: "Choosing a Playbook for your goals", slug: "choosing-playbook" },
      { title: "Building a custom Playbook", slug: "custom-playbook" },
      { title: "Playbook risk parameters explained", slug: "playbook-risk" },
      { title: "Switching between Playbooks", slug: "switching-playbooks" },
      { title: "Asset allocation within Playbooks", slug: "playbook-allocation" },
      { title: "Playbook performance tracking", slug: "playbook-performance" },
    ],
  },
  {
    id: "intelligence",
    icon: HelpCircle,
    title: "Platform & Intelligence",
    description: "How the trading system works under the hood",
    articles: [
      { title: "The 7-vote signal engine explained", slug: "signal-engine" },
      { title: "How Bayesian intelligence learns from trades", slug: "bayesian-learning" },
      { title: "Understanding confidence scores", slug: "confidence-scores" },
      { title: "How signals are generated and executed", slug: "signal-execution" },
      { title: "The audit trail — every decision recorded", slug: "audit-trail" },
      { title: "24/7 global market coverage", slug: "global-coverage" },
      { title: "Strategy drift detection and recalibration", slug: "drift-detection" },
    ],
  },
  {
    id: "equities",
    icon: TrendingUp,
    title: "Equities & Options",
    description: "US stocks, ETFs, and options trading",
    articles: [
      { title: "How equities trading works on Deep Canyon", slug: "equities-overview" },
      { title: "Which stocks and ETFs are available?", slug: "available-stocks" },
      { title: "Understanding sector rotation signals", slug: "sector-rotation" },
      { title: "Options strategies: puts, calls, and spreads", slug: "options-strategies" },
      { title: "Options risk and the Greeks explained", slug: "options-greeks" },
      { title: "Short selling and inverse ETF hedging", slug: "short-selling" },
      { title: "Market hours and after-hours trading", slug: "market-hours" },
    ],
  },
  {
    id: "crypto",
    icon: Bitcoin,
    title: "Crypto",
    description: "Cryptocurrency trading, pairs, and 24/7 execution",
    articles: [
      { title: "Crypto trading on Deep Canyon", slug: "crypto-overview" },
      { title: "Available cryptocurrency pairs", slug: "crypto-pairs" },
      { title: "24/7 automated crypto execution", slug: "crypto-247" },
      { title: "Crypto per-trade fees explained", slug: "crypto-fees" },
      { title: "Crypto risk management and stops", slug: "crypto-risk" },
      { title: "Crypto vs. equities — key differences", slug: "crypto-vs-equities" },
      { title: "Is my crypto FDIC or SIPC insured?", slug: "crypto-insurance" },
    ],
  },
  {
    id: "forex",
    icon: DollarSign,
    title: "Forex",
    description: "Currency pairs, sessions, and carry trades",
    articles: [
      { title: "Forex trading on Deep Canyon", slug: "forex-overview" },
      { title: "Available currency pairs", slug: "forex-pairs" },
      { title: "Trading sessions: London, New York, Tokyo", slug: "forex-sessions" },
      { title: "What are carry trades?", slug: "carry-trades" },
      { title: "Forex risk management and stops", slug: "forex-risk" },
      { title: "Economic calendar events and trading", slug: "forex-calendar" },
      { title: "Forex availability by plan tier", slug: "forex-tiers" },
    ],
  },
  {
    id: "commodities",
    icon: Gem,
    title: "Commodities & Metals",
    description: "Gold, silver, oil, agriculture, and hard assets",
    articles: [
      { title: "Commodities trading on Deep Canyon", slug: "commodities-overview" },
      { title: "Gold and silver trading strategies", slug: "metals-strategies" },
      { title: "How the auto-hedge works (VIX triggers)", slug: "auto-hedge" },
      { title: "Energy and agricultural commodities", slug: "energy-agriculture" },
      { title: "Commodities availability by plan tier", slug: "commodities-tiers" },
      { title: "Understanding commodity contract basics", slug: "contract-basics" },
    ],
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "Account & Security",
    description: "Protecting your account, 2FA, and data privacy",
    articles: [
      { title: "Two-factor authentication (2FA) setup", slug: "2fa-setup" },
      { title: "How your data is protected", slug: "data-protection" },
      { title: "Reporting unauthorized activity", slug: "unauthorized-activity" },
      { title: "Password reset and account recovery", slug: "password-reset" },
      { title: "How Deep Canyon works with Alpaca", slug: "alpaca-relationship" },
      { title: "SIPC and FINRA protections explained", slug: "sipc-finra" },
    ],
  },
  {
    id: "transfers",
    icon: Landmark,
    title: "Transfers & Funding",
    description: "Deposits, withdrawals, and bank connections",
    articles: [
      { title: "How to deposit funds", slug: "deposit-funds" },
      { title: "How to withdraw funds", slug: "withdraw-funds" },
      { title: "Bank linking and ACH transfers", slug: "ach-transfers" },
      { title: "Deposit minimums and processing times", slug: "deposit-times" },
      { title: "Transfer limits and holds", slug: "transfer-limits" },
      { title: "Moving an existing brokerage account (ACAT)", slug: "acat-transfer" },
    ],
  },
  {
    id: "billing",
    icon: CreditCard,
    title: "Billing & Fees",
    description: "Subscriptions, AUM fees, crypto fees, and cancellation",
    articles: [
      { title: "Understanding your subscription plan", slug: "subscription-plans" },
      { title: "How the AUM fee works", slug: "aum-fee" },
      { title: "Crypto per-trade fee explained", slug: "crypto-trade-fee" },
      { title: "Monthly vs. annual billing", slug: "billing-cycles" },
      { title: "How to upgrade or downgrade your plan", slug: "change-plan" },
      { title: "How to cancel your subscription", slug: "cancel-subscription" },
      { title: "Refund policy", slug: "refund-policy" },
    ],
  },
  {
    id: "taxes",
    icon: FileText,
    title: "Taxes",
    description: "1099s, cost basis, and tax reporting",
    articles: [
      { title: "Tax documents and 1099 forms", slug: "tax-documents" },
      { title: "How to access your 1099 through Alpaca", slug: "1099-alpaca" },
      { title: "Understanding cost basis methods", slug: "cost-basis" },
      { title: "Wash sale rules and trading", slug: "wash-sales" },
      { title: "Crypto tax reporting", slug: "crypto-taxes" },
      { title: "Do I need to report forex trades?", slug: "forex-taxes" },
    ],
  },
  {
    id: "risk",
    icon: AlertTriangle,
    title: "Risk & Disclosures",
    description: "Risk warnings, regulatory disclosures, and legal",
    articles: [
      { title: "General risk disclosure", slug: "risk-disclosure" },
      { title: "Crypto-specific risks", slug: "crypto-risk-disclosure" },
      { title: "Options risk characteristics", slug: "options-risk-disclosure" },
      { title: "Forex and commodities risk", slug: "forex-commodities-risk" },
      { title: "FINRA/SIPC protections and limitations", slug: "finra-sipc" },
      { title: "Alpaca Securities LLC — broker-dealer disclosure", slug: "alpaca-disclosure" },
      { title: "Deep Canyon is not a broker-dealer or advisor", slug: "not-broker-dealer" },
    ],
  },
];

function CategoryCard({
  category,
  onClick,
}: {
  category: Category;
  onClick: () => void;
}) {
  const Icon = category.icon;
  return (
    <button
      onClick={onClick}
      className="text-left p-6 rounded-2xl bg-canyon-dark border border-canyon-green/30 hover:bg-canyon-mid hover:border-canyon-green/50 transition-all duration-200 group cursor-pointer"
    >
      <div className="flex items-start justify-between">
        <div className="w-10 h-10 rounded-lg bg-canyon-bright/15 flex items-center justify-center">
          <Icon size={20} className="text-canyon-light" />
        </div>
        <ChevronRight
          size={16}
          className="text-canyon-green/40 group-hover:text-canyon-sage group-hover:translate-x-1 transition-all duration-200 mt-2"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{category.title}</h3>
      <p className="mt-1 text-sm text-canyon-sage/50">{category.description}</p>
      <p className="mt-3 text-xs text-canyon-sage/30">
        {category.articles.length} articles
      </p>
    </button>
  );
}

function CategoryDetail({
  category,
  onBack,
}: {
  category: Category;
  onBack: () => void;
}) {
  const Icon = category.icon;
  return (
    <div>
      <button
        onClick={onBack}
        className="text-sm text-canyon-sage/50 hover:text-canyon-sage transition-colors mb-6 cursor-pointer"
      >
        &larr; Back to all topics
      </button>

      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-lg bg-canyon-bright/15 flex items-center justify-center">
          <Icon size={20} className="text-canyon-light" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white font-serif">
            {category.title}
          </h2>
          <p className="text-sm text-canyon-sage/50">{category.description}</p>
        </div>
      </div>

      <div className="space-y-1">
        {category.articles.map((a) => (
          <a
            key={a.slug}
            href={`/support/${category.id}/${a.slug}`}
            className="flex items-center justify-between p-4 rounded-xl hover:bg-canyon-dark border border-transparent hover:border-canyon-green/20 transition-all duration-150 group"
          >
            <span className="text-base text-canyon-sage/70 group-hover:text-white transition-colors">
              {a.title}
            </span>
            <ChevronRight
              size={16}
              className="text-canyon-green/30 group-hover:text-canyon-sage shrink-0"
            />
          </a>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-2xl bg-canyon-dark border border-canyon-green/30 text-center">
        <p className="text-white font-medium">Still need help?</p>
        <p className="mt-1 text-sm text-canyon-sage/50">
          Reach out to our support team and we&apos;ll get back to you within 24
          hours.
        </p>
        <a
          href="mailto:support@deepcanyon.ai"
          className="mt-4 inline-flex items-center px-6 h-10 bg-canyon-green/20 border border-canyon-green/40 text-white font-semibold text-sm rounded-full hover:bg-canyon-green/30 transition-colors"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}

export default function SupportCenter() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const active = categories.find((c) => c.id === activeCategory);

  // Filter categories and articles by search
  const filtered = searchQuery.trim()
    ? categories
        .map((c) => ({
          ...c,
          articles: c.articles.filter((a) =>
            a.title.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter(
          (c) =>
            c.articles.length > 0 ||
            c.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
    : categories;

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-white font-sans">
            How can we help?
          </h1>
          <p className="mt-4 text-lg text-canyon-sage/60">
            Search our knowledge base or browse by topic.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-canyon-green"
            />
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setActiveCategory(null);
              }}
              className="w-full h-12 pl-12 pr-4 rounded-full bg-canyon-dark border border-canyon-green/30 text-white placeholder:text-canyon-sage/30 focus:outline-none focus:border-canyon-bright/50 focus:ring-1 focus:ring-canyon-bright/20 transition-all"
            />
          </div>
        </div>

        {/* Content */}
        {active && !searchQuery ? (
          <CategoryDetail
            category={active}
            onBack={() => setActiveCategory(null)}
          />
        ) : (
          <>
            {/* Search results or category grid */}
            {searchQuery && filtered.length > 0 && (
              <div className="mb-8">
                <p className="text-sm text-canyon-sage/40 mb-4">
                  Showing results for &ldquo;{searchQuery}&rdquo;
                </p>
                <div className="space-y-1">
                  {filtered.flatMap((c) =>
                    c.articles.map((a) => (
                      <a
                        key={`${c.id}-${a.slug}`}
                        href={`/support/${c.id}/${a.slug}`}
                        className="flex items-center justify-between p-4 rounded-xl hover:bg-canyon-dark border border-transparent hover:border-canyon-green/20 transition-all group"
                      >
                        <div>
                          <span className="text-base text-canyon-sage/70 group-hover:text-white transition-colors">
                            {a.title}
                          </span>
                          <span className="ml-3 text-xs text-canyon-sage/30">
                            {c.title}
                          </span>
                        </div>
                        <ChevronRight
                          size={16}
                          className="text-canyon-green/30 group-hover:text-canyon-sage shrink-0"
                        />
                      </a>
                    ))
                  )}
                </div>
              </div>
            )}

            {searchQuery && filtered.length === 0 && (
              <div className="text-center py-12">
                <p className="text-canyon-sage/50">
                  No results found for &ldquo;{searchQuery}&rdquo;
                </p>
                <p className="mt-2 text-sm text-canyon-sage/30">
                  Try a different search or{" "}
                  <a
                    href="mailto:support@deepcanyon.ai"
                    className="text-slate-blue hover:underline"
                  >
                    contact support
                  </a>
                </p>
              </div>
            )}

            {!searchQuery && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((c) => (
                  <CategoryCard
                    key={c.id}
                    category={c}
                    onClick={() => setActiveCategory(c.id)}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {/* Contact bar */}
        {!active && (
          <div className="mt-16 p-8 rounded-2xl bg-canyon-dark border border-canyon-green/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Can&apos;t find what you&apos;re looking for?
              </h3>
              <p className="mt-1 text-sm text-canyon-sage/50">
                Our support team is available via email. We typically respond
                within 24 hours.
              </p>
            </div>
            <a
              href="mailto:support@deepcanyon.ai"
              className="shrink-0 inline-flex items-center px-6 h-10 bg-lime text-canyon-deep font-semibold text-sm rounded-full hover:bg-lime-hover transition-colors"
            >
              Email Support
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
