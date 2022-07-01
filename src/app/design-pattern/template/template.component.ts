import { Component, OnInit } from '@angular/core';
import { LOL } from './template.model';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let game = new LOL();
    game.runGame();
  }
}
