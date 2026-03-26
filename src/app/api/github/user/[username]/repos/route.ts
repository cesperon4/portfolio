import { NextRequest, NextResponse } from "next/server";

const GITHUB_API_BASE = "https://api.github.com";

type Repo = {
  name: string;
  language: string;
  fork_count: number;
  stargazers_count: number;
  watchers_count: number;
  updated_at: string;
  branches: string[];
};

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ username: string }> },
) {
  const { username } = await params;

  console.log("username: ", username);
  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`, // GitHub auth header
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "sr-portal",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub repos" },
        { status: response.status },
      );
    }
    const data = await response.json();
    console.log("response: ", data);

    const repos = data.map((repo: Repo) => {
      return {
        name: repo.name,
        language: repo.language,
        fork_count: repo.fork_count,
        stargazers_count: repo.stargazers_count,
        watchers_count: repo.watchers_count,
        updated_at: repo.updated_at,
      };
    });

    const repo_branches = await Promise.all(
      repos.map((repo: Repo) =>
        fetch(
          `https://api.github.com/repos/${username}/${repo.name}/branches`,
          {
            headers: {
              Authorization: `token ${process.env.GITHUB_TOKEN}`, // GitHub auth header
              Accept: "application/vnd.github.v3+json",
              "User-Agent": "sr-portal",
            },
          },
        )
          .then((res) => res.json())
          .then((branchData) => {
            return { ...repo, branches: branchData };
          }),
      ),
    );

    return NextResponse.json(repo_branches);
  } catch (err) {
    console.error("[api/github/user/repos]", err);
    return NextResponse.json(
      { error: "Failed to fetch GitHub repos" },
      { status: 500 },
    );
  }
}
