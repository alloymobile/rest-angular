import { EmployeeProject } from './../model/employee-project.model';
import { Project } from './../model/project.model';
import { Department } from './../model/department.model';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  department: Department;
  departments: Department[];
  employee: Employee;
  employees: Employee[];
  project: Project;
  projects: Project[];
  employeeProject: EmployeeProject;
  employeeProjects: EmployeeProject[];
  constructor() {
    this.department = {id:0,name:''};
    this.employee = {id:0,name:'',email:'',departmentId:0, department: this.department};
    this.project= {id:0,name:''};
    this.employeeProject = {id:0,employee:this.employee,project:this.project};

    this.departments = [];
    this.employees = [];
    this.projects = [];
    this.employeeProjects = [];  
  }
}
