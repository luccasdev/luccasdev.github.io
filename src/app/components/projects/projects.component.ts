import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  readonly GIT_HUB_URL = 'https://github.com/luccasdev';

  constructor() { }

  ngOnInit(): void {
  }

  openGitHubPage() {
    window.open(this.GIT_HUB_URL, '_blank');
  }
}
