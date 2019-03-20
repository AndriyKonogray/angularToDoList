import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {
  selectedProject: any;
  @Input() projects;
  @Output() selectProj = new EventEmitter();

  selectProject(project) {
    this.selectedProject = project;
    this.selectProj.emit(project);
  }

  isSelected(project) {
    return this.selectedProject === project;
  }
}
