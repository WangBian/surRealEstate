import { ToolsCalcService } from './../tools-calc.service';
import { Component, OnInit, Output } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-mortgage-calc',
  templateUrl: './mortgage-calc.component.html',
  styleUrls: ['./mortgage-calc.component.css']
})
export class MortgageCalcComponent implements OnInit {

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

  constructor(private toolsCalcService: ToolsCalcService) { }

  ngOnInit() {
  }

  calculatePayment(amount: number, interest: number, years: number, annualTaxes: number, annualInsurance: number) {
    
    this.monthlyTaxes = this.toolsCalcService.toCurrency((parseFloat(annualTaxes.toString()) / 12).toFixed(2));
    this.monthlyInsurance = this.toolsCalcService.toCurrency((parseFloat(annualInsurance.toString()) / 12).toFixed(2));

    var calculatedInterest = parseFloat(interest.toString()) / 100 / 12;
    var calculatedPayments = parseFloat(years.toString()) * 12;
    var monthly = this.toolsCalcService.calculateMortgagePayment(amount, interest, years);

    this.monthlyPayment = this.toolsCalcService.toCurrency(monthly.toFixed(2));
    this.totalPayment = this.toolsCalcService.toCurrency((monthly * calculatedPayments).toFixed(2));
    this.totalInterest = this.toolsCalcService.toCurrency(((monthly * calculatedPayments) - amount).toFixed(2));
    this.showResults = true;
  }
}
