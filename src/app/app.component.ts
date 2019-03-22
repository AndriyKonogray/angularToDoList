import {Component} from '@angular/core';
import {ToDoListService} from "./services/to-do-list.service";
import {Task} from "./entity/task";
import {Project} from "./entity/project";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private toDoListService: ToDoListService) {}

  title = 'ToDoList';
  selectedProjectTasks = [];
  selectedProject: any;
  projects: Project[]  = [];
  tasks: Task[] = [];
  
  selectProject(project) {
    this.selectedProject = project;
    this.formTasksForProject(project);
  }

 deleteProject(project) {
    this.toDoListService.deleteProject(project)
      .subscribe(()=> {
        for(let i=0; i < this.tasks.length; i++) {
          if(this.tasks[i].projectId === project.id) {
            this.tasks.splice(i, 1);
          }
        }
        this.projects.splice(this.projects.indexOf(project), 1);
        this.selectedProject = null;
      });
  }

  addProject(projectName) {
    let newProject = new Project(projectName, this.projects.length + 1);
    this.toDoListService.createProject(newProject)
      .subscribe((project: Project)=> {
        this.projects.push(project);
      });

  }

  getAllProjects() {
    this.toDoListService
      .getProjects()
      .subscribe((projects: Project[])=> {
        this.projects = projects;
      })
  }

  ngOnInit() {
    this.getAllProjects();
    this.getAllTasks();
  }

  updateProject(project) {
    this.toDoListService.changeProjectName(project)
      .subscribe(()=> {
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i].id === project.id) {
            this.projects[i] = project;
            break;
          }
        }
      });

  }

  getAllTasks() {
    this.toDoListService
      .getTasks()
      .subscribe((tasks: Task[])=> {
        this.tasks = tasks;
      })
  }


  deleteTask(task) {
    this.toDoListService.deleteTask(task)
      .subscribe(()=> {
        this.tasks.splice(this.tasks.indexOf(task), 1);
        this.formTasksForProject(this.selectedProject);
      });
  }

  addTask(taskName) {
    let newTask = new Task(taskName, this.selectedProject.id, this.tasks.length + 1);
    this.toDoListService.createTask(newTask)
      .subscribe((task: Task)=> {
        if(this.selectedProject != undefined || this.selectedProject != null) {
          this.tasks.push(task);
        }
        else {
          alert("Please select project for your task");
        }
        this.formTasksForProject(this.selectedProject);
      });
    }

  updateTask(task) {
    this.toDoListService.changeTaskName(task)
      .subscribe(()=> {
        for(let i = 0; i < this.tasks.length; i++) {
          if(this.tasks[i].id === task.id) {
            this.tasks[i] = task;
            this.formTasksForProject(this.selectedProject);
            break;
          }
        }
      });
  }

  formTasksForProject(project) {
    this.selectedProjectTasks = [];
    for(let i = 0; i < this.tasks.length; i++) {
      if(+this.tasks[i].projectId === project.id) {
        this.selectedProjectTasks.push(this.tasks[i]);
      }
    }
  }
}

