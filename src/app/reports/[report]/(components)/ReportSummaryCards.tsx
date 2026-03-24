import { Report } from "@/types/report";
import { SummaryCard } from "./SummaryCard";

export function ReportSummaryCards({ report }: { report: Report }) {
  const biomarkerCount = report.biomarkers.length;
  const outOfRangeCount = report.biomarkers.filter(
    (biomarker) => biomarker.status?.toLowerCase() !== "normal",
  ).length;

  const score = Math.max(0, 100 - outOfRangeCount * 10);

  return (
    <section className="grid gap-4 md:grid-cols-3">
      <SummaryCard
        label="Report Score"
        value={String(score)}
        subtitle="Calculated from biomarker balance in this report."
      />
      <SummaryCard
        label="Biomarkers Detected"
        value={String(biomarkerCount)}
        subtitle="Extracted from the uploaded file."
      />
      <SummaryCard
        label="Out of Range"
        value={String(outOfRangeCount)}
        subtitle="Markers currently outside the reference interval."
      />
    </section>
  );
}
