import { Component, OnInit } from '@angular/core';
import { Tea } from './singleton.modle';

@Component({
  selector: 'app-sigleton',
  templateUrl: './sigleton.component.html',
  styleUrls: ['./sigleton.component.scss']
})
export class SigletonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let tea = Tea.getInstance();
  }

}
