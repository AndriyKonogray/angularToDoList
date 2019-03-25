import {Component} from '@angular/core';
import {Task} from './entity/task';
import {Project} from './entity/project';
import {ProjectService} from './services/project.service';
import {TaskService} from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private projectService: ProjectService, private taskService: TaskService) {}

  selectedProject: Project;
  tasks: Task[] = [];

  selectProject(project) {
    this.selectedProject = project;
    this.getAllProjectTasks();
  }

  getAllProjectTasks() {
    this.taskService.getTasksByProjectId(this.selectedProject.id)
      .subscribe((tasks: Task[]) => {
        this.tasks = tasks;
      });
  }
}

