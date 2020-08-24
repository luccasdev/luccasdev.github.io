import { Component, OnInit } from '@angular/core';
import { Project } from './project-objects';
import { ProjectsService } from '../../../shared/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  readonly GIT_HUB_URL = 'https://github.com/luccasdev';

  projects: Project[] = [];


  constructor(private projectsService: ProjectsService) {
    this.projectsService.findRepositories().subscribe(repositories => {
      repositories.splice(0, 1);
      repositories.forEach(repository => {
        const project = new Project();
        project.description = repository.description;
        project.title = repository.name;
        project.countForks = repository.forks_count;
        project.countStars = repository.stargazers_count;
        project.url = repository.html_url;
        this.projects.push(project);
      });
    });
  }

  ngOnInit(): void {
  }

  openGitHubPage() {
    window.open(this.GIT_HUB_URL, '_blank');
  }

  openRepository(url: string) {
    window.open(url, '_blank');
  }
}

