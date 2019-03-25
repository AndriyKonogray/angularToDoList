import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Project} from '../entity/project';
import {Observable} from 'rxjs';


@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>((`http://localhost:3000/projects`));
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`http://localhost:3000/projects`, project);
  }

  changeProjectName(project: Project): Observable<Project> {
    return this.http.put<Project>(`http://localhost:3000/projects/${project.id}`, project);
  }

  deleteProject(project: Project): Observable<Project> {
    return this.http.delete<Project>(`http://localhost:3000/projects/${project.id}`);
  }
}
