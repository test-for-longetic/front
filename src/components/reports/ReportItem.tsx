import Link from "next/link";
import { Report } from "@/types/report";

export function ReportItem({ report }: { report: Report }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-white">
            {new Date(report.reportDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="mt-1 text-sm text-zinc-500">{report.sourceFileName}</p>
        </div>

        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <span>{report.biomarkers.length} biomarkers</span>
          <Link
            href={`/reports/${report.id}`}
            className="text-white transition hover:text-zinc-300"
          >
            Open
          </Link>
        </div>
      </div>
    </div>
  );
}
