import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent {
  @Input() tasks;

  deleteTask(task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  updateTask(task) {
    for(let i = 0; i < this.tasks.length; i++) {
      if(this.tasks[i].id === task.id) {
        this.tasks[i] = task;
        break;
      }
    }
  }
}
