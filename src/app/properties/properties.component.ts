import { Component, OnInit, Input } from '@angular/core';
import * as properties from '../../properties.json';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  city: string;
  state: string;

  properties: any = (properties as any).default;

  constructor() { }

  ngOnInit() {
  }

  sort(order: string) {
    if (order == 'lowToHigh') {
      this.properties = this.properties.sort((a, b) => {
        if (a.price > b.price) { return 1; } else {
          return -1;
        }
      })
    }
    if (order == 'highToLow') {
      this.properties = this.properties.sort((a, b) => {
        if (a.price > b.price) { return -1; } else {
          return 1;
        }
      })
    }
  }

  search(city: string, state: string) {
    this.city = city;
    this.state = state;
  }
}