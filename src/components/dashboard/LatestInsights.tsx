function InsightCard({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) {
    return (
      <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
        <p className="text-sm font-medium text-white">{title}</p>
        <p className="mt-1 text-sm text-zinc-500">{description}</p>
      </div>
    );
  }
  
  export function LatestInsights() {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
        <p className="text-sm text-zinc-400">Latest Insights</p>
        <h2 className="mt-1 text-lg font-semibold text-white">
          What changed recently
        </h2>
  
        <div className="mt-5 space-y-3">
          <InsightCard
            title="Glucose is trending upward"
            description="Increased across the last three uploaded reports."
          />
          <InsightCard
            title="Vitamin D remains below range"
            description="Latest result is still below the preferred reference interval."
          />
          <InsightCard
            title="Hemoglobin is stable"
            description="No major change compared with your previous report."
          />
        </div>
      </div>
    );
  }