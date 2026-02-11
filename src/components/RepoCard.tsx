"use client";

import React, { useState } from "react";
import {
  FaExternalLinkAlt,
  FaStar,
  FaCodeBranch,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import type { Repo } from "@/types/github";
import BranchList from "./BranchList";

/* GitHub-style language colors (bg + border accent) */
const LANGUAGE_COLORS: Record<string, { pill: string; accent: string }> = {
  TypeScript: {
    pill: "bg-[#3178c6]/25 text-[#7eb8f7] border-[#3178c6]/40",
    accent: "#3178c6",
  },
  JavaScript: {
    pill: "bg-[#f7df1e]/20 text-[#f0d84a] border-[#f7df1e]/50",
    accent: "#f7df1e",
  },
  Python: {
    pill: "bg-[#3572A5]/25 text-[#7eb8e8] border-[#3572A5]/40",
    accent: "#3572A5",
  },
  React: {
    pill: "bg-[#61dafb]/20 text-[#8ee9fc] border-[#61dafb]/40",
    accent: "#61dafb",
  },
};

const getLanguageStyle = (language: string) =>
  LANGUAGE_COLORS[language] ?? {
    pill: "bg-white/10 text-white-50 border-white/20",
    accent: "#839cb5",
  };

interface RepoCardProps {
  repo: Repo;
}

const RepoCard = ({ repo }: RepoCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const { pill: languagePillClass, accent } = getLanguageStyle(repo.language);

  return (
    <div className="repo-card card-border rounded-xl p-5 md:p-6 flex flex-col transition-all duration-200 hover:border-white/20 overflow-hidden relative">
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
        style={{ backgroundColor: accent }}
        aria-hidden
      />
      <div className="flex flex-col gap-3 flex-1 relative z-[1]">
        <div className="flex items-start justify-between gap-2">
          <a
            href={repo.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white hover:opacity-90 transition-opacity flex items-center gap-2 min-w-0 group/link"
          >
            <span className="truncate group-hover/link:underline">
              {repo.name}
            </span>
            <FaExternalLinkAlt className="size-3.5 shrink-0 text-white-50 group-hover/link:text-white" />
          </a>
          <div className="flex items-center gap-2 shrink-0">
            <span className="repo-badge flex items-center gap-1 rounded-lg bg-amber-500/15 text-amber-400/90 border border-amber-500/25 px-2.5 py-1 text-xs font-medium">
              <FaStar className="size-3.5" />
              {repo.stars}
            </span>
            <span className="repo-badge flex items-center gap-1 rounded-lg bg-violet-500/15 text-violet-300/90 border border-violet-500/25 px-2.5 py-1 text-xs font-medium">
              <FaCodeBranch className="size-3.5" />
              {repo.forks}
            </span>
          </div>
        </div>

        {repo.description && (
          <p className="text-white-50 text-sm line-clamp-2 leading-relaxed">
            {repo.description}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-2 mt-auto">
          <span
            className={`language-pill rounded-full border px-2.5 py-1 text-xs font-medium ${languagePillClass}`}
          >
            <span
              className="inline-block w-2 h-2 rounded-full mr-1.5 align-middle"
              style={{ backgroundColor: accent }}
            />
            {repo.language}
          </span>
          <span className="text-white-50/60 text-xs">
            Updated {repo.updatedAt}
          </span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="flex items-center justify-between w-full text-left text-sm text-white-50 hover:text-white transition-colors rounded-lg py-1 -mx-1 px-1 hover:bg-white/5"
        >
          <span>
            {expanded ? "Hide" : "Show"} branches
            {!expanded && (
              <span className="ml-2 text-white-50/70">
                ({repo.branches.length})
              </span>
            )}
          </span>
          {expanded ? (
            <FaChevronUp className="size-4 shrink-0" />
          ) : (
            <FaChevronDown className="size-4 shrink-0" />
          )}
        </button>

        {expanded && (
          <div className="expand-content mt-2">
            <BranchList branches={repo.branches} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RepoCard;
