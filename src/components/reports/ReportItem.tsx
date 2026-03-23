import Link from "next/link";

export function ReportItem({
  date,
  fileName,
  biomarkers,
  score,
  href,
}: {
  date: string;
  fileName: string;
  biomarkers: string;
  score: string;
  href: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-white">{date}</p>
          <p className="mt-1 text-sm text-zinc-500">{fileName}</p>
        </div>

        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <span>{biomarkers}</span>
          <span>Score {score}</span>
          <Link
            href={href}
            className="text-white transition hover:text-zinc-300"
          >
            Open
          </Link>
        </div>
      </div>
    </div>
  );
}
