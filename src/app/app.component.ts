import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ToDoList';
  selectedProject: any;
  selectedTask: any;
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

  selectTask(task) {
    this.selectedTask = task;
  }

  selectProject(project) {
    this.selectedProject = project;
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

  deleteSelectedProject() {
     this.projects.splice(this.projects.indexOf(this.selectedProject), 1);
    }

  deleteSelectedTask() {
    this.tasks.splice(this.tasks.indexOf(this.selectedTask), 1);
  }
}

