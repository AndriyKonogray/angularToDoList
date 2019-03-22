import {Component, EventEmitter, Input, Output} from '@angular/core';

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
  @Output() update = new EventEmitter();

  selectProject(project) {
    this.selectedProject = project;
    this.select.emit(project);
  }

  updateProject(project) {
    this.update.emit(project);
  }

  deleteProject(project) {
    this.delete.emit(project);
  }
}
