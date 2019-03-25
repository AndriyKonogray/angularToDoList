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

  deleteThisProject() {
    this.delete.emit(this.project);
  }

  updateProject(inputName) {
    this.project.name = inputName.value;
    this.update.emit(this.project);
  }

  returnInProjectList() {
    this.editing = false;
  }

  startEditing() {
    this.editing = !this.editing;
  }
}
