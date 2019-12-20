import { PropertiesComponent } from './properties/properties.component';
import { ToolsComponent } from './tools/tools.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RentalPropertyCalcComponent } from './tools/rental-property-calc/rental-property-calc.component';
import { MortgageCalcComponent } from './tools/mortgage-calc/mortgage-calc.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'tools/mortgage-calc', component: MortgageCalcComponent },
  { path: 'tools/rental-property-calc', component: RentalPropertyCalcComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'properties', component: PropertiesComponent},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
