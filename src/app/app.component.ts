import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tasks: Array<TodoTasks> = [
    {id: 1, taskName: "Go to GYM"},
    {id: 2, taskName: "Go for a walk"},
  ]

  CompletedTasks: Array<TodoTasks> = []

  maxId = this.tasks.reduce((max, item) => item.id > max ? item.id : max, 0)

  addTask(myForm: NgForm) : void{
  this.maxId++;
  this.tasks.push({id: this.maxId, taskName: myForm.value.task});
  }

  idCompletedTask = 1;

  addComletedTask(id: number): void{
    this.tasks.forEach(task => {
      if (task.id === id)
      {
        this.CompletedTasks.push({id: this.idCompletedTask, taskName: task.taskName});
      }
    });

    this.idCompletedTask ++;
  }

  onDelete(id: number ): void{
    this.tasks = this.tasks.filter(task => task.id != id)
  }

  onDeleteComletedTask(id: number): void{
    this.CompletedTasks = this.CompletedTasks.filter(CompletedTasks => CompletedTasks.id != id)
  }

}

export interface TodoTasks{
  id: number;
  taskName: string;
}