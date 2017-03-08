import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
