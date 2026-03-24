import { getReportById } from "@/lib/api";
import { ReportSummaryCards } from "./(components)/ReportSummaryCards";
import { ReportDetailsActions } from "./(components)/ReportDetailsActions";
import { ReportDetailsHeader } from "./(components)/ReportDetailsHeader";
import { BiomarkersTable } from "./(components)/BiomarkersTable";

type ReportDetailsPageProps = {
  params: Promise<{
    report: string;
  }>;
};

export default async function ReportDetailsPage({
  params,
}: ReportDetailsPageProps) {
  const { report: reportId } = await params;
  const report = await getReportById(reportId);

  return (
    <div className="space-y-6">
      <ReportDetailsHeader report={report} />
      <ReportSummaryCards report={report} />
      <BiomarkersTable biomarkers={report.biomarkers} />
      <ReportDetailsActions reportId={report.id}/>
    </div>
  );
}
