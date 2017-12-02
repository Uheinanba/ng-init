import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService, private router: Router) {}
  getHeroes(): void {
    this.heroService.getHeroes().then(heros => (this.heroes = heros));
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  add(name: string): void {
    name = name.trim();
    // tslint:disable-next-line:curly
    if (!name) return;
    this.heroService.create(name).then(hero => {
      console.log(hero);
      this.heroes.push(hero);
      this.selectedHero = null;
    });
  }
}
