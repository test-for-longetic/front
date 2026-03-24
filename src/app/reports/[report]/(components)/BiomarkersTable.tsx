"use client";

import { useState } from "react";
import { updateBiomarker } from "@/lib/api";
import { Biomarker } from "@/types/biomarker";
import { StatusBadge } from "./StatusBadge";

function EditableBiomarkerRow({ biomarker }: { biomarker: Biomarker }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [currentValue, setCurrentValue] = useState(String(biomarker.value));
  const [currentUnit, setCurrentUnit] = useState(biomarker.unit ?? "");
  const [draftValue, setDraftValue] = useState(String(biomarker.value));
  const [draftUnit, setDraftUnit] = useState(biomarker.unit ?? "");

  const handleCancel = () => {
    setDraftValue(currentValue);
    setDraftUnit(currentUnit);
    setIsEditing(false);
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);

      const updated = await updateBiomarker(biomarker.id, {
        value: Number(draftValue),
        unit: draftUnit,
      });

      setCurrentValue(String(updated.value));
      setCurrentUnit(updated.unit ?? "");
      setDraftValue(String(updated.value));
      setDraftUnit(updated.unit ?? "");
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      alert("Failed to update biomarker");
    } finally {
      setIsSaving(false);
    }
  };

  const referenceRange =
    biomarker.referenceMin != null && biomarker.referenceMax != null
      ? `${biomarker.referenceMin} — ${biomarker.referenceMax}`
      : "—";

  return (
    <tr className="border-t border-zinc-800">
      <td className="px-4 py-4 text-sm font-medium text-white">
        {biomarker.name}
      </td>

      <td className="px-4 py-4 text-sm text-zinc-300">
        {isEditing ? (
          <input
            value={draftValue}
            onChange={(e) => setDraftValue(e.target.value)}
            className="w-24 rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white outline-none"
          />
        ) : (
          currentValue
        )}
      </td>

      <td className="px-4 py-4 text-sm text-zinc-400">
        {isEditing ? (
          <input
            value={draftUnit}
            onChange={(e) => setDraftUnit(e.target.value)}
            className="w-24 rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white outline-none"
          />
        ) : (
          currentUnit || "—"
        )}
      </td>

      <td className="px-4 py-4 text-sm text-zinc-400">{referenceRange}</td>

      <td className="px-4 py-4">
        <StatusBadge status={biomarker.status ?? "unknown"} />
      </td>

      <td className="px-4 py-4 text-right">
        {isEditing ? (
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={handleCancel}
              disabled={isSaving}
              className="text-sm font-medium text-zinc-400 transition hover:text-white disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
              className="text-sm font-medium text-white transition hover:text-zinc-300 disabled:opacity-50"
            >
              {isSaving ? "Saving..." : "Save"}
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="text-sm font-medium text-white transition hover:text-zinc-300"
          >
            Edit
          </button>
        )}
      </td>
    </tr>
  );
}

export function BiomarkersTable({ biomarkers }: { biomarkers: Biomarker[] }) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="mb-5">
        <p className="text-sm text-zinc-400">Extracted Biomarkers</p>
        <h2 className="mt-1 text-lg font-semibold text-white">
          Review and adjust values
        </h2>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-zinc-800">
        <table className="min-w-full border-collapse">
          <thead className="bg-zinc-950">
            <tr className="text-left">
              <th className="px-4 py-3 text-xs font-medium uppercase tracking-wide text-zinc-500">
                Biomarker
              </th>
              <th className="px-4 py-3 text-xs font-medium uppercase tracking-wide text-zinc-500">
                Value
              </th>
              <th className="px-4 py-3 text-xs font-medium uppercase tracking-wide text-zinc-500">
                Unit
              </th>
              <th className="px-4 py-3 text-xs font-medium uppercase tracking-wide text-zinc-500">
                Reference Range
              </th>
              <th className="px-4 py-3 text-xs font-medium uppercase tracking-wide text-zinc-500">
                Status
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wide text-zinc-500">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {biomarkers.map((biomarker) => (
              <EditableBiomarkerRow key={biomarker.id} biomarker={biomarker} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
