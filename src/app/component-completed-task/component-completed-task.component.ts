import { Component, Input, EventEmitter, Output } from '@angular/core';
import { TodoTasks } from '../AppComponent/app.component';

@Component({
  selector: 'app-component-completed-task',
  templateUrl: './component-completed-task.component.html',
  styleUrls: ['./component-completed-task.component.css']
})

export class CompletedTaskComponent{
  @Input() todoTask?: TodoTasks;
  @Output() onDeleteTask = new EventEmitter();

  delete(): void  {
    this.onDeleteTask.emit(this.todoTask!.id as number);
  }

}
