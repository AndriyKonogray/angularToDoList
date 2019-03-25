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
    if (this.newName !== '') {
      this.createNewName.emit(this.newName);
      this.newName = '';
    } else { alert('Please input some name'); }
  }
}
