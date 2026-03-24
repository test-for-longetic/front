"use client";

import { useEffect, useState } from "react";
import { getTrends } from "@/lib/api";
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

export function TrackedTrends() {
  const [biomarker, setBiomarker] = useState("glucose");
  const [data, setData] = useState<TrendPoint[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const result = await getTrends(biomarker);
        setData(result);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [biomarker]);

  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-400">Tracked Trends</p>
          <h2 className="mt-1 text-lg font-semibold text-white">
            Biomarker trend overview
          </h2>
        </div>

        <select
          value={biomarker}
          onChange={(e) => setBiomarker(e.target.value)}
          className="rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white"
        >
          <option value="glucose">Glucose</option>
          <option value="hemoglobin">Hemoglobin</option>
          <option value="vitamin_d">Vitamin D</option>
        </select>
      </div>

      <div className="mt-6 h-64">
        {loading ? (
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
                tickFormatter={(d) =>
                  new Date(d).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                }
              />
              <YAxis />
              <Tooltip />
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