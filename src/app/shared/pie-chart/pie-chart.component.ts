import { RentalPropertyReportComponent } from './../../tools/rental-property-report/rental-property-report.component';
import { ToolsCalcService } from './../../tools/tools-calc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public pieChartLabels = [];
  public pieChartData = [];
  public pieChartType = 'pie';

  public totalOperationExpenses: string;

  constructor(private toolsCalcService: ToolsCalcService, private rentalPropertyReportComponent: RentalPropertyReportComponent) { }

  ngOnInit() {
    var rentalInfo = this.toolsCalcService.getRentalInfo();
    var rent = rentalInfo.monthlyRent;
    var vacancy = rent * rentalInfo.vacancy / 100;
    var capEx = rent * rentalInfo.capEx / 100;
    var managment = rent * rentalInfo.management / 100;
    var repair = rent * rentalInfo.maintenance / 100;
    var insurance = rentalInfo.monthlyInsurance;

    var propertyInfo = this.toolsCalcService.getProperty();
    var propertyTaxes = propertyInfo.annualPropertyTax / 12;

    var monthlyPI = this.rentalPropertyReportComponent.monthlyMortgagePayment;

    this.pieChartLabels.push("Vacancy: " + this.toolsCalcService.toCurrency(vacancy.toFixed(2)));
    this.pieChartLabels.push("CapEx: " + this.toolsCalcService.toCurrency(capEx.toFixed(2)));
    this.pieChartLabels.push("Management: " + this.toolsCalcService.toCurrency(managment.toFixed(2)));
    this.pieChartLabels.push("Repair: " + this.toolsCalcService.toCurrency(repair.toFixed(2)));
    this.pieChartLabels.push("Insurance: " + this.toolsCalcService.toCurrency(insurance.toFixed(2)));
    this.pieChartLabels.push("Insurance: " + this.toolsCalcService.toCurrency(propertyTaxes.toFixed(2)));
    this.pieChartLabels.push("P&I: " + this.toolsCalcService.toCurrency(monthlyPI.toFixed(2)));

    this.pieChartData.push(vacancy);
    this.pieChartData.push(capEx);
    this.pieChartData.push(managment);
    this.pieChartData.push(repair);
    this.pieChartData.push(insurance);
    this.pieChartData.push(propertyTaxes);
    this.pieChartData.push(monthlyPI);
  }

}
