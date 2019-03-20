import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent {
  @Input() tasks;
  @Input() selectedProject;
  @Output() selectTask = new EventEmitter();
  selectedTask: any;

  selectThisTask(task) {
    this.selectedTask = task;
    this.selectTask.emit(task);
  }

  isSelected(project) {
    return this.selectedTask === project;
  }

  isThisProject(task) {
  return (this.selectedProject.id != task.projectId);
  }
}
