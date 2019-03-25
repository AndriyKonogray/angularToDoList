import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { TasksComponent } from './tasks/tasks.component';
import { InputFormComponent } from './input-form/input-form.component';
import { TaskComponent } from './tasks/task/task.component';
import {HttpClientModule} from '@angular/common/http';
import {ProjectService} from './services/project.service';
import {TaskService} from './services/task.service';
import { EditingItemComponent } from './editing-item/editing-item.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectComponent,
    TasksComponent,
    InputFormComponent,
    TaskComponent,
    EditingItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProjectService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }

