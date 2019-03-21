import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ToDoList';
  selectedProjectTasks = [];
  selectedProject: any;
  projects = [
    {name: "read book",
    id: 1},
    {name: "read doc",
    id: 2},
    {name: "practice",
    id: 3}
  ];
  tasks = [
    {name: "task1",
    projectId: "1",
    id: 1},
    {name: "task2",
    projectId: "2",
    id: 2}
  ];

  selectProject(project) {
    this.selectedProject = project;
    this.selectedProjectTasks = [];
    for(let i = 0; i < this.tasks.length; i++) {
      if(+this.tasks[i].projectId === project.id) {
        this.selectedProjectTasks.push(this.tasks[i]);
      }
    }
  }

  deleteProject(project) {
    for(let i=0; i < this.tasks.length; i++) {
      if(this.tasks[i].projectId === project.id) {
        this.tasks.splice(i, 1);
      }
    }
    this.projects.splice(this.projects.indexOf(project), 1);
    this.selectedProject = null;
  }

  unSelectProject() {
    this.selectedProject = null;
  }


  addTask(taskName) {
    if(this.selectedProject != undefined || this.selectedProject != null) {
      this.tasks.push({
        name: taskName,
        projectId: this.selectedProject.id,
        id: this.tasks.length + 1
      });
    }
    else {
      alert("Please select project for your task");
    }
  }

  addProject(projectName) {
    this.projects.push({
      name: projectName,
      id: this.projects.length + 1
    });
  }
}

