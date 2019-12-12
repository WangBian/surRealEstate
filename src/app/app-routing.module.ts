import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RentalPropertyCalcComponent } from './tools/rental-property-calc/rental-property-calc.component';
import { MortgageCalcComponent } from './tools/mortgage-calc/mortgage-calc.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'tools/mortgage-payment-calc', component: MortgageCalcComponent },
  { path: 'tools/rental-property-calc', component: RentalPropertyCalcComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
