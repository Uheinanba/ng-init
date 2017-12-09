import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  initCount: number = 20;
  heroes: Hero[];

  constructor() {
    this.heroes = [new Hero('yuank', 1), new Hero('rj', 2)];
  }

  handleAdd(e): void {
    console.log(e);
    // this.heroes.push(new Hero('heimanba', 3));
  }
}
