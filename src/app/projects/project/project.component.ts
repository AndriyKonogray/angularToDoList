import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Project} from '../../entity/project';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() selectedProjectId: string;
  /*constructor( private route: ActivatedRoute) {
    this.selectedProjectId = this.route.snapshot.paramMap.get(' projectId');
  }*/

  @Input() project: Project;
  @Output() delete = new EventEmitter();
  @Output() update = new EventEmitter();


  /*selectProject() {
    this.selectedProjectId = this.route.snapshot.paramMap.get(' projectId');
  }*/

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

  isSelected() {
   return +this.selectedProjectId === this.project.id;
  }
}
