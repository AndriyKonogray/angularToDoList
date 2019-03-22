import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { TasksComponent } from './tasks/tasks.component';
import { InputFormComponent } from './input-form/input-form.component';
import { TaskComponent } from './tasks/task/task.component';
import {HttpClientModule} from "@angular/common/http";
import {ToDoListService} from "./services/to-do-list.service";

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectComponent,
    TasksComponent,
    InputFormComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ToDoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

