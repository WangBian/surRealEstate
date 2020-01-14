export class Property {
    constructor(public address: string, public city: string, public state: string, public zip: string,
        public monthlyPropertyTax: number, public photo: string, public description: string, public price: number,
        public repairCost: number, public afterRepairValue: number, public downPayment: number, public mortgagePeriod: number,
        public interest: number, public monthlyRent: number, public monthlyInsurance: number, public maintenance: number, 
        public capEx: number, public vacancy: number, public management: number) { }
}