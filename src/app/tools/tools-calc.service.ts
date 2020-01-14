import { PropertiesComponent } from './../properties/properties.component';
import { Property } from './shared/property.model';

export class ToolsCalcService {
    private amount: number;
    private interest: number;
    private years: number;
    private monthlyPayment: number;

    private property: Property;

    calculateMortgagePayment(amount: number, interest: number, years: number) {

        this.amount = amount;
        this.interest = interest;
        this.years = years;

        var principal = parseFloat(amount.toString());
        var calculatedInterest = parseFloat(interest.toString()) / 100 / 12;
        var calculatedPayments = parseFloat(years.toString()) * 12;

        var x = Math.pow(1 + calculatedInterest, calculatedPayments);
        this.monthlyPayment = (principal * x * calculatedInterest) / (x - 1);

        return this.monthlyPayment;
    }

    toCurrency(num: string) {
        return '$ ' + num.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }

    setProperty(propertyAddress: string, propertyCity: string, propertyState: string, propertyZip: string,
        monthlyPropertyTax: number, imgUrl: string, propertyDescritpion: string, askingPrice: number, repairCost: number,
        afterRepairValue: number, downPayment: number, mortgagePeriod: number, interestRate: number, monthlyRent: number,
        monthlyInsurance: number, maintenance: number, capEx: number, vacancy: number, management: number) {
        console.log("here");
        this.property = new Property(propertyAddress, propertyCity, propertyState, propertyZip,
            monthlyPropertyTax, imgUrl, propertyDescritpion, askingPrice, repairCost,
            afterRepairValue, downPayment, mortgagePeriod, interestRate, monthlyRent,
            monthlyInsurance, maintenance, capEx, vacancy, management)
    }

    getProperty() {
        return this.property;
    }
}