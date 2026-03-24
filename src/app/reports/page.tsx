import { AllReports } from "@/components/reports/AllReports";
import { ReportsHeader } from "@/components/reports/ReportsHeader";
import { TrackedTrends } from "@/components/reports/TrackedTrends";
import { getReports } from "@/lib/api";

export default async function ReportsPage() {
  const reports = await getReports();

  return (
    <div className="space-y-6">
      <ReportsHeader />
      <TrackedTrends />
      <AllReports reports={reports} />
    </div>
  );
}
