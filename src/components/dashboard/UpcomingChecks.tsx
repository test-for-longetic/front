import { CheckItem } from "./CheckItem";

export function UpcomingChecks() {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
        <p className="text-sm text-zinc-400">Upcoming Checks</p>
        <h2 className="mt-1 text-lg font-semibold text-white">
          Recommended follow-up
        </h2>
  
        <div className="mt-5 space-y-3">
          <CheckItem
            title="Complete blood count"
            description="Suggested in the next 30 days"
            dueIn="30d"
          />
          <CheckItem
            title="Vitamin D retest"
            description="Monitor deficiency trend over time"
            dueIn="14d"
          />
        </div>
      </div>
    );
  }