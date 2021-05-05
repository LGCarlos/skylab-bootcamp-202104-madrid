import { Component, OnInit, Input } from '@angular/core';
import {IAlumnos} from '../MODELS/IAlumnos'

@Component({
  selector: 'app-alumnos-list-hijo',
  templateUrl: './alumnos-list-hijo.component.html',
  styleUrls: ['./alumnos-list-hijo.component.scss']
})
export class AlumnosListHijoComponent implements OnInit {
@Input()  list:any;
nota=0;
alumno={} as IAlumnos
  constructor() { }

  ngOnInit(): void {
  }
 
storeAlumno(alumno:any){
  this.alumno = alumno;
}
getNota(evt:any){
this.nota = evt;
}

}
