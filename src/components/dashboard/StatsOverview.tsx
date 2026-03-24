import { getReportScore } from "./getReportScore";
import { Report } from "../../types/report";
import { StatCard } from "./StatCard";

export function StatsOverview({ reports }: { reports: Report[] }) {
  const reportsUploaded = reports.length;

  const trackedBiomarkers = new Set(
    reports.flatMap((report) =>
      report.biomarkers.map((biomarker) => biomarker.normalizedName),
    ),
  ).size;

  const latestReport = reports[0];
  const previousReport = reports[1];

  const latestScore = latestReport ? getReportScore(latestReport) : 0;
  const previousScore = previousReport ? getReportScore(previousReport) : null;

  const scoreDelta =
    previousScore !== null ? latestScore - previousScore : null;

  const scoreAccent =
    scoreDelta !== null
      ? `${scoreDelta >= 0 ? "+" : ""}${scoreDelta} vs previous`
      : undefined;

  return (
    <section className="grid gap-4 md:grid-cols-3">
      <StatCard
        title="Lab Summary Score"
        value={String(latestScore)}
        accent={scoreAccent}
        subtitle="Calculated from the latest uploaded report."
      />

      <StatCard
        title="Reports Uploaded"
        value={String(reportsUploaded)}
        subtitle="Total blood test reports stored in your history."
      />

      <StatCard
        title="Tracked Biomarkers"
        value={String(trackedBiomarkers)}
        subtitle="Unique biomarkers detected across all uploaded reports."
      />
    </section>
  );
}
