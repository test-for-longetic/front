import { StatCard } from "./StatCard";

export function StatsOverview() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      <StatCard
        title="Lab Summary Score"
        value="78"
        accent="+6 this month"
        subtitle="Based on your latest uploaded biomarkers and reference ranges."
      />

      <StatCard
        title="Reports Uploaded"
        value="12"
        subtitle="Total blood test reports stored in your history."
      />

      <StatCard
        title="Tracked Biomarkers"
        value="24"
        subtitle="Unique biomarkers detected across all uploaded reports."
      />
    </section>
  );
}
