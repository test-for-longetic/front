export function ReportDetailsHeader() {
    return (
      <section className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-2 text-sm text-zinc-400">Report Details</p>
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            March 12, 2026 Report
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-400">
            Review extracted biomarkers, edit values if needed, and save the final
            report to your health history.
          </p>
        </div>
  
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-400">
          Source file:{" "}
          <span className="font-medium text-white">blood-test-march.pdf</span>
        </div>
      </section>
    );
  }