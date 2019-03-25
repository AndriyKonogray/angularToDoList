import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from './projects/projects.component';
import {TasksComponent} from  './tasks/tasks.component';
import {PageViewComponent} from './page-view/page-view.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'project/: projectId',
    component: PageViewComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'projects',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
