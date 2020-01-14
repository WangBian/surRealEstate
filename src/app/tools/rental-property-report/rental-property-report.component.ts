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

  constructor(private toolsCalcService: ToolsCalcService) { }

  ngOnInit() {
    this.property = this.toolsCalcService.getProperty();
  }

}
