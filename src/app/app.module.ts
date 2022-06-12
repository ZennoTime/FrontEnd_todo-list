import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { AnimalComponent } from './animal/animal.component';
import { ComponentCompletedTaskComponent } from './component-completed-task/component-completed-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    AnimalComponent,
    ComponentCompletedTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
