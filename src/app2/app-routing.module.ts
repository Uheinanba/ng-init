import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form.component';
import { HeroFormReactiveComponent } from './reactive/hero-form-reactive.component';
import { DemoFormReactiveComponent } from './reactive/demo-form-reactive.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { NgModel } from '@angular/forms/src/directives/ng_model';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'heroreactiveform',
    component: HeroFormReactiveComponent
  },
  {
    path: 'demoreactiveform',
    component: DemoFormReactiveComponent
  },
  {
    path: 'heroform',
    component: HeroFormComponent,
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent,
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
