import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule, RoutableComponents } from './routing/app-routing.module';
import { CarService } from './car/car.service';
import { FilterPipe } from './filter.pipe';
import { CarDataComponent } from './car-data/car-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RoutableComponents,
    FilterPipe,
    CarDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ CarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
