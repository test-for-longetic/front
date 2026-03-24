"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createReport } from "@/lib/api";
import { UploadHeader } from "@/components/upload/UploadHeader";
import { UploadDropzone } from "@/components/upload/UploadDropzone";
import { UploadSteps } from "@/components/upload/UploadSteps";
import { UploadActions } from "@/components/upload/UploadActions";

type DraftBiomarker = {
  name: string;
  normalizedName: string;
  value: string;
  unit: string;
  referenceMin: string;
  referenceMax: string;
  status: string;
};

const initialDraft: DraftBiomarker[] = [
  {
    name: "Glucose",
    normalizedName: "glucose",
    value: "5.8",
    unit: "mmol/L",
    referenceMin: "3.9",
    referenceMax: "5.5",
    status: "high",
  },
  {
    name: "Hemoglobin",
    normalizedName: "hemoglobin",
    value: "141",
    unit: "g/L",
    referenceMin: "130",
    referenceMax: "170",
    status: "normal",
  },
  {
    name: "Vitamin D",
    normalizedName: "vitamin_d",
    value: "22",
    unit: "ng/mL",
    referenceMin: "30",
    referenceMax: "100",
    status: "low",
  },
];

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-zinc-500">
      {children}
    </label>
  );
}

function FieldInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-2.5 text-sm text-white outline-none transition focus:border-zinc-500"
    />
  );
}

export default function UploadPage() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [draftBiomarkers, setDraftBiomarkers] = useState<
    DraftBiomarker[] | null
  >(null);

  const handleExtract = async () => {
    if (!selectedFile) return;
    setDraftBiomarkers(initialDraft);
  };

  const handleCancel = () => {
    setSelectedFile(null);
    setDraftBiomarkers(null);
    setIsSubmitting(false);
  };

  const handleDraftChange = (
    index: number,
    field: keyof DraftBiomarker,
    value: string,
  ) => {
    setDraftBiomarkers((current) => {
      if (!current) return current;

      const next = [...current];
      next[index] = {
        ...next[index],
        [field]: value,
      };

      return next;
    });
  };

  const handleAddBiomarker = () => {
    setDraftBiomarkers((current) => [
      ...(current ?? []),
      {
        name: "",
        normalizedName: "",
        value: "",
        unit: "",
        referenceMin: "",
        referenceMax: "",
        status: "normal",
      },
    ]);
  };

  const handleRemoveBiomarker = (index: number) => {
    setDraftBiomarkers((current) => {
      if (!current) return current;
      return current.filter((_, i) => i !== index);
    });
  };

  const handleSaveReport = async () => {
    if (!draftBiomarkers || !selectedFile) return;

    try {
      setIsSubmitting(true);

      const createdReport = await createReport({
        sourceFileName: selectedFile.name,
        reportDate: new Date().toISOString(),
        biomarkers: draftBiomarkers.map((item) => ({
          name: item.name,
          normalizedName:
            item.normalizedName || item.name.toLowerCase().replace(/\s+/g, "_"),
          value: Number(item.value),
          unit: item.unit,
          referenceMin: item.referenceMin
            ? Number(item.referenceMin)
            : undefined,
          referenceMax: item.referenceMax
            ? Number(item.referenceMax)
            : undefined,
          status: item.status,
        })),
      });

      router.push(`/reports/${createdReport.id}`);
    } catch (error) {
      console.error(error);
      alert("Failed to save report");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <UploadHeader />

      <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <UploadDropzone
          selectedFileName={selectedFile?.name ?? null}
          onFileSelect={setSelectedFile}
        />
        <UploadSteps />
        <UploadActions
          onUpload={handleExtract}
          onCancel={handleCancel}
          isSubmitting={isSubmitting}
          isDisabled={!selectedFile}
          submitLabel="Extract Biomarkers"
        />
      </section>

      {draftBiomarkers ? (
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm text-zinc-400">Review Extracted Data</p>
              <h2 className="mt-1 text-lg font-semibold text-white">
                Check and adjust biomarkers before saving
              </h2>
              <p className="mt-2 text-sm text-zinc-500">
                Review the extracted values below and edit anything that looks
                incorrect.
              </p>
            </div>

            <button
              type="button"
              onClick={handleAddBiomarker}
              className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-zinc-600 hover:text-white"
            >
              Add Biomarker
            </button>
          </div>

          <div className="space-y-4">
            {draftBiomarkers.map((item, index) => (
              <div
                key={`${item.normalizedName}-${index}`}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">
                      Biomarker #{index + 1}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">
                      Adjust extracted fields before saving this report
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleRemoveBiomarker(index)}
                    className="text-sm font-medium text-zinc-400 transition hover:text-white"
                  >
                    Remove
                  </button>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
                  <div className="xl:col-span-2">
                    <FieldLabel>Biomarker</FieldLabel>
                    <FieldInput
                      value={item.name}
                      onChange={(value) =>
                        handleDraftChange(index, "name", value)
                      }
                    />
                  </div>

                  <div>
                    <FieldLabel>Value</FieldLabel>
                    <FieldInput
                      value={item.value}
                      onChange={(value) =>
                        handleDraftChange(index, "value", value)
                      }
                    />
                  </div>

                  <div>
                    <FieldLabel>Unit</FieldLabel>
                    <FieldInput
                      value={item.unit}
                      onChange={(value) =>
                        handleDraftChange(index, "unit", value)
                      }
                    />
                  </div>

                  <div>
                    <FieldLabel>Ref Min</FieldLabel>
                    <FieldInput
                      value={item.referenceMin}
                      onChange={(value) =>
                        handleDraftChange(index, "referenceMin", value)
                      }
                    />
                  </div>

                  <div>
                    <FieldLabel>Ref Max</FieldLabel>
                    <FieldInput
                      value={item.referenceMax}
                      onChange={(value) =>
                        handleDraftChange(index, "referenceMax", value)
                      }
                    />
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
                  <div className="xl:col-span-2">
                    <FieldLabel>Status</FieldLabel>
                    <FieldInput
                      value={item.status}
                      onChange={(value) =>
                        handleDraftChange(index, "status", value)
                      }
                    />
                  </div>

                  <div className="xl:col-span-4">
                    <FieldLabel>Normalized Name</FieldLabel>
                    <FieldInput
                      value={item.normalizedName}
                      onChange={(value) =>
                        handleDraftChange(index, "normalizedName", value)
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleSaveReport}
              disabled={isSubmitting}
              className="rounded-full bg-zinc-100 px-5 py-2 text-sm font-medium text-zinc-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Saving..." : "Save Extracted Report"}
            </button>
          </div>
        </section>
      ) : null}
    </div>
  );
}
