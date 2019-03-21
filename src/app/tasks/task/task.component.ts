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
  checked: boolean = false;

   deleteThisTask() {
     this.delete.emit(this.task);
   }

   updateTask(inputName) {
     this.task.name = inputName.value;
     this.update.emit(this.task);
   }

   saveTask(event, inputName) {
     if(event.key === "Enter") {
       this.updateTask(inputName);
       this.returnInTaskList(inputName);
     }
     else if(event.key === "Escape") {
       this.returnInTaskList(inputName);
     }
   }

  checkedTask() {
    this.checked = !this.checked;
  }

  startEditing() {
    this.editing = !this.editing;
  }

  returnInTaskList(inputName) {
    inputName.value = "";
    this.editing = false;
  }
}
