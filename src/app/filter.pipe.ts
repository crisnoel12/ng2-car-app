import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cars: any[], showNos: any): any {
    if (showNos) return cars;

    return cars.filter(function(car){
      if (!car.nos) {
        return car;
      }
    });
  }

}
