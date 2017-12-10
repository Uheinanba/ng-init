import {
  Component,
  EventEmitter,
  SimpleChanges,
  Output,
  Input,
  DoCheck,
  OnChanges,
} from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnChanges, DoCheck {
  @Input() heroes;

  ngDoCheck(): void {
    // console.log(3434);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('detail onchange', changes);
  }
}
