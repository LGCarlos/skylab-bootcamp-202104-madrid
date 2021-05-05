import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IAlumnos} from '../MODELS/IAlumnos'

@Component({
  selector: 'app-alumno-details',
  templateUrl: './alumno-details.component.html',
  styleUrls: ['./alumno-details.component.scss']
})
export class AlumnoDetailsComponent implements OnInit {
  @Input() alumno= {} as IAlumnos;
  @Output() nota = new EventEmitter<number>();
 
  constructor() { }
  getRandomMark() {
    return Math.floor(Math.random()*10)
  }
  sendMark(){
    this.nota.emit(this.getRandomMark())
  }

  ngOnInit(): void {
  }

}
