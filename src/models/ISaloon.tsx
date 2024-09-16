import { Address } from "cluster";
import { Cnpj } from "./Cnpj";
import { Telephone } from "./Telephone";
import { District } from "./District";


export interface ISaloon {
    fantasyName?: string;
    socialReason?: string;
    cnpj: Cnpj;
    ownerName?: string;
    telephone: Telephone;
    address: Address;
    district: District;
}
