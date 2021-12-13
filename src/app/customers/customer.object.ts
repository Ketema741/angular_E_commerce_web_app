export class Customer {
    name: string;
    age: number;
    sex: string;
    customerId: number;
    address: string;
    isLigible: boolean;
    constructor(){
        this.name= '';
        this.age= 0;
        this.sex= '';
        this.customerId=0;
        this.address= '';
        this.isLigible= true;
    }
}

export const CUSTOMERS: Customer[] = [
    { name: 'Ofi', age:20, sex: 'M', customerId: 1001,address: '4Kilo', isLigible: true},
    { name: 'Kiya', age:21, sex: 'M', customerId: 1002,address: '5Kilo', isLigible: true},
    { name: 'Ketema', age:18, sex: 'M', customerId: 1003,address: '6Kilo', isLigible: true},
    { name: 'Betsy', age:18, sex: 'F', customerId: 1004,address: 'Adama', isLigible: true},

]