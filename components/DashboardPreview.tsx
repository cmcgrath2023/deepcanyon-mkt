export default function DashboardPreview() {
  return (
    <section className="py-24 md:py-32 px-6 bg-canyon-dark">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center tracking-tight font-serif">
          See It In Action
        </h2>
        <p className="mt-4 text-canyon-sage/60 text-center text-lg max-w-2xl mx-auto">
          A real-time dashboard with P&L, positions, and agent activity — all in one place.
        </p>

        <div className="mt-12 rounded-xl overflow-hidden border border-canyon-green/30 shadow-2xl shadow-black/50">
          {/* Browser chrome */}
          <div className="bg-canyon-deep px-4 py-3 flex items-center gap-3 border-b border-canyon-green/20">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
              <span className="w-3 h-3 rounded-full bg-green-400/60" />
            </div>
            <div className="flex-1 mx-8">
              <div className="bg-canyon-mid rounded-md px-3 py-1 text-xs text-canyon-sage/50 text-center max-w-sm mx-auto">
                app.deepcanyon.ai
              </div>
            </div>
          </div>

          {/* Placeholder for dashboard screenshot */}
          <div className="bg-canyon-deep aspect-video flex items-center justify-center">
            <div className="text-center">
              <p className="text-canyon-sage/40 text-sm">
                Dashboard preview coming soon
              </p>
              <p className="text-canyon-sage/25 text-xs mt-1">
                Screenshot will be captured from the live app
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
