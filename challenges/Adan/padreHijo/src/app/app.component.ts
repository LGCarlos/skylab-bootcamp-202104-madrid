import { Component } from '@angular/core';
import {IAlumnos} from './MODELS/IAlumnos'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'padreHijo';
  alumno= {} as IAlumnos;
  alumnosList: IAlumnos[] = [
    {name:'Adrian' , age: 30 , course:'Angular 1'},
    {name: 'Sara', age: 26 , course:'Angular 1'},
    {name:'Renszo' , age:34 , course:'Angular Forms'},
    {name:'Willy' , age:31 , course:'CSS is cool'},
    {name:'Aday' , age:30 , course:'Hotpink is so cool'},
    {name:'Adán' , age:24 , course:'He has face under the mask...and beauty'},
    {name:'Aday' , age:30 , course:'Hotpink is so cool'},
    {name:'Carlos' , age:26 , course:'Angular hot'},
    {name:'Angela' , age:26 , course:'Angular hot'}
  ]
}
