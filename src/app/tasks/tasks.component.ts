import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from '../entity/task';
import {TaskService} from '../services/task.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent {

  constructor(private taskService: TaskService) {}

  @Input() selectedProjectId;
  @Input() tasks;
  @Output() render = new EventEmitter();

  deleteTask(task) {
    this.taskService.deleteTask(task)
      .subscribe(() => {
        this.render.emit();
      });
  }

  addTask(taskName) {
    const newTask: Task = {name: taskName, projectId: this.selectedProjectId};
    this.taskService.createTask(newTask)
      .subscribe(() => {
        this.render.emit();
      });
  }

  updateTask(task) {
    this.taskService.changeTaskName(task)
      .subscribe(() => {
            this.render.emit();
      });
  }
}
