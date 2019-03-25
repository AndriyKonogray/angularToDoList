import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from '../entity/project';
import {ProjectService} from '../services/project.service';


@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  constructor(private projectService: ProjectService) {}

  selectedProject: Project;
  @Output() select = new EventEmitter();
  @Output() render = new EventEmitter();
  projects: Project[] = [];

  selectProject(project) {
    this.selectedProject = project;
    this.select.emit(project);
  }

  deleteProject(project) {
    this.projectService.deleteProject(project)
      .subscribe(() => {
        this.getAllProjects();
        this.render.emit();
      });
  }

  addProject(projectName) {
    const newProject: Project = {name: projectName};
    this.projectService.createProject(newProject)
      .subscribe(() => {
        this.getAllProjects();
        this.render.emit();
      });

  }

  getAllProjects() {
    this.projectService
      .getProjects()
      .subscribe((projects: Project[]) => {
        this.projects = projects;
      });
  }

  updateProject(project) {
    this.projectService.changeProjectName(project)
      .subscribe(() => {
        this.getAllProjects();
        this.render.emit();
      });
  }

  ngOnInit() {
    this.getAllProjects();
}
}
