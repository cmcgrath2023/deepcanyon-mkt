import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight font-serif">Terms &amp; Conditions</h1>
          <p className="mt-4 text-sm text-white/30">Last updated: March 2026</p>

          <div className="mt-12 space-y-8 text-white/50 leading-relaxed text-sm">
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">1. Agreement to Terms</h2>
              <p>By accessing or using the Deep Canyon platform ("Service"), you agree to be bound by these Terms and Conditions. If you do not agree, do not use the Service.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">2. Description of Service</h2>
              <p>Deep Canyon is a technology platform that provides AI-powered trading intelligence. Deep Canyon is not a broker-dealer, investment advisor, or financial institution. All securities trading is executed through Alpaca Securities LLC, member FINRA/SIPC. Forex trading is executed through OANDA Corporation. Cryptocurrency trading is provided through Alpaca Crypto LLC.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">3. Risk Disclosure</h2>
              <p>Trading involves substantial risk of loss and is not suitable for every investor. You should consider whether trading is appropriate for you in light of your financial condition. Past performance is not indicative of future results. You could lose some or all of your invested capital.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">4. Account Eligibility</h2>
              <p>You must be at least 18 years old and a legal resident of a jurisdiction where the Service is available. You must complete identity verification (KYC) as required by our brokerage partners.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">5. Fees</h2>
              <p>Subscription fees, AUM fees, and per-trade fees are described on our Pricing page. Fees are subject to change with 30 days notice. Brokerage partners may charge additional fees not controlled by Deep Canyon.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">6. Limitation of Liability</h2>
              <p>Deep Canyon shall not be liable for any trading losses, system downtime, or technical failures. The Service is provided "as is" without warranty of any kind. In no event shall Deep Canyon's liability exceed the fees you paid in the preceding 12 months.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">7. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to conflict of law principles.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
