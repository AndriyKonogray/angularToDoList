import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDoList';

@Input() task;
@Output() select = new EventEmitter();
}

