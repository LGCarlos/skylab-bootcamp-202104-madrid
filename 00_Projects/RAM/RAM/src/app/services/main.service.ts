import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { StorageService } from './storage.service'
import { LoginService } from './login.service'
import { HttpService } from './http.service'
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators'
=======
import { StorageService } from './storage.service';
import { LoginService } from './login.service';
import { HttpService } from './http.service';

>>>>>>> features/project/RAM

@Injectable({
  providedIn: 'root'
})
export class MainService {
  currentUser = this.srvLogin.currentUser;
<<<<<<< HEAD
  url = "https://rickandmortyapi.com/api/character"
  public currentRoute: any;
  constructor(public srvHttp:HttpService, public srvStorage: StorageService, public srvLogin: LoginService, private router: Router ) { }
=======
  amIInList = false;
  url = "https://rickandmortyapi.com/api/character?page=1"
  detailsCharacter:any

  constructor(public srvHttp:HttpService, public srvStorage: StorageService, public srvLogin: LoginService ) { }
>>>>>>> features/project/RAM

  getTheAPI(url:string):any {
    return this.srvHttp.getAPI(url)
  }

  goToList(paramUrl:string){
    this.url = paramUrl;
    console.log('al main llega esta url' + paramUrl)
  }

  // watchUrlRoute(){
  //   this.router.events.pipe(filter((event:any) => event instanceof NavigationEnd))
  //     .subscribe((event:any) => {
  //       this.currentRoute = event.url;
  //       this.currentRoute = this.currentRoute.replace('/', '');
  //       console.log(this.currentRoute);
  //       this.changeColor(this.currentRoute);
  //     })
  // }

  // changeColor(route: string){
  //   if(route !== ''){
  //     const el:any = document.getElementById(route);
  //     el.style.color = 'rgb(255, 152, 0)';
  //   }
  // }

  // getCurrentRoute(){
  //   return this.currentRoute;
  // }

}
