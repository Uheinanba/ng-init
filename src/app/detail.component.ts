import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent {
  @Input() count: number = 0;

  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();

  inc() {
    this.count++;
    this.countChange.emit(this.count);
  }

  desc() {
    this.count--;
    this.countChange.emit(this.count);
  }
}
