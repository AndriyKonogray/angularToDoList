import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {
  selectedProject: any;
  @Input() projects;
  @Output() select = new EventEmitter();
  @Output() delete = new EventEmitter();

  selectThisProject(project) {
    this.selectedProject = project;
    this.select.emit(project);
  }

  isSelected(project) {
    return this.selectedProject === project;
  }

  enterNewNameForProject(newName: string) {
    for(let i = 0; i < this.projects.length; i++) {
      if(this.projects[i].id === this.selectedProject.id) {
        this.selectedProject.name = newName;
        this.selectedProject = null;
        break;
      }
    }
  }

  updateProject() {

  }

  deleteProject(project) {
    this.delete.emit(project);
  }

  selectProject(project) {
    this.selectedProject = project;
    this.select.emit(project);
  }
}
