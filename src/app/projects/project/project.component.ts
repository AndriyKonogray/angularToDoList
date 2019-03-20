import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() edit;
  @Output() deleteProject = new EventEmitter();

  deleteThisProject() {
    this.deleteProject.emit();
  }
}
