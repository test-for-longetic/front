import { Report } from '../../types/report'

export function getReportScore(report: Report) {
    const outOfRangeCount = report.biomarkers.filter(
      (biomarker) => biomarker.status?.toLowerCase() !== "normal"
    ).length;
  
    return Math.max(0, 100 - outOfRangeCount * 10);
  }