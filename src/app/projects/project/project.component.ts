import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  @Input() project;
  @Input() selectedProject;
  @Output() delete = new EventEmitter();
  @Output() update = new EventEmitter();
  @Output() select = new EventEmitter();

  editing: boolean = false;

  isSelected(project) {
    return this.selectedProject === project;
  }


  selectProject() {
    this.select.emit(this.project);
  }


  deleteThisProject() {
    this.delete.emit(this.project);
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
