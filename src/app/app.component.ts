import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <p *ngFor="let hero of heroes">
        {{hero.name}}
      </p>
    </div>
  `,
})
export class AppComponent {
  heroes: Hero[];

  constructor() {
    this.heroes = [new Hero('yuank', 1), new Hero('rj', 2)];
  }
}
