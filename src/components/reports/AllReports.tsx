import Link from "next/link";
import { ReportItem } from "./ReportItem";

export function AllReports() {
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
        <ReportItem
          date="March 12, 2026"
          fileName="blood-test-march.pdf"
          biomarkers="14 biomarkers"
          score="78"
          href="/reports/1"
        />
        <ReportItem
          date="February 02, 2026"
          fileName="checkup-february.pdf"
          biomarkers="11 biomarkers"
          score="72"
          href="/reports/2"
        />
        <ReportItem
          date="January 08, 2026"
          fileName="annual-panel-january.pdf"
          biomarkers="13 biomarkers"
          score="75"
          href="/reports/3"
        />
      </div>
    </section>
  );
}