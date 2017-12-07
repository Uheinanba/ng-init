import { Component, Input } from '@angular/core';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-title',
  template: `
    <h1 appHighlight>{{title}} {{subtitle}}</h1>
    <p *ngIf="user">
      <i>welcome {{user}}</i>
    </p>
  `,
})
export class TitleComponent {
  @Input() subtitle = '';
  title = 'NgModules';
  user = '';
  constructor(userService: UserService) {
    this.user = userService.userName;
  }
}
