import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {TaskService} from '../services/task.service';
import {Task} from '../entity/task';
import {map, switchMap} from 'rxjs/operators';
import {Observable} from "rxjs";

@Component({
  selector: 'page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.scss']
})
export class PageViewComponent implements OnInit {
  tasks: Task[] = [];

  projectId$: Observable<string>;
  constructor(private route: ActivatedRoute, private taskService: TaskService) {}

  ngOnInit() {
   this.projectId$ = this.route.paramMap.pipe(map((params: ParamMap) => params.get('projectId')));
   this.projectId$
      .pipe(switchMap(id => this.taskService.getTasksByProjectId(id)))
      .subscribe((tasks: Task[]) => {
        this.tasks = tasks;
      });
  }

  deleteProjectTasks() {
        this.tasks = [];
  }
}
