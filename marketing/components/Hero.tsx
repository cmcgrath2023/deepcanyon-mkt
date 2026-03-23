"use client";

import dynamic from "next/dynamic";

const Globe = dynamic(() => import("./Globe"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-canyon-dark overflow-x-clip overflow-y-visible">
      {/* Ambient glows */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(176,228,204,0.06) 0%, transparent 70%)",
          filter: "blur(100px)",
          top: "-100px",
          right: "20%",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1880px] px-6 min-h-screen flex items-center">
        <div className="flex flex-col lg:flex-row items-center w-full pt-24 pb-16 lg:pt-16 lg:pb-0 gap-8 lg:gap-12">
          {/* Left — Content */}
          <div className="lg:w-1/2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-canyon-bright/15 border border-canyon-bright/25 text-canyon-sage text-sm font-medium mb-6">
              <span
                className="w-2 h-2 rounded-full bg-canyon-bright"
                style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
              />
              Trading 24/7 across global markets
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[90px] font-semibold tracking-tight text-canyon-sage leading-[1.1] font-sans">
              Autonomous
              <br />
              Trading
              <br />
              Intelligence.
            </h1>

            <p className="mt-6 text-base lg:text-lg text-white/60 max-w-md leading-relaxed">
              A multi-layered AI system that researches markets, generates
              7-vote consensus signals, executes trades, and learns from every
              outcome — around the clock.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
              <a
                href="https://app.deepcanyon.ai/signup"
                className="inline-flex items-center justify-center px-7 h-11 bg-lime text-canyon-deep font-semibold rounded-full hover:bg-lime-hover transition-colors duration-150 text-sm"
              >
                Start Free Trial
              </a>
              <a
                href="#markets"
                className="inline-flex items-center justify-center px-7 h-11 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors duration-150 text-sm"
              >
                Explore Markets
              </a>
            </div>

            <p className="mt-6 text-xs text-canyon-sage/25 max-w-sm">
              No credit card required. Brokerage services provided by Alpaca
              Securities LLC, member FINRA/SIPC.
            </p>
          </div>

          {/* Right — Globe */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-[700px] h-[500px] lg:h-[700px] bg-transparent">
              <Globe />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
