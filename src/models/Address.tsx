


export class Address {
    constructor(
        public avenueOrStreet?: string,
        public number?: string
    ) {}

    
    equals(other: Address): boolean {
        return this.avenueOrStreet === other.avenueOrStreet && this.number === other.number;
    }
}
