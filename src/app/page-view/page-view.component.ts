import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {TaskService} from '../services/task.service';
import {Task} from '../entity/task';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.scss']
})
export class PageViewComponent implements OnInit {
  tasks: Task[] = [];

  selectedProjectId: string;
  constructor(private route: ActivatedRoute, private taskService: TaskService) {}

  ngOnInit() {
   this.route.paramMap
     .pipe(
       map( (params: ParamMap) => params.get('projectId')),
       switchMap(id => this.taskService.getTasksByProjectId(id))
     )
     .subscribe((tasks: Task[]) => {
       this.tasks = tasks;
     });
   this.route.paramMap.pipe(map((params: ParamMap) => params.get('projectId')))
      .subscribe((projectId) => {
        this.selectedProjectId = projectId;
      });
  }

  deleteProjectTasks() {
        this.tasks = [];
  }
}
