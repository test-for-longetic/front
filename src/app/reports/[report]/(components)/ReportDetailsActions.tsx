import Link from "next/link";

export function ReportDetailsActions() {
  return (
    <section className="flex items-center justify-between">
      <Link
        href="/reports"
        className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-zinc-600 hover:text-white"
      >
        Back to Reports
      </Link>

      <button
        type="button"
        className="rounded-full bg-zinc-100 px-5 py-2 text-sm font-medium text-zinc-950 transition hover:bg-white"
      >
        Save Changes
      </button>
    </section>
  );
}