import { Component, OnInit } from '@angular/core';

import { Car } from '../car/car';
import { CarService } from '../car/car.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars: Car[];
  errorMessage: string;
  showNos: Boolean = true;

  constructor(private carService: CarService) { }

  getCars(): void {
    this.carService.getCars()
      .subscribe(cars => this.cars = cars,
        error => this.errorMessage = <any>error);
  }

  toggleNos(): void {
    this.showNos = !this.showNos;
  }

  alertCarData(e) {
    alert(e.make + ' ' + e.model + ' was outputted.');
  }

  ngOnInit(): void {
    this.getCars();
  }

}
