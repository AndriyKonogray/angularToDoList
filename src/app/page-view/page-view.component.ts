import { Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TaskService} from "../services/task.service";
import {Task} from "../entity/task";

@Component({
  selector: 'page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.scss']
})
export class PageViewComponent  {
  tasks: Task[] = [];
  selectedProjectId: string;
  constructor(private route: ActivatedRoute, private taskService: TaskService) {
    this.selectedProjectId = this.route.snapshot.paramMap.get(' projectId');
    this.getAllProjectTasks();
  }

  getAllProjectTasks() {
    this.taskService.getTasksByProjectId(this.selectedProjectId)
      .subscribe((tasks: Task[]) => {
        this.tasks = tasks;
      });
  }

  selectProject() {
    this.selectedProjectId = this.route.snapshot.paramMap.get(' projectId');
    this.getAllProjectTasks();
  }
}
