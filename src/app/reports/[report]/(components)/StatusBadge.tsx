export function StatusBadge({ status }: { status: string }) {
  const normalized = status.toLowerCase();

  const styles: Record<string, string> = {
    normal: "border-emerald-800/60 bg-emerald-950 text-emerald-300",
    high: "border-amber-800/60 bg-amber-950 text-amber-300",
    low: "border-sky-800/60 bg-sky-950 text-sky-300",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-medium ${
        styles[normalized] ?? "border-zinc-700 bg-zinc-950 text-zinc-300"
      }`}
    >
      {status}
    </span>
  );
}
