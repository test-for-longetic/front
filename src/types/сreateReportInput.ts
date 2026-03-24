export type CreateReportInput = {
  sourceFileName: string;
  reportDate: string;
  biomarkers: Array<{
    name: string;
    normalizedName: string;
    value: number;
    unit?: string;
    referenceMin?: number;
    referenceMax?: number;
    status?: string;
  }>;
};
