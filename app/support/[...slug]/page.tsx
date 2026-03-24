import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const supportSlugs = [
  ["getting-started", "create-account"], ["getting-started", "kyc-verification"], ["getting-started", "link-bank"], ["getting-started", "first-deposit"], ["getting-started", "first-playbook"], ["getting-started", "dashboard-overview"], ["getting-started", "alpaca-brokerage"],
  ["playbooks", "what-are-playbooks"], ["playbooks", "choosing-playbook"], ["playbooks", "custom-playbook"], ["playbooks", "playbook-risk"], ["playbooks", "switching-playbooks"], ["playbooks", "playbook-allocation"], ["playbooks", "playbook-performance"],
  ["intelligence", "signal-engine"], ["intelligence", "bayesian-learning"], ["intelligence", "confidence-scores"], ["intelligence", "signal-execution"], ["intelligence", "audit-trail"], ["intelligence", "global-coverage"], ["intelligence", "drift-detection"],
  ["equities", "equities-overview"], ["equities", "available-stocks"], ["equities", "sector-rotation"], ["equities", "options-strategies"], ["equities", "options-greeks"], ["equities", "short-selling"], ["equities", "market-hours"],
  ["crypto", "crypto-overview"], ["crypto", "crypto-pairs"], ["crypto", "crypto-247"], ["crypto", "crypto-fees"], ["crypto", "crypto-risk"], ["crypto", "crypto-vs-equities"], ["crypto", "crypto-insurance"],
  ["forex", "forex-overview"], ["forex", "forex-pairs"], ["forex", "forex-sessions"], ["forex", "carry-trades"], ["forex", "forex-risk"], ["forex", "forex-calendar"], ["forex", "forex-tiers"],
  ["commodities", "commodities-overview"], ["commodities", "metals-strategies"], ["commodities", "auto-hedge"], ["commodities", "energy-agriculture"], ["commodities", "commodities-tiers"], ["commodities", "contract-basics"],
  ["security", "2fa-setup"], ["security", "data-protection"], ["security", "unauthorized-activity"], ["security", "password-reset"], ["security", "alpaca-relationship"], ["security", "sipc-finra"],
  ["transfers", "deposit-funds"], ["transfers", "withdraw-funds"], ["transfers", "ach-transfers"], ["transfers", "deposit-times"], ["transfers", "transfer-limits"], ["transfers", "acat-transfer"],
  ["billing", "subscription-plans"], ["billing", "aum-fee"], ["billing", "crypto-trade-fee"], ["billing", "billing-cycles"], ["billing", "change-plan"], ["billing", "cancel-subscription"], ["billing", "refund-policy"],
  ["taxes", "tax-documents"], ["taxes", "1099-alpaca"], ["taxes", "cost-basis"], ["taxes", "wash-sales"], ["taxes", "crypto-taxes"], ["taxes", "forex-taxes"],
  ["risk", "risk-disclosure"], ["risk", "crypto-risk-disclosure"], ["risk", "options-risk-disclosure"], ["risk", "forex-commodities-risk"], ["risk", "finra-sipc"], ["risk", "alpaca-disclosure"], ["risk", "not-broker-dealer"],
];

export function generateStaticParams() {
  return supportSlugs.map((slug) => ({ slug }));
}

export default async function SupportArticlePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const title = slug[slug.length - 1]
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <>
      <Nav />
      <main className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="mx-auto max-w-3xl">
          <a
            href="/support"
            className="inline-flex items-center gap-1.5 text-sm text-canyon-sage/50 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to Support
          </a>

          <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight font-serif">
            {title}
          </h1>

          <div className="mt-8 p-8 rounded-2xl bg-canyon-dark">
            <p className="text-white/60 leading-relaxed">
              This article is coming soon. We're building out our knowledge base
              to help you get the most from Deep Canyon.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              In the meantime, reach out to our support team for help with this topic.
            </p>
            <a
              href="mailto:support@deepcanyon.ai"
              className="mt-6 inline-flex items-center px-6 h-10 bg-lime text-canyon-deep font-semibold text-sm rounded-full hover:bg-lime-hover transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
