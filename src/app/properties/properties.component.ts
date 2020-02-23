import { Property } from './../tools/shared/property.model';
import { PropertiesService } from './properties.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  city: string;
  state: string;

  properties: Array<any>;
  property: any;

  propertiesCount: number;

  constructor(private propertiesService: PropertiesService) { }

  ngOnInit() {
    this.propertiesService.getAllProperties().then((properties: any[]) => {
      this.properties = properties.map((property) => {
        return property;
      });
    });
    this.propertiesCount = this.properties.length;
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
    this.propertiesService.getProperties(city, state).then((properties: any[]) => {
      this.properties = properties.map((property) => {
        return property;
      });
    });
    this.propertiesCount = this.properties.length;
  }
}