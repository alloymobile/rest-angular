import { Department } from './../model/department.model';
import { DepartmentService } from './../department/department.service';
import { EmployeeService } from './employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeesTemp: Employee[];
  employeeTemp: Employee;
  constructor(
      private employeeService: EmployeeService
      ,private departmentService: DepartmentService
      ,private dataService: DataService) { 
  }

  ngOnInit() {
    this.dataService.employees = [];
    this.employeeService.getAllEmployee()
      .subscribe(employeeParam1 =>{      
        this.employeesTemp = employeeParam1 as Employee[];
        this.employeesTemp.forEach(employeeParam2=>{
          this.departmentService.getDepartmentById(employeeParam2.departmentId)
          .subscribe(employeeParam3 =>{
            this.employeeTemp = employeeParam2;
            this.employeeTemp.department = employeeParam3 as Department;
            this.dataService.employees.push(this.employeeTemp);
          },error =>{

          });
        });
      },error =>{
      });
  }

}
