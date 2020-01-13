export class ToolsCalcService {
    amount: number;
    interest: number;
    years: number;
    monthlyPayment: number;

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
}