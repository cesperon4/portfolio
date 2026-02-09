"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";

/* GitHub-style contribution intensity (green scale) */
const INTENSITY_COLORS = [
  "bg-white/[0.06]",           // 0
  "bg-emerald-500/30",        // 1
  "bg-emerald-500/55",        // 2
  "bg-emerald-500/75",        // 3
  "bg-emerald-600",           // 4
];

interface ActivityGraphProps {
  /** Grid of [week][day], values 0–4 */
  grid: number[][];
  /** Optional link to full GitHub profile */
  profileUrl?: string;
}

const ActivityGraph = ({ grid, profileUrl }: ActivityGraphProps) => {
  const weeks = grid.length;
  const days = grid[0]?.length ?? 0;

  return (
    <div className="activity-graph rounded-xl card-border p-4 md:p-6 overflow-x-auto">
      <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
        <span className="flex items-center gap-2 text-sm text-white-50">
          <FaGithub className="size-4 text-white-50 shrink-0" aria-hidden />
          Contribution activity (last {weeks} weeks)
        </span>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 text-xs text-white-50">
            <span>Less</span>
            <div className="flex gap-0.5">
              {INTENSITY_COLORS.map((c, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-sm ${c}`}
                  aria-hidden
                />
              ))}
            </div>
            <span>More</span>
          </div>
          {profileUrl && (
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium text-white-50 bg-white/10 border border-white/15 hover:bg-white/15 hover:text-white hover:border-white/25 transition-colors shrink-0"
            >
              <FaGithub className="size-3.5 shrink-0" aria-hidden />
              View full GitHub profile
            </a>
          )}
        </div>
      </div>
      <div
        className="inline-flex gap-[3px]"
        style={{ minWidth: "min(100%, 53 * 14px)" }}
        role="img"
        aria-label="GitHub contribution activity grid"
      >
        {Array.from({ length: weeks }, (_, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-[3px]">
            {Array.from({ length: days }, (_, dayIndex) => {
              const value = grid[weekIndex]?.[dayIndex] ?? 0;
              const color = INTENSITY_COLORS[Math.min(value, 4)];
              return (
                <span
                  key={dayIndex}
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-[3px] ${color} transition-colors`}
                  title={`${value} contributions`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityGraph;
