import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './heroes/hero-list.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, HttpModule, BrowserModule],
  declarations: [AppComponent, HeroesComponent, HeroListComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
