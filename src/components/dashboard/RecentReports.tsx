import { RecentReportItem } from "./RecentReportItem";
import { Report } from "../../types/report";

export function RecentReports({ reports }: { reports: Report[] }) {
  const latestReports = reports.slice(0, 3);

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <p className="text-sm text-zinc-400">Recent Reports</p>
      <h2 className="mt-1 text-lg font-semibold text-white">Latest uploads</h2>

      <div className="mt-5 space-y-3">
        {latestReports.length === 0 ? (
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
            <p className="text-sm text-zinc-500">No uploaded reports yet.</p>
          </div>
        ) : (
          latestReports.map((report) => (
            <RecentReportItem
              key={report.id}
              id={report.id}
              date={new Date(report.reportDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              biomarkers={`${report.biomarkers.length} biomarkers`}
              fileName={report.sourceFileName}
            />
          ))
        )}
      </div>
    </div>
  );
}
