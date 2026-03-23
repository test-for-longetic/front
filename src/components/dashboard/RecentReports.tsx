function RecentReportItem({
    date,
    biomarkers,
    fileName,
  }: {
    date: string;
    biomarkers: string;
    fileName: string;
  }) {
    return (
      <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-white">{date}</p>
          <span className="text-xs text-zinc-400">{biomarkers}</span>
        </div>
        <p className="mt-1 text-sm text-zinc-500">{fileName}</p>
      </div>
    );
  }
  
  export function RecentReports() {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
        <p className="text-sm text-zinc-400">Recent Reports</p>
        <h2 className="mt-1 text-lg font-semibold text-white">
          Latest uploads
        </h2>
  
        <div className="mt-5 space-y-3">
          <RecentReportItem
            date="March 12, 2026"
            biomarkers="14 biomarkers"
            fileName="blood-test-march.pdf"
          />
          <RecentReportItem
            date="February 02, 2026"
            biomarkers="11 biomarkers"
            fileName="checkup-february.pdf"
          />
        </div>
      </div>
    );
  }