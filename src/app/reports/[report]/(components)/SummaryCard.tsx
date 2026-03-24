type SummaryCardProps = {
  label: string;
  value: string;
  subtitle: string;
};

export function SummaryCard({ label, value, subtitle }: SummaryCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <p className="text-sm text-zinc-400">{label}</p>
      <p className="mt-4 text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-zinc-500">{subtitle}</p>
    </div>
  );
}
