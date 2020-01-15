export class MortgageInfo {
    constructor(public price: number, public repairCost: number, public afterRepairValue: number, public downPayment: number, 
        public mortgagePeriod: number, public interestRate: number, public closingCost: number){ }
}