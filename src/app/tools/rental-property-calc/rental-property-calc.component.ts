import { Property } from './../shared/property.model';
import { Component, OnInit } from '@angular/core';
import { ToolsCalcService } from '../tools-calc.service';

@Component({
  selector: 'app-rental-property-calc',
  templateUrl: './rental-property-calc.component.html',
  styleUrls: ['./rental-property-calc.component.css']
})
export class RentalPropertyCalcComponent implements OnInit {

  propertyAddress: string;
  propertyCity: string;
  propertyState: string;
  propertyZip: string;
  imgUrl = '';
  propertyDescritpion: string;
  annualPropertyTaxes: number;
  askingPrice: number;
  repairCost: number;
  afterRepairValue: number;
  downPayment: number;
  mortgagePeriod: number;
  interestRate: number;
  closingCost: number;
  monthlyRent: number;
  annaulInsurance: number;
  maintenance: number;
  capEx: number;
  vacancy: number;
  management: number;

  constructor(private toolsCalcService: ToolsCalcService) { }

  ngOnInit() {
  }

  setPropertyAddress(event: any){
    this.propertyAddress = event.target.value;
    console.log(this.propertyAddress);
  }

  setPropertyCity(event: any){
    this.propertyCity = event.target.value;
  }

  setPropertyState(event: any){
    this.propertyState = event.target.value;
  }

  setPropertyZip(event: any){
    this.propertyZip = event.target.value;
  }

  setImgUrl(event: any) {
    this.imgUrl = event.target.value;
  }

  setAnnualPropertyTaxes(event: any) {
    this.annualPropertyTaxes = event.target.value;
  }

  setPropertyDescription(event: any) {
    this.propertyDescritpion = event.target.value;
  }

  setAaskingPrice(event: any) {
    this.askingPrice = event.target.value;
  }

  setAfterRepairValue(event: any) {
    this.afterRepairValue = event.target.value;
  }

  setRepairCost(event: any) {
    this.repairCost = event.target.value;
  }

  setDownPayment(event: any) {
    this.downPayment = event.target.value;
  }

  setMortgagePeriod(event: any) {
    this.mortgagePeriod = event.target.value;
  }

  setInterestRate(event: any) {
    this.interestRate = event.target.value;
  }

  setClosingCost(event: any) {
    this.closingCost = event.target.value;
  }

  setMonthlyRent(event: any) {
    this.monthlyRent = event.target.value;
  }

  setAnnualInsurance(event: any) {
    this.annaulInsurance = event.target.value;
  }

  setMaintenane(event: any){
    this.maintenance = event.target.value;
  }

  setCapEx(event: any){
    this.capEx = event.target.value;
  }

  setVacancyRate(event: any){
    this.vacancy = event.target.value;
  }

  setManagement(event: any){
    this.management = event.target.value;
  }

  calculateMonthlyMortgagePayment() {
    var loanAmount = this.askingPrice * (1 - this.downPayment / 100);
    return this.toolsCalcService.calculateMortgagePayment(loanAmount, this.interestRate, this.mortgagePeriod);
  }

  calculate() {
    var monthlyInsurance = this.annaulInsurance / 12;

    this.toolsCalcService.setProperty(this.propertyAddress, this.propertyCity, this.propertyState, this.propertyZip,
      this.annualPropertyTaxes, this.imgUrl, this.propertyDescritpion);
    this.toolsCalcService.setMortgageInfo(this.askingPrice, this.repairCost, this.afterRepairValue, 
      this.downPayment, this.mortgagePeriod, this.interestRate, this.closingCost);
    this.toolsCalcService.setRentalInfo(this.monthlyRent, monthlyInsurance, this.maintenance, 
      this.capEx, this.vacancy, this.management);
  }

}
