const agents = [
  {
    name: "Warren",
    role: "Managing Director",
    color: "var(--color-agent-warren)",
    desc: "The strategist. Warren sees the big picture — portfolio allocation, market regime, and when to be aggressive or defensive.",
  },
  {
    name: "Fin",
    role: "Trading",
    color: "var(--color-agent-fin)",
    desc: "The executor. Fin manages positions, tracks P&L, and ensures every trade aligns with the strategy.",
  },
  {
    name: "Liza",
    role: "News & Sentiment",
    color: "var(--color-agent-liza)",
    desc: "The analyst. Liza monitors headlines, earnings, and market catalysts in real time.",
  },
  {
    name: "Ferd",
    role: "Research",
    color: "var(--color-agent-ferd)",
    desc: "The researcher. Ferd digs into sectors, patterns, and fundamentals to find opportunities.",
  },
  {
    name: "Tara",
    role: "Site Reliability",
    color: "var(--color-agent-tara)",
    desc: "The guardian. Tara monitors system health, uptime, and ensures the platform runs flawlessly.",
  },
];

export default function AgentTeam() {
  return (
    <section id="agents" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center tracking-tight">
          Meet Your Trading Team
        </h2>
        <p className="mt-4 text-canyon-sage/60 text-center text-lg max-w-2xl mx-auto">
          Five AI agents, each with a specialty, working together on your behalf.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((a) => (
            <div
              key={a.name}
              className="relative p-6 rounded-2xl bg-canyon-dark border border-canyon-green/30 overflow-hidden"
              style={{ borderTopColor: a.color, borderTopWidth: "2px" }}
            >
              {/* Subtle agent color glow */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse, ${a.color}08 0%, transparent 70%)`,
                  filter: "blur(40px)",
                }}
              />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: a.color }}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {a.name}
                    </h3>
                    <p className="text-sm" style={{ color: a.color }}>
                      {a.role}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-canyon-sage/60">{a.desc}</p>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="p-6 rounded-2xl bg-canyon-dark border border-canyon-green/30 flex flex-col items-center justify-center text-center">
            <h3 className="text-lg font-semibold text-white">
              Ready to meet the team?
            </h3>
            <p className="mt-2 text-sm text-canyon-sage/60">
              Start your free trial and put all five agents to work.
            </p>
            <a
              href="https://app.deepcanyon.ai/signup"
              className="mt-4 inline-flex items-center px-6 h-10 bg-lime text-canyon-deep font-semibold text-sm rounded-full hover:bg-lime-hover transition-colors duration-150"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
