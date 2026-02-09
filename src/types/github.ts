export interface Branch {
  name: string;
  lastCommitMessage?: string;
  lastCommitDate?: string;
  isDefault?: boolean;
}

export interface Repo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  defaultBranch: string;
  updatedAt: string;
  repoUrl: string;
  branches: Branch[];
}
