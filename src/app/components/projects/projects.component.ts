import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  readonly GIT_HUB_URL = 'https://github.com/luccasdev';

  projects: Project[];

  constructor() { }

  ngOnInit(): void {
  }

  openGitHubPage() {
    window.open(this.GIT_HUB_URL, '_blank');
  }
}

export class Project {
  title: string;
  description: string;
  countStars: number;
  countForks: number;
}
