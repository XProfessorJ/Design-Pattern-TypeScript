import { Component, OnInit } from '@angular/core';
import { Sport } from './iterator.model';

@Component({
  selector: 'app-iterator',
  templateUrl: './iterator.component.html',
  styleUrls: ['./iterator.component.scss'],
})
export class IteratorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let sport = new Sport();
    let iterator = sport.getIterator();
    while (iterator.hasNext()) {
      console.log(iterator.next());
    }
  }
}
