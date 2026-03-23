export function DashboardHeader() {
    return (
      <section className="flex items-end justify-between">
        <div>
          <p className="mb-2 text-sm text-zinc-400">Overview</p>
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Your health dashboard
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-400">
            Track uploaded lab reports, monitor biomarker trends, and review your
            latest health summary in one place.
          </p>
        </div>
      </section>
    );
  } 