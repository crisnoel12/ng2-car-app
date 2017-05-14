import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Car } from './car';

@Injectable()
export class CarService {

  private carsUrl = '/assets/api/cars.json';

  constructor(private http: Http) { }

  getCars(): Observable<Car[]> {
    return this.http.get(this.carsUrl)
      .map((response: Response) => <Car[]> response.json())
      // .do(data => console.log('Cars: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getCar(id: number): Observable<Car> {
    return this.getCars()
      .map((cars: Car[]) => cars.find(car => car.id === id))
      // .do(data => console.log('Car: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
