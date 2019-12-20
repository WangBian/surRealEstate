import { Component, OnInit } from '@angular/core';
import * as properties from '../../properties.json';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  properties: any = (properties as any).default;

  constructor() { }

  ngOnInit() {
    console.log(properties);
  }

}
