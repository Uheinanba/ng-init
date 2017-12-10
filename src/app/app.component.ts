import {
  Component,
  ViewChild,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import { DetailComponent } from './detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit, AfterViewChecked {
  hero = '';
  heroes = [];
  @ViewChild(DetailComponent) viewChild: DetailComponent;
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked', this.viewChild);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.viewChild);
  }
  add() {
    if (this.hero) {
      this.heroes.push(this.hero);
      this.hero = '';
    }
  }
  reset() {
    this.heroes = [];
    this.hero = '';
  }
  constructor() {}
}
