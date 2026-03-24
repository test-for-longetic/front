"use client";

import { Biomarker } from "@/types/biomarker";
import { EditableBiomarkerRow } from "./EditableBiomarkerRow";


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
