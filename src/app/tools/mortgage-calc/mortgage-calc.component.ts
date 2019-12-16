import { Component, OnInit } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-mortgage-calc',
  templateUrl: './mortgage-calc.component.html',
  styleUrls: ['./mortgage-calc.component.css']
})
export class MortgageCalcComponent implements OnInit {

  showLoading = false;
  showResults = false;

  amount: number;
  interest: number;
  years: number;
  annualTaxes: number;
  annualInsurance: number;

  monthlyPayment: string;
  totalPayment: string;
  totalInterest: string;
  monthlyTaxes: string;
  monthlyInsurance: string;

  constructor() { }

  ngOnInit() {
  }

  calculatePayment(amount: number, interest: number, years: number, annualTaxes: number, annualInsurance: number) {
    this.showLoading = true;

    this.amount = amount;
    this.interest = interest;
    this.years = years;
    this.annualTaxes = annualTaxes;
    this.annualInsurance = annualInsurance;

    var principal = parseFloat(amount.toString());
    var calculatedInterest = parseFloat(interest.toString()) / 100 / 12;
    var calculatedPayments = parseFloat(years.toString()) * 12;

    var x = Math.pow(1 + calculatedInterest, calculatedPayments);
    var monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      this.monthlyPayment = "$ " + monthly.toFixed(2);
      this.totalPayment = (monthly * calculatedPayments).toFixed(2);
      this.totalInterest = ((monthly * calculatedPayments) - principal).toFixed(2);
    }

    this.monthlyTaxes = (parseFloat(annualTaxes.toString()) / 12).toFixed(2);
    this.monthlyInsurance = (parseFloat(annualInsurance.toString()) / 12).toFixed(2);

    this.showLoading = false;
    this.showResults = true;
  }
}
