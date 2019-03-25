import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {TaskService} from '../services/task.service';
import {Task} from '../entity/task';
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.scss']
})
export class PageViewComponent implements OnInit{
  tasks: Task[] = [];
  tasks$: Task[] = [];

  selectedProjectId: string;
  constructor(private route: ActivatedRoute, private taskService: TaskService) {
    this.selectedProjectId = this.route.snapshot.paramMap.get('projectId');
    this.getAllProjectTasks();
  }

  getAllProjectTasks() {
    this.taskService.getTasksByProjectId(this.selectedProjectId)
      .subscribe((tasks: Task[]) => {
        this.tasks = tasks;
      });
  }

  selectProject() {
    this.selectedProjectId = this.route.snapshot.paramMap.get('projectId');
  }

  ngOnInit() {
    this.tasks = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.taskService.getTasksByProjectId(params.get('projectId')))
        .subscribe((tasks: Task[]) => {
          return tasks;
        })
    );
  }
}
