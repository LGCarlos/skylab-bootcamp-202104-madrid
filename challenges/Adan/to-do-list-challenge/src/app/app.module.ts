import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
