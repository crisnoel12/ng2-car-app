import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Car } from './car';
import { CarService } from './car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  private car: Car;
  private startYear = 1950;
  private currentYear: number = new Date().getFullYear() + 1;
  private carYears: number[] = [];
  private errorMessage: any;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) {

    for (let i = 1950; i <= this.currentYear; i++) {
      this.carYears.push(i);
    }
  }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
        const id = +params['id'];
        this.getCar(id);
      });
  }

  getCar(id: number) {
    this.carService.getCar(id)
      .subscribe(car => this.car = car,
      error => this.errorMessage = <any>error);
  }

  goBack(): void {
    this.router.navigate(['/cars']);
  }

}
