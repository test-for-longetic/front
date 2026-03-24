"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteReport } from "@/lib/api";

type ReportDetailsActionsProps = {
  reportId: string;
};

export function ReportDetailsActions({ reportId }: ReportDetailsActionsProps) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this report?",
    );

    if (!confirmed) return;

    try {
      await deleteReport(reportId);
      router.push("/reports");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to delete report");
    }
  };

  return (
    <section className="flex items-center justify-between">
      <Link
        href="/reports"
        className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-zinc-600 hover:text-white"
      >
        Back to Reports
      </Link>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleDelete}
          className="rounded-full border border-red-900/60 px-4 py-2 text-sm font-medium text-red-400 transition hover:border-red-700 hover:text-red-300"
        >
          Delete Report
        </button>

        <button
          type="button"
          className="rounded-full bg-zinc-100 px-5 py-2 text-sm font-medium text-zinc-950 transition hover:bg-white"
        >
          Save Changes
        </button>
      </div>
    </section>
  );
}
