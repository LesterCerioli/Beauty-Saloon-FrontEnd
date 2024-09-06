export class Telephone {
    private telephone?: string;

    public telephoneNumber: string;
    public telephoneRegion: string;

    constructor(telephoneNumber: string, telephoneRegion: string);
    constructor(telephone?: string);
    constructor(telephoneOrNumber?: string, telephoneRegion?: string) {
        if (telephoneRegion && telephoneOrNumber && Telephone.validateTelephone(telephoneOrNumber)) {
            this.telephoneNumber = telephoneOrNumber;
            this.telephoneRegion = telephoneRegion;
        } else {
            this.telephone = telephoneOrNumber;
            this.telephoneNumber = "";
            this.telephoneRegion = "";
        }
    }

    public static validateTelephone(telephone: string): boolean {
        const shortenNum = telephone.replace(/[^0-9a-zA-Z]+/g, "");

        if (telephone.length === 13) {
            console.log("The phone number is valid");
            return true;
        } else {
            console.log("The phone number is invalid");
            return false;
        }
    }

    protected getEqualityComponents(): Array<any> {
        throw new Error("Method not implemented.");
    }
}
