import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

const sessions = [
  { name: "Sydney", hours: "5:00 PM – 2:00 AM ET", markets: "AUD pairs, Asia-Pacific equities" },
  { name: "Tokyo", hours: "7:00 PM – 4:00 AM ET", markets: "JPY pairs, Nikkei-linked assets" },
  { name: "Hong Kong", hours: "9:00 PM – 4:00 AM ET", markets: "HKD pairs, Greater China exposure" },
  { name: "Frankfurt", hours: "3:00 AM – 12:00 PM ET", markets: "EUR pairs, European equities" },
  { name: "London", hours: "3:00 AM – 12:00 PM ET", markets: "GBP pairs, FTSE-linked assets" },
  { name: "New York", hours: "8:00 AM – 5:00 PM ET", markets: "USD pairs, US equities & options" },
  { name: "Crypto", hours: "24/7", markets: "BTC, ETH, SOL, and 15+ digital assets" },
];

export default function GlobalCoveragePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 bg-canyon-dark relative overflow-hidden">
          <div className="absolute w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(196,122,110,0.05) 0%, transparent 70%)", filter: "blur(120px)", top: "-200px", left: "50%", transform: "translateX(-50%)" }} />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-[#C47A6E] uppercase tracking-wider mb-4">Features</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] font-serif">24/7 Global Coverage</h1>
            <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">Seven trading sessions across the world's major financial centers. Crypto runs around the clock. Your portfolio never sleeps.</p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-semibold text-white font-serif mb-8">Trading Sessions</h2>
            <div className="space-y-3">
              {sessions.map((s) => (
                <div key={s.name} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-xl bg-canyon-dark gap-2">
                  <div>
                    <h3 className="text-white font-semibold">{s.name}</h3>
                    <p className="text-sm text-white/40">{s.markets}</p>
                  </div>
                  <span className="text-sm font-mono text-canyon-light">{s.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-canyon-dark">
              <h2 className="text-2xl font-semibold text-white font-serif mb-4">Always On, Always Watching</h2>
              <p className="text-white/50 leading-relaxed">While you sleep, the system is scanning for opportunities in Tokyo. While you commute, it's capturing London open momentum. Session handoffs are seamless — positions, risk limits, and market context transfer automatically between sessions.</p>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
