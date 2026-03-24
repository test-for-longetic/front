import Link from "next/link";
import { Report } from "@/types/report";
import { ReportItem } from "./ReportItem";
import { RedirectButton } from "@/ui/RedirectButton";

export function AllReports({ reports }: { reports: Report[] }) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-400">All Reports</p>
          <h2 className="mt-1 text-lg font-semibold text-white">
            Uploaded history
          </h2>
        </div>

        <RedirectButton text='Upload New' url='upload' />
      </div>

      <div className="mt-5 space-y-3">
        {reports.length === 0 ? (
          <div className="rounded-xl border border-dashed border-zinc-800 bg-zinc-950 p-8 text-center text-sm text-zinc-500">
            No reports yet. Upload your first lab report to get started.
          </div>
        ) : (
          reports.map((report) => (
            <ReportItem key={report.id} report={report} />
          ))
        )}
      </div>
    </section>
  );
}
