import {Component} from '@angular/core';
import {Task} from '../entity/task';
import {TaskService} from '../services/task.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent {

  constructor(private taskService: TaskService, private route: ActivatedRoute) {
    this.selectedProjectId = this.route.snapshot.paramMap.get(' projectId');
    this.getAllProjectTasks();
  }

  tasks: Task[] = [];
  selectedProjectId;

  getAllProjectTasks() {
    this.taskService.getTasksByProjectId(this.selectedProjectId)
      .subscribe((tasks: Task[]) => {
        this.tasks = tasks;
      });
  }

  deleteTask(task) {
    this.taskService.deleteTask(task)
      .subscribe(() => {
        this.getAllProjectTasks();
      });
  }

  addTask(taskName) {
    const newTask: Task = {name: taskName, projectId: this.selectedProjectId};
    this.taskService.createTask(newTask)
      .subscribe(() => {
        this.getAllProjectTasks();
      });
  }

  updateTask(task) {
    this.taskService.changeTaskName(task)
      .subscribe(() => {
        this.getAllProjectTasks();
      });
  }
}
