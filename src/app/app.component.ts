import { Component } from '@angular/core';
import {} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDoList';
  selectedTask: any;
  newTaskName: any;
  tasks = [
    {name: 'read book'},
    {name: 'read doc'},
    {name: 'practice'}
  ];

  deleteTask(task) {
    this.tasks = this.tasks.filter(t => {
      return t.name != this.selectedTask;
    });
  }

  selectTask(task) {
    this.selectedTask = task;
  }

  isSelected(task) {
    return this.selectedTask === task;
  }

  addTask() {
    this.tasks.push({ name: this.newTaskName});
    this.newTaskName = '';
  }
  comleteTask() {
  }
}

