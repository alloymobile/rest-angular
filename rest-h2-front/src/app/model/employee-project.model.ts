import { Project } from './project.model';
import { Employee } from './employee.model';

export class EmployeeProject {
    id?: number;
    employee: Employee;
    project: Project;
}
