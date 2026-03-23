export function ScoreTrendCard() {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-400">Score Trend</p>
            <h2 className="mt-1 text-lg font-semibold text-white">
              Health score over time
            </h2>
          </div>
  
          <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
            Last 6 reports
          </span>
        </div>
  
        <div className="mt-6 flex h-64 items-center justify-center rounded-2xl border border-dashed border-zinc-800 bg-zinc-950 text-sm text-zinc-500">
          Chart placeholder
        </div>
      </div>
    );
  }