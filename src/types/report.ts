import { Biomarker } from "./biomarker";

export type Report = {
    id: string;
    sourceFileName: string;
    sourceFileType: string;
    filePath?: string | null;
    reportDate: string;
    createdAt: string;
    updatedAt: string;
    biomarkers: Biomarker[];
  };