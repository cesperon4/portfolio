"use client";

import React, { useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import TitleHeader from "@/components/TitleHeader";
import RepoCard from "@/components/RepoCard";
import ActivityGraph from "@/components/ActivityGraph";
import GitHubStatCards from "@/components/GitHubStatCards";
import {
  mockRepos,
  mockActivityGrid,
  mockGitHubStats,
} from "@/constants/githubMock";

type Tab = "overview" | "repos";

const GitHubSection = () => {
  const [tab, setTab] = useState<Tab>("overview");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRepos = useMemo(() => {
    if (!searchQuery.trim()) return mockRepos;
    const q = searchQuery.trim().toLowerCase();
    return mockRepos.filter((repo) => repo.name.toLowerCase().includes(q));
  }, [searchQuery]);

  return (
    <section id="github" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <div className="flex flex-col items-center gap-5">
          <TitleHeader title="GitHub" sub="Activity and repositories" />
          <FaGithub className="size-8 text-white-50 -mt-2" aria-hidden />
        </div>

        <div className="mt-8 flex gap-1 p-1 rounded-lg bg-white/[0.04] border border-white/10 w-fit mx-auto">
          <button
            type="button"
            onClick={() => setTab("overview")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              tab === "overview"
                ? "bg-white/10 text-white"
                : "text-white-50 hover:text-white hover:bg-white/5"
            }`}
          >
            <FaGithub className="size-4 shrink-0" aria-hidden />
            Overview
          </button>
          <button
            type="button"
            onClick={() => setTab("repos")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              tab === "repos"
                ? "bg-white/10 text-white"
                : "text-white-50 hover:text-white hover:bg-white/5"
            }`}
          >
            Repositories
          </button>
        </div>

        {tab === "overview" && (
          <div className="mt-10 space-y-8 max-w-4xl mx-auto">
            <ActivityGraph
              grid={mockActivityGrid}
              profileUrl="https://github.com/cesperon4"
            />
            <GitHubStatCards stats={mockGitHubStats} />
          </div>
        )}

        {tab === "repos" && (
          <div className="mt-10">
            <div className="max-w-3xl mx-auto mb-6">
              <input
                type="search"
                placeholder="Filter by repo name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-white/25 focus:ring-1 focus:ring-white/10 transition-colors"
                aria-label="Filter repositories by name"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredRepos.map((repo) => (
                <RepoCard key={repo.name} repo={repo} />
              ))}
            </div>
            {filteredRepos.length === 0 && (
              <p className="text-center text-white-50 mt-8">
                No repositories match &quot;{searchQuery}&quot;.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubSection;
