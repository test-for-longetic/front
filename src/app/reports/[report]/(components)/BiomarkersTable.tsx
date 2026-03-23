"use client";

import { useState } from "react";

function StatusBadge({ status }: { status: "Normal" | "High" | "Low" }) {
  const styles = {
    Normal: "border-emerald-800/60 bg-emerald-950 text-emerald-300",
    High: "border-amber-800/60 bg-amber-950 text-amber-300",
    Low: "border-sky-800/60 bg-sky-950 text-sky-300",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}

type BiomarkerRowProps = {
  name: string;
  value: string;
  unit: string;
  range: string;
  status: "Normal" | "High" | "Low";
};

function EditableBiomarkerRow({
  name,
  value,
  unit,
  range,
  status,
}: BiomarkerRowProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftValue, setDraftValue] = useState(value);
  const [draftUnit, setDraftUnit] = useState(unit);

  const handleCancel = () => {
    setDraftValue(value);
    setDraftUnit(unit);
    setIsEditing(false);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <tr className="border-t border-zinc-800">
      <td className="px-4 py-4 text-sm font-medium text-white">{name}</td>

      <td className="px-4 py-4 text-sm text-zinc-300">
        {isEditing ? (
          <input
            value={draftValue}
            onChange={(e) => setDraftValue(e.target.value)}
            className="w-24 rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white outline-none"
          />
        ) : (
          draftValue
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
          draftUnit
        )}
      </td>

      <td className="px-4 py-4 text-sm text-zinc-400">{range}</td>

      <td className="px-4 py-4">
        <StatusBadge status={status} />
      </td>

      <td className="px-4 py-4 text-right">
        {isEditing ? (
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={handleCancel}
              className="text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="text-sm font-medium text-white transition hover:text-zinc-300"
            >
              Save
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

export function BiomarkersTable() {
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
            <EditableBiomarkerRow
              name="Glucose"
              value="5.8"
              unit="mmol/L"
              range="3.9 — 5.5"
              status="High"
            />
            <EditableBiomarkerRow
              name="Hemoglobin"
              value="141"
              unit="g/L"
              range="130 — 170"
              status="Normal"
            />
            <EditableBiomarkerRow
              name="Vitamin D"
              value="22"
              unit="ng/mL"
              range="30 — 100"
              status="Low"
            />
            <EditableBiomarkerRow
              name="Cholesterol"
              value="4.9"
              unit="mmol/L"
              range="0 — 5.2"
              status="Normal"
            />
          </tbody>
        </table>
      </div>
    </section>
  );
}