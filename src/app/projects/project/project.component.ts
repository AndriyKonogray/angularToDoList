import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() project;
  @Output() delete = new EventEmitter();
  @Output() update = new EventEmitter();

  editing: boolean = false;
  checked: boolean = false;

  deleteThisProject() {
    this.delete.emit(this.project);
  }

  saveName(event, inputName) {
    if (event.key === "Enter") {
      this.update.emit(inputName.value);
    } else if (event.key === "Escape") {
      this.update.emit();
    }
  }

  updateProject(inputName) {
    this.project.name = inputName.value;
    this.update.emit(this.project);
  }

  saveProject(event, inputName) {
    if (event.key === "Enter") {
      this.updateProject(inputName);
      this.returnInProjectList(inputName);
    } else if (event.key === "Escape") {
      this.returnInProjectList(inputName);
    }
  }

  startEditing() {
    this.editing = !this.editing;
  }

  returnInProjectList(inputName) {
    inputName.value = "";
    this.editing = false;
  }
}

