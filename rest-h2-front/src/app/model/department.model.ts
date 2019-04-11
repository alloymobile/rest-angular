export class Department {
    id?: number;
    name: string;
    static create(val: any){
        return new Department(val);
    }

    constructor(val: any){
        this.id = val.id;
        this.name = val.name;
    }
}
