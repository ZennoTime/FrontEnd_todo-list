import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './AppComponent/app.component';
import { ItemComponent } from './item/item.component';
import { CompletedTaskComponent } from './component-completed-task/component-completed-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CompletedTaskComponent
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
