import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../entity/task";

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent {
  @Input() tasks;
  @Output() delete = new EventEmitter();
  @Output() update = new EventEmitter();

  deleteTask(task) {
    this.delete.emit(task);
  }

  updateTask(task) {
    this.update.emit(task);
  }
}
