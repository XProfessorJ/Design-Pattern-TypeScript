import { Component, OnInit } from '@angular/core';
import { Customer, Observable } from './Observable.model';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // let i = 0;
    // let customer1 = new Customer(1);
    // let observable1 = new Observable(1);
    // let customer2 = new Customer(2);
    // customer1.subscribe(observable1);
    // customer2.subscribe(observable1);
    // setInterval(() => {
    //   i++;
    //   observable1.change(i);
    // }, 1000);
  }
}
