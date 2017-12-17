import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { DetailComponent } from './detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  @ViewChild(DetailComponent) num = 0;
  master = 'yuank';
  private detailComponent: DetailComponent;

  ngAfterViewInit(): void {
    console.log(this.detailComponent);
  }

  add() {
    this.master = 'ceshi';
  }
  onVoted(agreed: boolean) {
    agreed ? this.num++ : this.num--;
  }
  constructor() {}
}
