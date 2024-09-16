export class District {
    private district?: string;

    constructor(district?: string) {
        this.district = district;
    }

    public districtName?: string;

    
    protected getEqualityComponents(): Array<any> {
        throw new Error("Method not implemented.");
    }
}
