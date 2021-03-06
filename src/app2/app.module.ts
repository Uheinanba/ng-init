import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeroService } from './hero.service';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryDataService } from './in-memory-data.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';
import { HeroFormReactiveComponent } from './reactive/hero-form-reactive.component';

import { DemoFormReactiveComponent } from './reactive/demo-form-reactive.component';


import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { EmailValidatorDirective } from './shared/email-validator.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { UserService } from './shared/user.service';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroFormComponent,
    HeroSearchComponent,
    HeroFormReactiveComponent,
    HighlightDirective,
    EmailValidatorDirective,
    DemoFormReactiveComponent,
    ForbiddenValidatorDirective,
  ],
  providers: [HeroService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
