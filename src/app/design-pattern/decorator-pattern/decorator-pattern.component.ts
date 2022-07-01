import { Component, OnInit } from '@angular/core';
import { Decafe, Espreso, Latte } from './decorator.model';

@Component({
  selector: 'app-decorator-pattern',
  templateUrl: './decorator-pattern.component.html',
  styleUrls: ['./decorator-pattern.component.scss'],
})
export class DecoratorPatternComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let custerom1 = new Decafe(new Espreso('jimmy'));
    custerom1 = new Decafe(custerom1);
    custerom1 = new Latte(custerom1);
    custerom1 = new Latte(custerom1);
    custerom1 = new Latte(custerom1);
    console.error(custerom1.getDescription(), custerom1.cost());
  }
}
