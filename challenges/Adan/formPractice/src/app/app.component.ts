import { Component } from '@angular/core';
import {Alumno} from './MODELS/Alumno'
import {SrcService} from '../services/src.service'
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private mainSrv: SrcService, private httpSrv:HttpService){}
  title = 'formPractice';
  url = 'https://swapi.dev/api/people/'
   model = new Alumno(this.mainSrv.getName(), 'Juarez', 50)
   data:any;
   onSubmit(){
     console.log(this.model)
   }
   getData (){
  this.httpSrv.getData(this.url).then((res:any) => {
    this.data = res['results'];
   console.log(this.data)
  })
  }
   getUrl(){
     const newUrl = prompt('introduce una nueva url')
     if(newUrl){
       this.url = newUrl
     }
   }

}
