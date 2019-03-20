import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() edit;
  @Output() deleteTask = new EventEmitter();

  deleteThisTask() {
    this.deleteTask.emit();
  }
}
