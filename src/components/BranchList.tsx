import React from "react";
import type { Branch } from "@/types/github";

interface BranchListProps {
  branches: Branch[];
}

const BranchList = ({ branches }: BranchListProps) => {
  return (
    <ul className="branch-list mt-3 rounded-lg border border-white/10 bg-white/[0.03] overflow-hidden">
      {branches.map((branch) => {
        const isMain = branch.name === "main" || branch.isDefault;
        const isFeature = branch.name.startsWith("feature/");
        const isFix = branch.name.startsWith("fix/");
        const dotColor = isMain
          ? "bg-emerald-500"
          : isFeature
            ? "bg-sky-400"
            : isFix
              ? "bg-amber-500"
              : "bg-white/40";

        return (
          <li
            key={branch.name}
            className="branch-row flex flex-wrap items-center gap-2 px-4 py-2.5 text-sm border-b border-white/5 last:border-b-0 hover:bg-white/[0.04] transition-colors"
          >
            <span className={`w-2 h-2 rounded-full shrink-0 ${dotColor}`} aria-hidden />
            <code className="font-mono text-white-50 text-xs md:text-sm">
              {branch.name}
            </code>
            {branch.isDefault && (
              <span className="rounded-md bg-emerald-500/20 text-emerald-400 px-2 py-0.5 text-xs font-medium border border-emerald-500/30">
                default
              </span>
            )}
            {branch.lastCommitMessage && (
              <span className="text-white-50/80 truncate max-w-full">
                {branch.lastCommitMessage}
              </span>
            )}
            {branch.lastCommitDate && (
              <span className="text-white-50/60 text-xs ml-auto shrink-0">
                {branch.lastCommitDate}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default BranchList;
