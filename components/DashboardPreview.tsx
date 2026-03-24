export default function DashboardPreview() {
  return (
    <section className="py-24 md:py-32 px-6 bg-canyon-dark">
      <div className="mx-auto max-w-4xl flex flex-col items-center">
        {/* Phone mockup */}
        <div className="relative w-[280px] sm:w-[320px] md:w-[360px]">
          {/* Phone frame */}
          <div className="relative rounded-[40px] bg-black p-3 shadow-2xl shadow-black/60">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-10" />
            {/* Screen */}
            <div className="rounded-[28px] overflow-hidden bg-black aspect-[9/19.5]">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/original-12bf11565e899e29d2798aaf7c11bdff.mp4" type="video/mp4" />
              </video>
            </div>
            {/* Home indicator */}
            <div className="mt-2 mx-auto w-28 h-1 rounded-full bg-white/20" />
          </div>
        </div>

        {/* Text below */}
        <div className="mt-16 text-center max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight font-serif leading-tight">
            Intelligence
            <br />
            in your pocket.
          </h2>
          <p className="mt-6 text-lg text-white/50 max-w-lg mx-auto leading-relaxed">
            Monitor your portfolio, review signals, and track every trade —
            all from your phone. Your AI trading team works around the clock,
            and you stay informed wherever you are.
          </p>
          <a
            href="https://app.deepcanyon.ai/signup"
            className="mt-8 inline-flex items-center justify-center px-7 h-11 bg-lime text-canyon-deep font-semibold rounded-full hover:bg-lime-hover transition-colors duration-150 text-sm"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </section>
  );
}
