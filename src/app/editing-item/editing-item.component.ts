import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'editing-item',
  templateUrl: './editing-item.component.html',
  styleUrls: ['./editing-item.component.scss']
})
export class EditingItemComponent {
  @Input() name;
  @Output() update = new EventEmitter();
  @Output() return = new EventEmitter();

  updateItem(inputName) {
    this.update.emit(inputName);
  }

  keyUp(event, inputName) {
    if (event.key === "Enter") {
      this.updateItem(inputName);
      this.returnInList();
    } else if (event.key === "Escape") {
      this.returnInList();
    }
  }

  returnInList() {
    this.return.emit();
  }
}
