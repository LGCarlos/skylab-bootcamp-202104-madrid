import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SrcService {
name= 'Adan'
  constructor() { }
  getName():string{
   return this.name
  }
}
