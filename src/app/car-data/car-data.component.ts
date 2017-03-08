import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../car/car';

@Component({
  selector: 'app-car-data',
  templateUrl: './car-data.component.html',
  styleUrls: ['./car-data.component.css']
})
export class CarDataComponent implements OnInit {

  @Input() carData: Car;
  @Output() onAlertCarData = new EventEmitter();

  fireAlertCarData(e) {
    this.onAlertCarData.emit(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
