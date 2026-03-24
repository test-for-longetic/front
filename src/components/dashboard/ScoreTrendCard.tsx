"use client";

import { Report } from '../../types/report'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getReportScore } from './getReportScore';


export function ScoreTrendCard({ reports }: { reports: Report[] }) {
  const chartData = [...reports]
    .sort(
      (a, b) =>
        new Date(a.reportDate).getTime() - new Date(b.reportDate).getTime(),
    )
    .map((report) => ({
      date: report.reportDate,
      score: getReportScore(report),
    }));

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-400">Score Trend</p>
          <h2 className="mt-1 text-lg font-semibold text-white">
            Health score over time
          </h2>
        </div>

        <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
          {reports.length} reports
        </span>
      </div>

      <div className="mt-6 h-64">
        {chartData.length === 0 ? (
          <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-zinc-800 bg-zinc-950 text-sm text-zinc-500">
            No report data yet
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
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
                domain={[0, 100]}
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
                dataKey="score"
                stroke="#ffffff"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
