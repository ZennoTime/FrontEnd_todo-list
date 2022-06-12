import { Component, Input, OnInit, EventEmitter, Output, NgModule } from '@angular/core';
import { TodoTasks } from '../app.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent {
  @Input() todoTask?: TodoTasks; 
  @Output() onDeleteTask = new EventEmitter();
  @Output() addCompletedTask = new EventEmitter();
  
  delete(): void{
    this.onDeleteTask.emit(this.todoTask!.id as number);
  }

  addComletedTask(): void{
    this.addCompletedTask.emit(this.todoTask!.id as number);
  }

}



