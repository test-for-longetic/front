export type Biomarker = {
    id: string;
    name: string;
    normalizedName: string;
    value: number;
    unit?: string | null;
    referenceMin?: number | null;
    referenceMax?: number | null;
    status?: string | null;
    confidence?: number | null;
    createdAt: string;
    updatedAt: string;
  };