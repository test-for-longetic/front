export function ReportsHeader() {
    return (
      <section className="flex items-end justify-between">
        <div>
          <p className="mb-2 text-sm text-zinc-400">Reports</p>
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            All lab reports
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-400">
            Review your uploaded reports, monitor tracked biomarker trends, and
            open any report to inspect extracted values.
          </p>
        </div>
      </section>
    );
  }