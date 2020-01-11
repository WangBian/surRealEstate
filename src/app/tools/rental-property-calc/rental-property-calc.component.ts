import { MortgageCalcComponent } from './../mortgage-calc/mortgage-calc.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental-property-calc',
  templateUrl: './rental-property-calc.component.html',
  styleUrls: ['./rental-property-calc.component.css']
})
export class RentalPropertyCalcComponent implements OnInit {

  mortgageCalcComponent = MortgageCalcComponent;
  imgUrl = '';
  annualPropertyTaxes: number;
  askingPrice: number;
  afterRepairValue: number;
  repairCost: number;
  downPayment: number;
  mortgageTerms: number;
  interestRate: number;
  monthlyRent: number;
  maintenancePercent: number;
  capExPercent: number;
  vacancyRate: number;
  managementPercent: number;

  constructor() { }

  ngOnInit() {
  }

  setImgUrl(event: any) {
    this.imgUrl = event.target.value;
  }

  setAnnualPropertyTaxes(event: any){
    this.annualPropertyTaxes = event.target.value;
  }

  setAaskingPrice(event: any){
    this.askingPrice = event.target.value;
  }

  setAfterRepairValue(event: any){
    this.afterRepairValue = event.target.value;
  }

  setRepairCost(event: any){
    this.repairCost = event.target.value;
  }

  setDownPayment(event: any){
    this.downPayment = event.target.value;
  }

  setMortgageTerms(event: any){
    this.mortgageTerms = event.target.value;
  }

  setIntersetRate(event: any){
    this.interestRate = event.target.value;
  }

}
