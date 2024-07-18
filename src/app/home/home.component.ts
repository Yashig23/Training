import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  FavPlanet!: string;

userName: any;
  constructor(private router: Router) {}

  addEvent(e: string){
   this.FavPlanet = e;
  }
  
}
