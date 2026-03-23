export default function FinalCTA() {
  return (
    <section
      className="py-24 md:py-32 px-6"
      style={{
        background:
          "linear-gradient(180deg, #091413 0%, #0f2420 50%, #091413 100%)",
      }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight font-serif">
          Start Trading with AI Today
        </h2>
        <p className="mt-4 text-lg text-canyon-sage/60">
          Join the next generation of investors. Let five AI agents work for you
          around the clock.
        </p>
        <a
          href="https://app.deepcanyon.ai/signup"
          className="mt-8 inline-flex items-center justify-center px-8 h-12 bg-lime text-canyon-deep font-semibold rounded-full hover:bg-lime-hover transition-colors duration-150 text-base"
        >
          Start Free Trial
        </a>
        <p className="mt-6 text-xs text-canyon-sage/25">
          No credit card required. Trading involves substantial risk of loss and
          is not suitable for every investor.
        </p>
      </div>
    </section>
  );
}
