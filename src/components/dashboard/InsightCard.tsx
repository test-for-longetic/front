type InsightCardProps = {
  title: string;
  description: string;
};

export function InsightCard({ title, description }: InsightCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
      <p className="text-sm font-medium text-white">{title}</p>
      <p className="mt-1 text-sm text-zinc-500">{description}</p>
    </div>
  );
}
