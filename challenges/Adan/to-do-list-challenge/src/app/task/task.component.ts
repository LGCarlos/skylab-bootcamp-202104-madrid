import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnChanges {
 @Input() chores:any;
 @Output() choreAdd = new EventEmitter<any>();
 chore:any;
 choreCopy:any;

 completed= false;


  constructor() { }
 
  ngOnInit(): void {
  }
  ngOnChanges(){

  }
  getChoreDetails(chore:any){
    this.chore = chore;
  }
  addChore(evt:any){
    this.choreAdd.emit(this.chores)
  }
}
