import { CreateReportInput } from "@/types/сreateReportInput";

const API_URL = "http://localhost:4000";

export async function getReports() {
  const response = await fetch(`${API_URL}/reports`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch reports");
  }

  return response.json();
}

export async function getReportById(id: string) {
  const response = await fetch(`${API_URL}/reports/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch report");
  }

  return response.json();
}

export async function createReport(input: CreateReportInput) {
  const response = await fetch(`${API_URL}/reports`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error("Failed to create report");
  }

  return response.json();
}

export async function updateBiomarker(
  id: string,
  input: { value?: number; unit?: string }
) {
  const response = await fetch(`${API_URL}/biomarkers/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error("Failed to update biomarker");
  }

  return response.json();
}

export async function getTrends(biomarker: string) {
  const response = await fetch(
    `${API_URL}/trends?biomarker=${biomarker}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch trends");
  }

  return response.json();
}

export async function uploadFile(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Upload failed");
  }

  return response.json();
}
