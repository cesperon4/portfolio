import type { Repo } from "@/types/github";

/** GitHub contribution-style grid: 53 weeks × 7 days, values 0–4 (intensity). Deterministic for SSR/hydration. */
function getMockActivityGrid(): number[][] {
  const WEEKS = 53;
  const DAYS = 7;
  const grid: number[][] = [];
  let seed = 42;
  for (let w = 0; w < WEEKS; w++) {
    const week: number[] = [];
    for (let d = 0; d < DAYS; d++) {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      const r = seed / 0x7fffffff;
      week.push(r < 0.65 ? Math.floor(r * 5) : 0);
    }
    grid.push(week);
  }
  return grid;
}

export const mockActivityGrid = getMockActivityGrid();

export const mockGitHubStats = {
  repos: 12,
  followers: 24,
  following: 18,
};

export const mockRepos: Repo[] = [
  {
    name: "sr_portal",
    description:
      "Interactive tool that transforms public police data from Santa Rosa, CA into maps, charts, and tables.",
    language: "TypeScript",
    stars: 12,
    forks: 3,
    defaultBranch: "main",
    updatedAt: "2024-01-15",
    repoUrl: "https://github.com/cesperon4/sr_portal",
    branches: [
      {
        name: "main",
        isDefault: true,
        lastCommitMessage: "Update readme",
        lastCommitDate: "2024-01-15",
      },
      {
        name: "develop",
        lastCommitMessage: "Add map filters",
        lastCommitDate: "2024-01-10",
      },
      {
        name: "feature/arcgis",
        lastCommitMessage: "Integrate ArcGIS layer",
        lastCommitDate: "2024-01-08",
      },
    ],
  },
  {
    name: "bawsca-portal",
    description:
      "Water conservation database for Bay Area Water Supply & Conservation Agency. Data management and reporting.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    defaultBranch: "main",
    updatedAt: "2024-02-01",
    repoUrl: "https://github.com/cesperon4/bawsca-portal",
    branches: [
      {
        name: "main",
        isDefault: true,
        lastCommitMessage: "Deploy config",
        lastCommitDate: "2024-02-01",
      },
      {
        name: "staging",
        lastCommitMessage: "Fix form validation",
        lastCommitDate: "2024-01-28",
      },
    ],
  },
  {
    name: "apply-iq",
    description:
      "AI job application tool with LLM cover letters and Notion integration.",
    language: "TypeScript",
    stars: 8,
    forks: 2,
    defaultBranch: "main",
    updatedAt: "2024-03-10",
    repoUrl: "https://github.com/cesperon4/apply-iq",
    branches: [
      {
        name: "main",
        isDefault: true,
        lastCommitMessage: "Add OLLAMA support",
        lastCommitDate: "2024-03-10",
      },
      {
        name: "feature/notion",
        lastCommitMessage: "Notion SDK integration",
        lastCommitDate: "2024-03-05",
      },
      {
        name: "fix/prompts",
        lastCommitMessage: "Tune cover letter prompts",
        lastCommitDate: "2024-03-02",
      },
    ],
  },
  {
    name: "next_portfolio",
    description:
      "Personal portfolio built with Next.js, React Three Fiber, and Tailwind.",
    language: "JavaScript",
    stars: 5,
    forks: 1,
    defaultBranch: "main",
    updatedAt: "2024-02-06",
    repoUrl: "https://github.com/cesperon4/next_portfolio",
    branches: [
      {
        name: "main",
        isDefault: true,
        lastCommitMessage: "Add GitHub section",
        lastCommitDate: "2024-02-06",
      },
      {
        name: "dev",
        lastCommitMessage: "Update contact form",
        lastCommitDate: "2024-02-05",
      },
    ],
  },
];
