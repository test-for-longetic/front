import { StatsOverview } from "../components/dashboard/StatsOverview";
import { ScoreTrendCard } from "../components/dashboard/ScoreTrendCard";
import { LatestInsights } from "../components/dashboard/LatestInsights";
import { UpcomingChecks } from "../components/dashboard/UpcomingChecks";
import { RecentReports } from "../components/dashboard/RecentReports";
import { DashboardHeader } from "../components/dashboard/DashboardHeader";
import { getReports } from "@/lib/api";
import { Report } from '../types/report'

export default async function DashboardPage() {
  const reports: Report[] = await getReports();

  return (
    <div className="space-y-6">
      <DashboardHeader />

      <StatsOverview reports={reports} />

      <section className="grid gap-4 lg:grid-cols-[1.4fr_0.9fr]">
        <ScoreTrendCard reports={reports} />
        <LatestInsights reports={reports} />
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <UpcomingChecks />
        <RecentReports reports={reports} />
      </section>
    </div>
  );
}
