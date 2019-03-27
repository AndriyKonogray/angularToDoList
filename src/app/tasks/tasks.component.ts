import {Component, Input} from '@angular/core';
import {Task} from '../entity/task';
import {TaskService} from '../services/task.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent {

  constructor(private taskService: TaskService) {

  }

  @Input() tasks: Task[] = [];
  @Input() selectedProjectId;

  deleteTask(task) {
    this.taskService.deleteTask(task)
      .subscribe(() => {
        this.tasks.splice(this.tasks.indexOf(task), 1);
      });
  }

  addTask(taskName) {
    const newTask: Task = {name: taskName, projectId: this.selectedProjectId, done: false};
    this.taskService.createTask(newTask)
      .subscribe((createdTask) => {
        this.tasks.push(createdTask);
      });
  }

  updateTask(task) {
    this.taskService.changeTaskName(task)
      .subscribe((changedTask) => {
        this.tasks.splice(this.tasks.indexOf(task), 1, changedTask);
      });
  }
}
