import { RentalInfo } from '../shared/rentalInfo.model';
import { MortgageInfo } from '../shared/mortgageInfo.model';
import { ToolsCalcService } from './../tools-calc.service';
import { Component, OnInit } from '@angular/core';
import { Property } from '../shared/property.model';

@Component({
  selector: 'app-rental-property-report',
  templateUrl: './rental-property-report.component.html',
  styleUrls: ['./rental-property-report.component.css']
})
export class RentalPropertyReportComponent implements OnInit {

  property: Property;
  mortgageInfo: MortgageInfo;
  rentalInfo: RentalInfo;

  monthlyMortgagePayment: number;
  cashflow: number;
  totalInvestment: number;
  ROI: number;

  constructor(private toolsCalcService: ToolsCalcService) { }

  ngOnInit() {
    this.property = this.toolsCalcService.getProperty();
    this.mortgageInfo = this.toolsCalcService.getMortgageInfo();
    this.rentalInfo = this.toolsCalcService.getRentalInfo();

    var mortgageAmount = this.mortgageInfo.price * (100 - this.mortgageInfo.downPayment) / 100;
    this.monthlyMortgagePayment = this.toolsCalcService.calculateMortgagePayment(mortgageAmount,
      this.mortgageInfo.interestRate, this.mortgageInfo.mortgagePeriod);

    this.cashflow = this.rentalInfo.monthlyRent - (this.monthlyMortgagePayment + this.rentalInfo.monthlyInsurance +
      this.rentalInfo.monthlyRent *
      (this.rentalInfo.maintenance + this.rentalInfo.capEx + this.rentalInfo.vacancy + this.rentalInfo.management) / 100);

    this.totalInvestment = this.mortgageInfo.price * this.mortgageInfo.downPayment / 100 + this.mortgageInfo.closingCost + this.mortgageInfo.repairCost;
    this.ROI = this.cashflow * 12 / this.totalInvestment;
  }

  downloadPDF() {

  }

}
