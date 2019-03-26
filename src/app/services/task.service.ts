import { Injectable } from '@angular/core';
import {Task} from '../entity/task';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasksByProjectId(projectId): Observable<Task[]> {
    console.dir(this);
    return this.http.get<Task[]>(`http://localhost:3000/projects/${projectId}/tasks`);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`http://localhost:3000/tasks`, task);
  }

  changeTaskName(task: Task): Observable<Task> {
    return this.http.put<Task>(`http://localhost:3000/tasks/${task.id}`, task);
  }

  deleteTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(`http://localhost:3000/tasks/${task.id}`);
  }
}
