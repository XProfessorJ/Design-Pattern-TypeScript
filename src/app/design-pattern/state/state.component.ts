import { Component, OnInit } from '@angular/core';
import { Context, StartState, StopState } from './stete.mode';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
})
export class StateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let startState = new StartState();
    let stopState = new StopState();
    let context = new Context(startState);
    console.log(context.toString());
    context.setState(stopState);
    console.log(context.toString());
  }
}
