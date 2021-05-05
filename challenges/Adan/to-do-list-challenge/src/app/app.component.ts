import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do-list-challenge';
  chores = [
{task: 'Learn Angular', id: 1, completed: false, responsable: 'Adan', caducidad: 'antesdeayer'},
{task: 'Practice Angular', id: 2, completed: false, responsable: 'Bayardo', caducidad: 'abril'},
{task: 'Keep practicing and learning', id: 3, completed: false, responsable: 'Castillo', caducidad: 'ayer'}
  ]

}
