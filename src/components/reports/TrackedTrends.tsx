"use client";

import { useEffect, useState } from "react";
import { getBiomarkers, getTrends } from "@/lib/api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type TrendPoint = {
  date: string;
  value: number;
};

type BiomarkerOption = {
  name: string;
  normalizedName: string;
};

export function TrackedTrends() {
  const [biomarker, setBiomarker] = useState("");
  const [options, setOptions] = useState<BiomarkerOption[]>([]);
  const [data, setData] = useState<TrendPoint[]>([]);
  const [loadingOptions, setLoadingOptions] = useState(false);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    const loadOptions = async () => {
      try {
        setLoadingOptions(true);

        const result = await getBiomarkers();
        setOptions(result);

        if (result.length > 0) {
          setBiomarker(result[0].normalizedName);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingOptions(false);
      }
    };

    loadOptions();
  }, []);

  useEffect(() => {
    if (!biomarker) return;

    const loadTrends = async () => {
      try {
        setLoadingData(true);
        const result = await getTrends(biomarker);
        setData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingData(false);
      }
    };

    loadTrends();
  }, [biomarker]);

  const selectedOption = options.find(
    (option) => option.normalizedName === biomarker
  );

  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-zinc-400">Tracked Trends</p>
          <h2 className="mt-1 text-lg font-semibold text-white">
            Biomarker trend overview
          </h2>
        </div>

        <select
          value={biomarker}
          onChange={(e) => setBiomarker(e.target.value)}
          disabled={loadingOptions || options.length === 0}
          className="rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loadingOptions ? (
            <option value="">Loading biomarkers...</option>
          ) : options.length === 0 ? (
            <option value="">No biomarkers available</option>
          ) : (
            options.map((option) => (
              <option
                key={option.normalizedName}
                value={option.normalizedName}
              >
                {option.name}
              </option>
            ))
          )}
        </select>
      </div>

      <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3">
        <p className="text-xs uppercase tracking-wide text-zinc-500">
          Selected biomarker
        </p>
        <p className="mt-1 text-sm font-medium text-white">
          {selectedOption?.name ?? "—"}
        </p>
      </div>

      <div className="mt-6 h-64">
        {loadingData ? (
          <div className="flex h-full items-center justify-center text-sm text-zinc-500">
            Loading...
          </div>
        ) : data.length === 0 ? (
          <div className="flex h-full items-center justify-center text-sm text-zinc-500">
            No data yet
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis
                dataKey="date"
                tickFormatter={(date) =>
                  new Date(date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                }
                tick={{ fill: "#a1a1aa", fontSize: 12 }}
                axisLine={{ stroke: "#3f3f46" }}
                tickLine={{ stroke: "#3f3f46" }}
              />
              <YAxis
                tick={{ fill: "#a1a1aa", fontSize: 12 }}
                axisLine={{ stroke: "#3f3f46" }}
                tickLine={{ stroke: "#3f3f46" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#09090b",
                  border: "1px solid #27272a",
                  borderRadius: 12,
                  color: "#ffffff",
                }}
                labelFormatter={(date) =>
                  new Date(date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                }
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#ffffff"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </section>
  );
}