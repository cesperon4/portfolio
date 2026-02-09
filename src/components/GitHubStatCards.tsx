"use client";

import React from "react";
import { FaFolder, FaUserFriends, FaUserPlus } from "react-icons/fa";

export interface GitHubStats {
  repos: number;
  followers: number;
  following: number;
}

const statConfig: {
  key: keyof GitHubStats;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { key: "repos", label: "Repositories", icon: FaFolder },
  { key: "followers", label: "Followers", icon: FaUserFriends },
  { key: "following", label: "Following", icon: FaUserPlus },
];

interface GitHubStatCardsProps {
  stats: GitHubStats;
}

const GitHubStatCards = ({ stats }: GitHubStatCardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {statConfig.map(({ key, label, icon }) => {
        const IconComponent = icon;
        return (
        <div
          key={key}
          className="card-border rounded-xl p-5 flex items-center gap-4 transition-all duration-200 hover:border-white/15"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 text-white-50 shrink-0">
            <IconComponent className="size-6" />
          </div>
          <div className="min-w-0">
            <p className="text-2xl md:text-3xl font-semibold text-white tabular-nums">
              {stats[key]}
            </p>
            <p className="text-sm text-white-50">{label}</p>
          </div>
        </div>
        );
      })}
    </div>
  );
};

export default GitHubStatCards;
