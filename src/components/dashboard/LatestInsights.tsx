import { InsightCard } from "./InsightCard";
import { Report } from "../../types/report";

export function LatestInsights({ reports }: { reports: Report[] }) {
  const latestReport = reports[0];

  if (!latestReport) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
        <p className="text-sm text-zinc-400">Latest Insights</p>
        <h2 className="mt-1 text-lg font-semibold text-white">
          What changed recently
        </h2>

        <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
          <p className="text-sm text-zinc-500">
            Upload your first report to generate insights.
          </p>
        </div>
      </div>
    );
  }

  const abnormalBiomarkers = latestReport.biomarkers.filter(
    (biomarker) => biomarker.status?.toLowerCase() !== "normal",
  );

  const insights = abnormalBiomarkers.slice(0, 3).map((biomarker) => {
    const normalizedStatus = biomarker.status?.toLowerCase();

    if (normalizedStatus === "high") {
      return {
        title: `${biomarker.name} is above range`,
        description:
          "Latest uploaded result is higher than the expected reference interval.",
      };
    }

    if (normalizedStatus === "low") {
      return {
        title: `${biomarker.name} is below range`,
        description:
          "Latest uploaded result is lower than the expected reference interval.",
      };
    }

    return {
      title: `${biomarker.name} needs review`,
      description: "This biomarker may require additional attention.",
    };
  });

  if (insights.length === 0) {
    insights.push({
      title: "No abnormal biomarkers detected",
      description:
        "The latest uploaded report does not contain any out-of-range markers.",
    });
  }

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <p className="text-sm text-zinc-400">Latest Insights</p>
      <h2 className="mt-1 text-lg font-semibold text-white">
        What changed recently
      </h2>

      <div className="mt-5 space-y-3">
        {insights.map((insight, index) => (
          <InsightCard
            key={`${insight.title}-${index}`}
            title={insight.title}
            description={insight.description}
          />
        ))}
      </div>
    </div>
  );
}
