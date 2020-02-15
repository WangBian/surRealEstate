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

  properties: any;
  property: any;

  constructor(private propertiesService: PropertiesService) { }

  ngOnInit() {
    this.propertiesService.getJouranls().then((properties: any[]) => {
      this.properties = properties.map((property) => {
        return property;
      });
    });
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
    this.properties.filter(p => p.city === this.city && p.state === this.state);
    console.log(this.city + " " + this.state);
  }
}