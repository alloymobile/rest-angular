import { Department } from './department.model';
export class Employee {
    id?: number;
    name: string;
    email: string;
    departmentId?: number;
    department: Department;
}
