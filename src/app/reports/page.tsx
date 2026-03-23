import { AllReports } from "@/components/reports/AllReports";
import { ReportsHeader } from "@/components/reports/ReportsHeader";
import { TrackedTrends } from "@/components/reports/TrackedTrends";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <ReportsHeader />
      <TrackedTrends />
      <AllReports />
    </div>
  );
}
