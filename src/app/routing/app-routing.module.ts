import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { CarsListComponent } from '../cars-list/cars-list.component';
import { CarComponent } from '../car/car.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cars',
    component: CarsListComponent
  },
  {
    path: 'car/:id',
    component: CarComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const RoutableComponents = [
  HomeComponent,
  CarsListComponent,
  CarComponent,
  NotFoundComponent
];
