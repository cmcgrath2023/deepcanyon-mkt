import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight font-serif text-center">About Deep Canyon</h1>
          <p className="mt-6 text-lg text-white/50 text-center max-w-2xl mx-auto">We're building the next generation of autonomous trading intelligence — a platform that researches, validates, executes, and learns from every trade.</p>

          <div className="mt-16 space-y-12">
            <div>
              <h2 className="text-2xl font-semibold text-white font-serif mb-4">Our Mission</h2>
              <p className="text-white/50 leading-relaxed">Deep Canyon exists to give every investor access to institutional-grade trading intelligence. We believe AI should work for you around the clock — analyzing markets, managing risk, and executing with discipline no human can sustain.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white font-serif mb-4">The Platform</h2>
              <p className="text-white/50 leading-relaxed">Our multi-layered intelligence system combines a 7-vote signal engine, Bayesian learning, and autonomous risk management across equities, crypto, forex, and commodities. Every decision is logged in a tamper-proof audit trail. The system gets smarter with every trade.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white font-serif mb-4">Technology, Not a Broker</h2>
              <p className="text-white/50 leading-relaxed">Deep Canyon is a technology platform. We are not a broker-dealer or investment advisor. Trading of US equities and options is executed through Alpaca Securities LLC, member FINRA/SIPC. Forex is executed through OANDA Corporation. Your funds are never held by Deep Canyon.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
