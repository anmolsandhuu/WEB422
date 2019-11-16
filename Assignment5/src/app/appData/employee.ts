import { Position } from './position';

export class Employee {
    // tslint:disable-next-line: variable-name
    _id: string;
    FirstName: string;
    LastName: string;
    AddressStreet: string;
    AddressState: string;
    AddressCity: string;
    AddressZip: string;
    PhoneNum: string;
    Extension: number;
    Position: Position;
    HireDate: string;
    SalaryBonus: number;
    // tslint:disable-next-line: variable-name
    __v: number;
}
