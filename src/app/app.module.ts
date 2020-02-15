import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToolsComponent } from './tools/tools.component';
import { RentalPropertyCalcComponent } from './tools/rental-property-calc/rental-property-calc.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PropertiesComponent } from './properties/properties.component';
import { RentalPropertyReportComponent } from './tools/rental-property-report/rental-property-report.component';
import { PieChartComponent } from './shared/pie-chart/pie-chart.component';

import { MortgageCalcComponent } from './tools/mortgage-calc/mortgage-calc.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { JournalsComponent } from './journals/journals.component';

import { ToolsCalcService } from './tools/tools-calc.service';
import { JournalService } from './journals/journal.service';
import { PropertiesService } from './properties/properties.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolsComponent,
    HomeComponent,
    RentalPropertyCalcComponent,
    MortgageCalcComponent,
    PageNotFoundComponent,
    PropertiesComponent,
    RentalPropertyReportComponent,
    PieChartComponent,
    AboutusComponent,
    JournalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ToolsCalcService, JournalService, PropertiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
