export class Project {
    id?: number;
    name: string;
    static create(val: any){
        return new Project(val);
    }
    constructor(val: any){
        this.id = val.id;
        this.name = val.name;
    }
}
