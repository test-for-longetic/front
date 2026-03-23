export function TrendInfoCard({
    title,
    value,
    description,
  }: {
    title: string;
    value: string;
    description: string;
  }) {
    return (
      <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
        <p className="text-sm text-zinc-400">{title}</p>
        <p className="mt-2 text-sm font-medium text-white">{value}</p>
        <p className="mt-1 text-sm text-zinc-500">{description}</p>
      </div>
    );
  }