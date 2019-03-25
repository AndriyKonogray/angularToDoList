import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

   @Input()  task;
   @Output() delete = new EventEmitter();
   @Output() update = new EventEmitter();

  editing: boolean = false;

   deleteThisTask() {
     this.delete.emit(this.task);
   }

   updateTask(inputName) {
     this.task.name = inputName.value;
     this.update.emit(this.task);
   }

  checkedTask() {
     this.task.done = !this.task.done;
     this.update.emit(this.task);
  }

  startEditing() {
    this.editing = !this.editing;
  }

  returnInTaskList() {
    this.editing = false;
  }
}
