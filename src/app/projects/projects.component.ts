import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {
  selectedProject: any;
  @Input() projects;
  @Output() selectProject = new EventEmitter();

  selectThisProject(project) {
    this.selectedProject = project;
    this.selectProject.emit(project);
  }

  isSelected(project) {
    return this.selectedProject === project;
  }
}
