import { StatsOverview } from "../components/dashboard/StatsOverview";
import { ScoreTrendCard } from "../components/dashboard/ScoreTrendCard";
import { LatestInsights } from "../components/dashboard/LatestInsights";
import { UpcomingChecks } from "../components/dashboard/UpcomingChecks";
import { RecentReports } from "../components/dashboard/RecentReports";
import { DashboardHeader } from "../components/dashboard/DashboardHeader";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader />

      <StatsOverview />

      <section className="grid gap-4 lg:grid-cols-[1.4fr_0.9fr]">
        <ScoreTrendCard />
        <LatestInsights />
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <UpcomingChecks />
        <RecentReports />
      </section>
    </div>
  );
}
