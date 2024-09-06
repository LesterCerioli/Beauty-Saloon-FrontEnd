export class Cnpj {
    private _cnpjNumber: string;

    constructor(cnpjNumber: string) {
        this._cnpjNumber = this.setCnpjNumber(cnpjNumber);
    }

    // Property to access the CNPJ number
    get cnpjNumber(): string {
        return this._cnpjNumber;
    }

    // Private method to set the CNPJ number and validate it
    private setCnpjNumber(cnpjNumber: string): string {
        if (!this.isValid(cnpjNumber)) {
            throw new Error("Invalid CNPJ Number");
        }
        return cnpjNumber;
    }

    // Method to validate the CNPJ number
    private isValid(cnpjNumber: string): boolean {
        if (!cnpjNumber || !cnpjNumber.trim()) return false;

        cnpjNumber = cnpjNumber.replace(/\D/g, '');

        if (cnpjNumber.length !== 14) return false;

        if (this.isRepeatedDigits(cnpjNumber) || !this.isValidChecksum(cnpjNumber)) {
            return false;
        }

        return true;
    }

    // Private method to check for repeated digits
    private isRepeatedDigits(cnpjNumber: string): boolean {
        return cnpjNumber.split('').every(char => char === cnpjNumber[0]);
    }

    // Private method to validate the CNPJ checksum
    private isValidChecksum(cnpjNumber: string): boolean {
        let sum = 0;
        let multiplier = 5;

        for (let i = 0; i < 12; i++) {
            sum += parseInt(cnpjNumber[i]) * multiplier;
            multiplier = multiplier === 2 ? 9 : multiplier - 1;
        }

        let remainder = sum % 11;
        const digit1 = remainder < 2 ? 0 : 11 - remainder;

        sum = 0;
        multiplier = 6;

        for (let i = 0; i < 13; i++) {
            sum += parseInt(cnpjNumber[i]) * multiplier;
            multiplier = multiplier === 2 ? 9 : multiplier - 1;
        }

        remainder = sum % 11;
        const digit2 = remainder < 2 ? 0 : 11 - remainder;

        return parseInt(cnpjNumber[12]) === digit1 && parseInt(cnpjNumber[13]) === digit2;
    }

    // Static method to implicitly convert from string to Cnpj
    static fromString(value: string): Cnpj {
        return new Cnpj(value);
    }

    // Method to explicitly convert from Cnpj to string
    toString(): string {
        return this.cnpjNumber;
    }

    // Method to get equality components
    getEqualityComponents(): Array<string> {
        return [this.cnpjNumber];
    }
}
