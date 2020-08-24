export class GitHubRepositoryDto {
  name: string;
  description: string;
  html_url: string;
  forks_count: number;
  stargazers_count: number;
}

export class Project {
  title: string;
  description: string;
  countStars: number;
  countForks: number;
  url: string;
}
