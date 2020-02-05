import { RentalInfo } from '../shared/rentalInfo.model';
import { MortgageInfo } from '../shared/mortgageInfo.model';
import { ToolsCalcService } from './../tools-calc.service';
import { Component, OnInit } from '@angular/core';
import { Property } from '../shared/property.model';
//import * as pdfMake from 'pdfmake/build/pdfmake';
//import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-rental-property-report',
  templateUrl: './rental-property-report.component.html',
  styleUrls: ['./rental-property-report.component.css']
})
export class RentalPropertyReportComponent implements OnInit {

  property: Property;
  mortgageInfo: MortgageInfo;
  rentalInfo: RentalInfo;

  purchasePrice: string;
  purchaseClosingCost: string;
  estimatedRepairCost: string;
  totalProjectCost: string;
  afterRepairValue: string;
  downPayment: string;
  loanAmount: string;
  loanPeriod: string;
  loanInterestRate: string;
  monthlyPI: string;
  totalCashNeeded: string;
  monthlyMortgagePayment: number;

  monthlyIncome: string;
  monthlyExpenses: string;
  monthlyCashflow: string;
  cashflow: number;
  proFormaCap: string;
  NOI: string;
  ROI: string;
  purchaseCapRate: string;
  totalOperationExpenses: string;

  constructor(private toolsCalcService: ToolsCalcService) { }

  ngOnInit() {
    this.property = this.toolsCalcService.getProperty();
    this.mortgageInfo = this.toolsCalcService.getMortgageInfo();
    this.rentalInfo = this.toolsCalcService.getRentalInfo();

    var mortgageAmount = this.mortgageInfo.price * (100 - this.mortgageInfo.downPayment) / 100;
    this.monthlyMortgagePayment = this.toolsCalcService.calculateMortgagePayment(mortgageAmount,
      this.mortgageInfo.interestRate, this.mortgageInfo.mortgagePeriod);

    this.purchasePrice = this.toolsCalcService.toCurrency(this.mortgageInfo.price.toFixed(2));
    this.purchaseClosingCost = this.toolsCalcService.toCurrency(this.mortgageInfo.closingCost.toFixed(2));
    this.estimatedRepairCost = this.toolsCalcService.toCurrency(this.mortgageInfo.repairCost.toFixed(2));
    this.afterRepairValue = this.toolsCalcService.toCurrency(this.mortgageInfo.afterRepairValue.toFixed(2));
    var totalPorjectCost = this.mortgageInfo.closingCost + this.mortgageInfo.price + this.mortgageInfo.repairCost;
    this.totalProjectCost = this.toolsCalcService.toCurrency(totalPorjectCost.toFixed(2));
    this.downPayment = this.toolsCalcService.toCurrency((this.mortgageInfo.downPayment * this.mortgageInfo.price / 100).toFixed(2));
    this.loanAmount = this.toolsCalcService.toCurrency(((100 - this.mortgageInfo.downPayment) * this.mortgageInfo.price / 100).toFixed(2));
    this.loanPeriod = this.mortgageInfo.mortgagePeriod.toString() + ' years';
    this.loanInterestRate = this.mortgageInfo.interestRate.toFixed(3) + '%';
    this.monthlyPI = this.toolsCalcService.toCurrency(this.monthlyMortgagePayment.toFixed(2));

    var totalInvestment = this.mortgageInfo.price * this.mortgageInfo.downPayment / 100 + this.mortgageInfo.closingCost + this.mortgageInfo.repairCost;
    this.totalCashNeeded = this.toolsCalcService.toCurrency(totalInvestment.toFixed(2));

    this.monthlyIncome = this.toolsCalcService.toCurrency(this.rentalInfo.monthlyRent.toFixed(2));
    var monthlyExpenses = (this.property.annualPropertyTax / 12) + this.monthlyMortgagePayment + (this.rentalInfo.capEx + this.rentalInfo.maintenance + this.rentalInfo.vacancy + this.rentalInfo.management) * this.rentalInfo.monthlyRent / 100 + this.rentalInfo.monthlyInsurance;
    this.monthlyExpenses = this.toolsCalcService.toCurrency(monthlyExpenses.toFixed(2));
    this.cashflow = this.rentalInfo.monthlyRent - monthlyExpenses;
    this.monthlyCashflow = this.toolsCalcService.toCurrency(this.cashflow.toFixed(2));

    this.ROI = (this.cashflow * 12 / totalInvestment * 100).toFixed(2) + '%';

    var NOI = (this.rentalInfo.monthlyRent - monthlyExpenses + this.monthlyMortgagePayment) * 12;
    this.NOI = this.toolsCalcService.toCurrency(NOI.toFixed(2));

    this.proFormaCap = (NOI / this.mortgageInfo.afterRepairValue * 100).toFixed(2) + '%';
    this.purchaseCapRate = (NOI / this.mortgageInfo.price * 100).toFixed(2) + '%';

    this.totalOperationExpenses = this.toolsCalcService.toCurrency((monthlyExpenses - this.monthlyMortgagePayment).toFixed(2));
  }

  generatePDF() {
    //const documentDefinition = html2canvas(document.getElementById('rentalPropertyReport'));
    //pdfMake.createPdf(documentDefinition).open("Rental_Property_Analysis_Report.pdf");
    const documentDefinition = document.getElementById('rentalPropertyReport');
    html2canvas(documentDefinition).then(canvas => {
      const imgWidth = 612;
      //const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      //const heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png', 1.0);
      const pdf = new jspdf('l', 'pt', 'letter');
      pdf.addImage(contentDataURL, 'PNG', 80, 40, imgWidth, imgHeight);
      pdf.save('RPA-' + this.property.address +'.pdf');
    });

  }

}
