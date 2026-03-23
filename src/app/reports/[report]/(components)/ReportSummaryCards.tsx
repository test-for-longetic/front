function SummaryCard({
    label,
    value,
    subtitle,
  }: {
    label: string;
    value: string;
    subtitle: string;
  }) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
        <p className="text-sm text-zinc-400">{label}</p>
        <p className="mt-4 text-3xl font-semibold text-white">{value}</p>
        <p className="mt-2 text-sm text-zinc-500">{subtitle}</p>
      </div>
    );
  }
  
  export function ReportSummaryCards() {
    return (
      <section className="grid gap-4 md:grid-cols-3">
        <SummaryCard
          label="Report Score"
          value="78"
          subtitle="Calculated from biomarker balance in this report."
        />
        <SummaryCard
          label="Biomarkers Detected"
          value="14"
          subtitle="Extracted from the uploaded file."
        />
        <SummaryCard
          label="Out of Range"
          value="3"
          subtitle="Markers currently outside the reference interval."
        />
      </section>
    );
  }