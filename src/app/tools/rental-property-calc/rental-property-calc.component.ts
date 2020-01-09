import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental-property-calc',
  templateUrl: './rental-property-calc.component.html',
  styleUrls: ['./rental-property-calc.component.css']
})
export class RentalPropertyCalcComponent implements OnInit {

  imgUrl = '';
  annualPropertyTaxes: number;

  constructor() { }

  ngOnInit() {
  }

  setImgUrl(event: any) {
    this.imgUrl = event.target.value;
  }

  setAnnualPropertyTaxes(event: any){
    this.annualPropertyTaxes = event.target.value;
  }

}
