import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero = 'Windstorm';
  readonly heroes = ['Windstorm', 'Flash', 'Hulk', 'Ice Guy'];
  heroName = '';

  constructor() {

  }

  ngOnInit() {

  }

}
