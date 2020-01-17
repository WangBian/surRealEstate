import { RentalInfo } from './shared/rentalInfo.model';
import { MortgageInfo } from './shared/mortgageInfo.model';
import { Property } from './shared/property.model';

export class ToolsCalcService {
    private monthlyPayment: number;

    private property = new Property(null, null, null, null, null, null, null);
    private mortgageInfo = new MortgageInfo(null, null, null, null, null, null, null);
    private rentalInfo = new RentalInfo(null, null, null, null, null, null);

    calculateMortgagePayment(amount: number, interest: number, years: number) {

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
        annualPropertyTax: number, imgUrl: string, propertyDescritpion: string) {
        this.property = new Property(propertyAddress, propertyCity, propertyState, propertyZip,
            annualPropertyTax, imgUrl, propertyDescritpion)
    }

    getProperty() {
        return this.property;
    }

    setMortgageInfo(askingPrice: number, repairCost: number,
        afterRepairValue: number, downPayment: number, mortgagePeriod: number, interestRate: number, closingCost: number){
        this.mortgageInfo = new MortgageInfo(askingPrice, repairCost, afterRepairValue, downPayment,
            mortgagePeriod, interestRate, closingCost);
    }

    getMortgageInfo(){
        return this.mortgageInfo;
    }

    setRentalInfo(monthlyRent: number, monthlyInsurance: number, maintenance: number, capEx: number, vacancy: number, management: number){
        this.rentalInfo = new RentalInfo(monthlyRent, monthlyInsurance, maintenance, capEx, vacancy, management)
    }

    getRentalInfo(){
        return this.rentalInfo;
    }
}