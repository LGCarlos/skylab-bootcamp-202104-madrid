import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlumnosListComponent } from './alumnos-list/alumnos-list.component';
import { AlumnoDetailComponent } from './alumno-detail/alumno-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosListComponent,
    AlumnoDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
