"use client";
import Link from "next/link";
import { Report } from "@/types/report";
import { deleteReport } from "@/lib/api";
import { useRouter } from "next/navigation";

export function ReportItem({ report }: { report: Report }) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this report?",
    );

    if (!confirmed) return;

    try {
      await deleteReport(report.id);
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to delete report");
    }
  };

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

          <button
            type="button"
            onClick={handleDelete}
            className="text-red-400 transition hover:text-red-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

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

        <Link
          href="/upload"
          className="rounded-full border border-zinc-700 bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-white"
        >
          Upload New
        </Link>
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
