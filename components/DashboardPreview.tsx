export default function DashboardPreview() {
  return (
    <section className="py-24 md:py-32 px-6 bg-canyon-dark">
      <div className="mx-auto max-w-6xl">
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
                app.deepcanyon.ai/dashboard
              </div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="bg-[#0b1a17] p-5 md:p-8">
            {/* Top nav bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-6">
                <span className="text-white font-semibold text-sm">Portfolio Overview</span>
                <span className="text-canyon-sage/40 text-sm">Positions</span>
                <span className="text-canyon-sage/40 text-sm">Signals</span>
                <span className="text-canyon-sage/40 text-sm">Audit Log</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-canyon-bright font-mono">Live</span>
                <span className="w-2 h-2 rounded-full bg-canyon-bright" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
              <StatCard label="Portfolio Value" value="$47,832" change="+12.4%" positive />
              <StatCard label="Today's P&L" value="+$384" change="+0.81%" positive />
              <StatCard label="Win Rate" value="68.3%" change="+2.1%" positive />
              <StatCard label="Open Positions" value="14" change="" positive />
              <StatCard label="Signal Confidence" value="High" change="7/7 votes" positive />
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Chart area */}
              <div className="lg:col-span-2 rounded-xl bg-[#0f2420] p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-white font-medium">Portfolio Value</span>
                  <div className="flex items-center gap-2">
                    {["1D", "1W", "1M", "3M", "1Y"].map((t, i) => (
                      <span
                        key={t}
                        className={`text-xs px-2 py-1 rounded ${
                          i === 2 ? "bg-canyon-bright/20 text-canyon-bright" : "text-canyon-sage/40"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Mock chart */}
                <div className="h-48 relative">
                  <svg viewBox="0 0 600 180" className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#408A71" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#408A71" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,140 C30,135 60,130 90,125 C120,120 140,128 170,110 C200,92 220,95 250,85 C280,75 300,80 330,65 C360,50 380,55 410,45 C440,35 460,40 490,30 C520,20 550,25 580,15 L600,12 L600,180 L0,180 Z"
                      fill="url(#chartGrad)"
                    />
                    <path
                      d="M0,140 C30,135 60,130 90,125 C120,120 140,128 170,110 C200,92 220,95 250,85 C280,75 300,80 330,65 C360,50 380,55 410,45 C440,35 460,40 490,30 C520,20 550,25 580,15 L600,12"
                      fill="none"
                      stroke="#6AB89A"
                      strokeWidth="2"
                    />
                    <circle cx="490" cy="30" r="4" fill="#BCFD49" />
                  </svg>
                  {/* Tooltip mock */}
                  <div className="absolute top-4 right-16 bg-canyon-mid rounded-lg px-3 py-2 text-xs">
                    <div className="text-canyon-sage/50">Mar 22</div>
                    <div className="text-white font-semibold">$47,832.41</div>
                    <div className="text-canyon-bright text-[10px]">+$384.20</div>
                  </div>
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-canyon-sage/30 font-mono">
                    <span>$50k</span>
                    <span>$45k</span>
                    <span>$40k</span>
                    <span>$35k</span>
                  </div>
                </div>
              </div>

              {/* Right sidebar */}
              <div className="space-y-4">
                {/* Allocation */}
                <div className="rounded-xl bg-[#0f2420] p-5">
                  <span className="text-sm text-white font-medium">Allocation</span>
                  <div className="mt-4 space-y-3">
                    <AllocBar label="Equities" pct={42} color="#408A71" />
                    <AllocBar label="Crypto" pct={28} color="#D4A843" />
                    <AllocBar label="Forex" pct={18} color="#5B8FA8" />
                    <AllocBar label="Commodities" pct={12} color="#8B7EAF" />
                  </div>
                </div>

                {/* Recent signals */}
                <div className="rounded-xl bg-[#0f2420] p-5">
                  <span className="text-sm text-white font-medium">Recent Signals</span>
                  <div className="mt-3 space-y-2.5">
                    <SignalRow ticker="NVDA" action="BUY" votes={7} time="2m ago" />
                    <SignalRow ticker="BTC" action="HOLD" votes={5} time="14m ago" />
                    <SignalRow ticker="EUR/USD" action="SELL" votes={6} time="31m ago" />
                    <SignalRow ticker="GLD" action="BUY" votes={7} time="1h ago" />
                  </div>
                </div>
              </div>
            </div>

            {/* Trade history table */}
            <div className="mt-4 rounded-xl bg-[#0f2420] p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-white font-medium">Recent Trades</span>
                <span className="text-xs text-canyon-sage/40">View all</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-canyon-sage/40 text-left">
                      <th className="pb-2 font-medium">Asset</th>
                      <th className="pb-2 font-medium">Action</th>
                      <th className="pb-2 font-medium">Entry</th>
                      <th className="pb-2 font-medium">Exit</th>
                      <th className="pb-2 font-medium">P&L</th>
                      <th className="pb-2 font-medium">Confidence</th>
                      <th className="pb-2 font-medium">Time</th>
                    </tr>
                  </thead>
                  <tbody className="text-canyon-sage/70">
                    <TradeRow asset="AAPL" action="BUY" entry="$189.42" exit="$192.18" pnl="+$276" confidence="7/7" time="Today 2:14 PM" positive />
                    <TradeRow asset="SOL" action="BUY" entry="$148.30" exit="$151.05" pnl="+$137" confidence="6/7" time="Today 11:03 AM" positive />
                    <TradeRow asset="EUR/USD" action="SELL" entry="1.0842" exit="1.0819" pnl="+$92" confidence="6/7" time="Today 8:30 AM" positive />
                    <TradeRow asset="MSFT" action="BUY" entry="$421.50" exit="$418.20" pnl="-$66" confidence="5/7" time="Yesterday 3:45 PM" positive={false} />
                    <TradeRow asset="GLD" action="BUY" entry="$214.80" exit="$216.45" pnl="+$165" confidence="7/7" time="Yesterday 10:22 AM" positive />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  label,
  value,
  change,
  positive,
}: {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}) {
  return (
    <div className="rounded-xl bg-[#0f2420] p-4">
      <div className="text-[10px] text-canyon-sage/40 uppercase tracking-wider">{label}</div>
      <div className="mt-1 text-lg font-bold text-white">{value}</div>
      {change && (
        <div className={`text-xs mt-0.5 ${positive ? "text-canyon-bright" : "text-red-400"}`}>
          {change}
        </div>
      )}
    </div>
  );
}

function AllocBar({ label, pct, color }: { label: string; pct: number; color: string }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs mb-1">
        <span className="text-canyon-sage/60">{label}</span>
        <span className="text-white font-mono">{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-canyon-deep">
        <div
          className="h-full rounded-full"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

function SignalRow({
  ticker,
  action,
  votes,
  time,
}: {
  ticker: string;
  action: string;
  votes: number;
  time: string;
}) {
  const actionColor =
    action === "BUY"
      ? "text-canyon-bright"
      : action === "SELL"
        ? "text-red-400"
        : "text-canyon-sage/60";

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-xs font-mono text-white font-medium">{ticker}</span>
        <span className={`text-[10px] font-semibold ${actionColor}`}>{action}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-canyon-sage/40">{votes}/7</span>
        <span className="text-[10px] text-canyon-sage/30">{time}</span>
      </div>
    </div>
  );
}

function TradeRow({
  asset,
  action,
  entry,
  exit,
  pnl,
  confidence,
  time,
  positive,
}: {
  asset: string;
  action: string;
  entry: string;
  exit: string;
  pnl: string;
  confidence: string;
  time: string;
  positive: boolean;
}) {
  return (
    <tr>
      <td className="py-2 font-mono text-white font-medium">{asset}</td>
      <td className="py-2">
        <span className={action === "BUY" ? "text-canyon-bright" : "text-red-400"}>
          {action}
        </span>
      </td>
      <td className="py-2 font-mono">{entry}</td>
      <td className="py-2 font-mono">{exit}</td>
      <td className={`py-2 font-mono font-medium ${positive ? "text-canyon-bright" : "text-red-400"}`}>
        {pnl}
      </td>
      <td className="py-2 font-mono">{confidence}</td>
      <td className="py-2 text-canyon-sage/40">{time}</td>
    </tr>
  );
}
