import {
  Component,
  Input,
  Output,
  OnChanges,
  EventEmitter,
  SimpleChanges,
  SimpleChange,
} from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnChanges {
  private _name = '';
  @Input()
  set master(name: string) {
    this._name = (name && name.toUpperCase()) || '<no name set>';
  }
  get master(): string {
    return this._name;
  }
  @Output() onVoted = new EventEmitter<boolean>();
  voted = false;

  vote(agreed: boolean) {
    this.onVoted.emit(agreed);
    this.voted = true;
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    console.log(changes);
  }

  constructor() {}
}
