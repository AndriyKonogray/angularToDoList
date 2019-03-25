import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Project} from '../entity/project';


@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get(`http://localhost:3000/projects`);
  }

  createProject(project: Project) {
    return this.http.post(`http://localhost:3000/projects`, project);
  }

  changeProjectName(project: Project) {
    return this.http.put(`http://localhost:3000/projects/${project.id}`, project);
  }

  deleteProject(project: Project) {
    return this.http.delete(`http://localhost:3000/projects/${project.id}`);
  }
}
