import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map, scan } from 'rxjs/operators';
import {ProjectService} from "./project.service";
import {TaskService} from "./task.service";
import {Project} from "../entity/project";
import {Task} from "../entity/task";


@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  constructor(private http: HttpClient) { }

  projectService: ProjectService;
  taskService: TaskService;

  getProjects() {
    return this.http.get("http://localhost:3000/projects")
  }

  createProject(project: Project) {
    return this.http.post("http://localhost:3000/projects", project)
  }

  changeProjectName(project: Project) {
    return this.http.put(`http://localhost:3000/projects/${project.id}`, project)
  }

  deleteProject(project: Project) {
    return this.http.delete(`http://localhost:3000/projects/${project.id}`)
  }

  getTasks() {
    return this.http.get("http://localhost:3000/tasks")
  }

  createTask(task: Task) {
    return this.http.post("http://localhost:3000/tasks", task)
  }

  changeTaskName(task: Task) {
    return this.http.put(`http://localhost:3000/tasks/${task.id}`, task)
  }

  deleteTask(task: Task) {
    return this.http.delete(`http://localhost:3000/tasks/${task.id}`)
  }
}
