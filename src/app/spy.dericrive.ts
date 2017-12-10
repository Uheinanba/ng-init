import { Directive, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: '[mySpy]' })
export class SpyDirective implements OnInit, OnDestroy {
  ngOnInit() {
    console.log('onInit');
  }

  ngOnDestroy() {
    console.log('onDestroy');
  }
}
