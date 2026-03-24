import Link from "next/link";

type RecentReportItem = {
  id: string;
  date: string;
  biomarkers: string;
  fileName: string;
};

export function RecentReportItem({ id, date, biomarkers, fileName }: RecentReportItem) {
  return (
    <Link
      href={`/reports/${id}`}
      className="block rounded-xl border border-zinc-800 bg-zinc-950 p-4 transition hover:border-zinc-700"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-white">{date}</p>
        <span className="text-xs text-zinc-400">{biomarkers}</span>
      </div>
      <p className="mt-1 text-sm text-zinc-500">{fileName}</p>
    </Link>
  );
}
