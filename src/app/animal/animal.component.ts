import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent{
  @Input() animalName?: string;
  @Output() onAnimalDelete = new EventEmitter();

  delete(): void {
    this.onAnimalDelete.emit(this.animalName);
  }
}

