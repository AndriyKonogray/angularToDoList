import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent {
  newName;
  @Output() createNewName = new EventEmitter();

  addNewName() {
    console.log(this.newName);
    this.createNewName.emit(this.newName);
    this.newName = '';
  }
}
