import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service'


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  ram: any[] = this.srvMain.favorites;

  constructor(public srvMain:MainService){
  }

  ngOnInit(): void {
  }

}
