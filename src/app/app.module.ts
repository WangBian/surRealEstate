import { MortgageCalcComponent } from './tools/mortgage-calc/mortgage-calc.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToolsComponent } from './tools/tools.component';
import { RentalPropertyCalcComponent } from './tools/rental-property-calc/rental-property-calc.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PropertiesComponent } from './properties/properties.component';
import { RentalPropertyReportComponent } from './tools/rental-property-report/rental-property-report.component';

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
    RentalPropertyReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
