import { Property } from './../shared/property.model';
import { Component, OnInit } from '@angular/core';
import { ToolsCalcService } from '../tools-calc.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { throwError } from 'rxjs';

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
  monthlyInsurance: number;
  maintenance: number;
  capEx: number;
  vacancy: number;
  management: number;

  constructor(private toolsCalcService: ToolsCalcService) { }

  ngOnInit() {
    this.propertyAddress = this.toolsCalcService.getProperty().address;
    this.propertyCity = this.toolsCalcService.getProperty().city;
    this.propertyState = this.toolsCalcService.getProperty().state;
    this.propertyZip = this.toolsCalcService.getProperty().zip;
    this.annualPropertyTaxes = this.toolsCalcService.getProperty().annualPropertyTax;
    this.imgUrl = this.toolsCalcService.getProperty().photo;
    this.propertyDescritpion = this.toolsCalcService.getProperty().description;

    this.askingPrice = this.toolsCalcService.getMortgageInfo().price;
    this.repairCost = this.toolsCalcService.getMortgageInfo().repairCost;
    this.afterRepairValue = this.toolsCalcService.getMortgageInfo().afterRepairValue;
    this.downPayment = this.toolsCalcService.getMortgageInfo().downPayment;
    this.mortgagePeriod = this.toolsCalcService.getMortgageInfo().mortgagePeriod;
    this.interestRate = this.toolsCalcService.getMortgageInfo().interestRate;
    this.closingCost = this.toolsCalcService.getMortgageInfo().closingCost;

    this.monthlyRent = this.toolsCalcService.getRentalInfo().monthlyRent;
    this.monthlyInsurance = this.toolsCalcService.getRentalInfo().monthlyInsurance;
    this.maintenance = this.toolsCalcService.getRentalInfo().maintenance;
    this.capEx = this.toolsCalcService.getRentalInfo().capEx;
    this.vacancy = this.toolsCalcService.getRentalInfo().vacancy;
    this.management = this.toolsCalcService.getRentalInfo().management;
  }

  setPropertyAddress(event: any) {
    this.propertyAddress = event.target.value;
  }

  setPropertyCity(event: any) {
    this.propertyCity = event.target.value;
  }

  setPropertyState(event: any) {
    this.propertyState = event.target.value;
  }

  setPropertyZip(event: any) {
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

  setMonthlyInsurance(event: any) {
    this.monthlyInsurance = event.target.value;
  }

  setMaintenane(event: any) {
    this.maintenance = event.target.value;
  }

  setCapEx(event: any) {
    this.capEx = event.target.value;
  }

  setVacancyRate(event: any) {
    this.vacancy = event.target.value;
  }

  setManagement(event: any) {
    this.management = event.target.value;
  }

  calculateMonthlyMortgagePayment() {
    var loanAmount = this.askingPrice * (1 - this.downPayment / 100);
    return this.toolsCalcService.calculateMortgagePayment(loanAmount, this.interestRate, this.mortgagePeriod);
  }

  calculate() {
    if (this.validateForm()) {
      this.toolsCalcService.setProperty(this.propertyAddress, this.propertyCity, this.propertyState, this.propertyZip,
        this.annualPropertyTaxes, this.imgUrl, this.propertyDescritpion);
      this.toolsCalcService.setMortgageInfo(this.askingPrice, this.repairCost, this.afterRepairValue,
        this.downPayment, this.mortgagePeriod, this.interestRate, this.closingCost);
      this.toolsCalcService.setRentalInfo(this.monthlyRent, this.monthlyInsurance, this.maintenance,
        this.capEx, this.vacancy, this.management);
    } else {
      console.log('here');
    }
  }

  validateForm() {
    return true;
  }

}
