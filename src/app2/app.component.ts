import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-title [subtitle]="subtitle"></app-title>',
})
export class AppComponent {
  title = 'mini NgModule';
  subtitle = '(v1)';
}
