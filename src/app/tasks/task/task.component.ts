import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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

}
