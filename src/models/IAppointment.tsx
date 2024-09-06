import { IAttendant } from "./IAttendant";
import { ICustomer } from "./ICustomer";


export interface IAppointment {
    date?: Date;
    appointmentHour?: string;
    attendant?: IAttendant;
    customer?: ICustomer;
    customers: ICustomer[];
}