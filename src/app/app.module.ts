import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { SpyDirective } from './spy.dericrive';
import { DetailComponent } from './detail.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, DemoComponent, DetailComponent, SpyDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
