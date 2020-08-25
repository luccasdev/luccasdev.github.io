import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GitHubRepositoryDto} from '../../app/components/projects/project-objects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private readonly gitHubAPIUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  public findRepositories(): Observable<GitHubRepositoryDto[]> {
    return this.http.get<GitHubRepositoryDto[]>(this.gitHubAPIUrl + '/luccasdev/starred?direction=asc');
  }
}
