import { IState } from "./IState";


export interface ICity {
    cityName?: string;
    state?: IState;
    states: IState[];
}