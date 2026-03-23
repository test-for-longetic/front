export function StatCard({
    title,
    value,
    subtitle,
    accent,
  }: {
    title: string;
    value: string;
    subtitle: string;
    accent?: string;
  }) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
        <p className="text-sm text-zinc-400">{title}</p>
  
        <div className="mt-4 flex items-end gap-3">
          <span className="text-4xl font-semibold text-white">{value}</span>
          {accent ? (
            <span className="mb-1 text-sm text-emerald-400">{accent}</span>
          ) : null}
        </div>
  
        <p className="mt-3 text-sm text-zinc-500">{subtitle}</p>
      </div>
    );
  }