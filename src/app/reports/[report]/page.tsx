import { BiomarkersTable } from "./(components)/BiomarkersTable";
import { ReportDetailsHeader } from "./(components)/ReportDetailsHeader";
import { ReportSummaryCards } from "./(components)/ReportSummaryCards";
import { ReportDetailsActions } from "./(components)/ReportDetailsActions";

export default function ReportDetailsPage() {
  return (
    <div className="space-y-6">
      <ReportDetailsHeader />
      <ReportSummaryCards />
      <BiomarkersTable />
      <ReportDetailsActions />
    </div>
  );
}