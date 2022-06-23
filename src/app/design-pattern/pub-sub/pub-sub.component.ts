import { Component, OnInit } from '@angular/core';
import { Publisher, Subscriber } from './pub-sub.model';

@Component({
  selector: 'app-pub-sub',
  templateUrl: './pub-sub.component.html',
  styleUrls: ['./pub-sub.component.scss'],
})
export class PubSubComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let subA = new Subscriber(1, 'subscribe1');
    let subB = new Subscriber(2, 'subscribe2');
    let broadCast1 = new Publisher();
    let broadCast2 = new Publisher();
    subA
      .listen(broadCast1, 'ABC', (data: any) => {
        console.log(`I am ${subA.name} ${subA.id} received info "${data}"`);
      })
      .listen(broadCast2, 'CDE', (data: any) => {
        console.log(`I am ${subA.name} ${subA.id} received info "${data}"`);
      });
    subB
      .listen(broadCast1, 'ABC', (data: any) => {
        console.log(`I am ${subB.name} ${subB.id} received info "${data}"`);
      })
      .listen(broadCast1, 'CDE', (data: any) => {
        console.log(`I am ${subB.name} ${subB.id} received info "${data}"`);
      });
    broadCast1.publish('ABC', 'Hello, this is ABC from Publisher 1');
    broadCast2.publish('CDE', 'Hello, this is CDE from Publisher 1');
  }
  
}
