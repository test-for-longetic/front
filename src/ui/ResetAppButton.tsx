"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { resetAppData } from "@/lib/api";

export function ResetAppButton() {
  const router = useRouter();
  const [isResetting, setIsResetting] = useState(false);

  const handleReset = async () => {
    const confirmed = window.confirm(
      "This will permanently delete all reports, biomarkers, and uploaded files. Continue?"
    );

    if (!confirmed) return;

    try {
      setIsResetting(true);
      await resetAppData();
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to reset application data");
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleReset}
      disabled={isResetting}
      className="rounded-full border border-red-900/70 bg-red-950 px-4 py-2 text-sm font-medium text-red-300 shadow-[0_0_0_0_rgba(239,68,68,0.45)] transition hover:border-red-700 hover:bg-red-900/80 hover:text-red-100 disabled:cursor-not-allowed disabled:opacity-60 animate-pulse"
    >
      {isResetting ? "Resetting..." : "Reset Data"}
    </button>
  );
}