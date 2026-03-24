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