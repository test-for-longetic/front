import { useState } from "react";
import { StatusBadge } from "./StatusBadge";
import { Biomarker } from "@/types/biomarker";

export function EditableBiomarkerRow({ biomarker }: { biomarker: Biomarker }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftValue, setDraftValue] = useState(String(biomarker.value));
  const [draftUnit, setDraftUnit] = useState(biomarker.unit ?? "");

  const handleCancel = () => {
    setDraftValue(String(biomarker.value));
    setDraftUnit(biomarker.unit ?? "");
    setIsEditing(false);
  };

  const handleSave = () => {
    setIsEditing(false);
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
          draftUnit || "—"
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
