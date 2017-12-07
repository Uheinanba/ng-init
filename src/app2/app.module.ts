import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HightlightDirective } from './highlight.directive';
import { TitleComponent } from './title.componet';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, HightlightDirective, TitleComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
