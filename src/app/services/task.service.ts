import { Injectable } from '@angular/core';
import {Task} from "../entity/task";
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }


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
