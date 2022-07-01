import { Component, OnInit } from '@angular/core';
import { BuyStock, SellStock, Stock, Stocker } from './command.model';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
})
export class CommandComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let a = new Stock('中建', 1000);
    let b = new Stock('宁德时代', 3000);
    let buy = new BuyStock(a);
    let sell = new SellStock(b);
    let aStocker = new Stocker();
    aStocker.addOrder(buy).addOrder(sell).addOrder(sell);
    aStocker.doTransaction();
  }
}
