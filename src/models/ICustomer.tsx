import { Telephone } from "./Telephone";


export interface ICustomer {
    customerName?: string;
    email?: string;
    telephone: Telephone;
}