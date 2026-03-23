import { TrendInfoCard } from "./TrendInfoCard";

export function TrackedTrends() {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm text-zinc-400">Tracked Trends</p>
          <h2 className="mt-1 text-lg font-semibold text-white">
            Biomarker trend overview
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-500">
            Follow how selected biomarkers change over time across uploaded
            reports.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-sm text-zinc-400" htmlFor="biomarker">
            Biomarker
          </label>
          <select
            id="biomarker"
            className="rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 outline-none"
            defaultValue="glucose"
          >
            <option value="glucose">Glucose</option>
            <option value="hemoglobin">Hemoglobin</option>
            <option value="vitamin-d">Vitamin D</option>
            <option value="cholesterol">Cholesterol</option>
          </select>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="flex h-72 items-center justify-center rounded-2xl border border-dashed border-zinc-800 bg-zinc-950 text-sm text-zinc-500">
          Trend chart placeholder
        </div>

        <div className="space-y-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
            <p className="text-sm text-zinc-400">Latest Value</p>
            <p className="mt-2 text-2xl font-semibold text-white">5.8 mmol/L</p>
            <p className="mt-1 text-sm text-zinc-500">
              From March 12, 2026 report
            </p>
          </div>

          <TrendInfoCard
            title="Trend Insight"
            value="Gradual increase over the last 3 reports"
            description="Consider monitoring this biomarker more closely over time."
          />

          <TrendInfoCard
            title="Reference Range"
            value="3.9 — 5.5 mmol/L"
            description="Used to compare your latest uploaded result."
          />
        </div>
      </div>
    </section>
  );
}
