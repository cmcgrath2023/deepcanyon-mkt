import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function DisclosuresPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight font-serif">Disclosures</h1>
          <p className="mt-4 text-sm text-white/30">Last updated: March 2026</p>

          <div className="mt-12 space-y-8 text-white/50 leading-relaxed text-sm">
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Deep Canyon Is a Technology Platform</h2>
              <p>Deep Canyon is a technology company that provides AI-powered trading intelligence software. Deep Canyon is not a registered broker-dealer, investment advisor, or financial institution. Deep Canyon does not provide investment advice, recommendations, or solicitations to buy or sell securities.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Brokerage Services</h2>
              <p>All trading of US equities and options is executed and cleared through Alpaca Securities LLC, member FINRA/SIPC. Cryptocurrency trading is provided through Alpaca Crypto LLC. Forex trading is executed through OANDA Corporation, a registered Retail Foreign Exchange Dealer with the CFTC and member of the NFA. Commodities and metals trading is facilitated through regulated futures commission merchants.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Risk Warning</h2>
              <p>Trading and owning digital assets involves significant risk, including the risk of substantial loss. Trading in securities, options, forex, and commodities involves substantial risk of loss and is not suitable for every investor. You should carefully consider whether trading is appropriate for you in light of your financial situation. Past performance is not indicative of future results.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">No Guarantees</h2>
              <p>Deep Canyon does not guarantee any specific results or returns. AI-generated signals are probabilistic and may result in losses. The 7-vote consensus engine reduces but does not eliminate trading risk. Circuit breakers and risk management tools mitigate but do not prevent losses.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">SIPC and FINRA</h2>
              <p>Securities in your Alpaca brokerage account are protected by SIPC up to $500,000 (including $250,000 for cash claims). SIPC does not protect against market losses. Cryptocurrency is not protected by SIPC or FDIC insurance.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Regulatory</h2>
              <p>Alpaca Securities LLC is a member of FINRA and SIPC. OANDA Corporation is registered with the CFTC as a Retail Foreign Exchange Dealer and is a member of the NFA. Deep Canyon is not registered with any financial regulatory authority.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
