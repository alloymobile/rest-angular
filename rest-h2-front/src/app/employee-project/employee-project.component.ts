import { DataService } from './../service/data.service';
import { EmployeeProjectService } from './employee-project.service';
import { EmployeeProject } from './../model/employee-project.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-project',
  templateUrl: './employee-project.component.html',
  styleUrls: ['./employee-project.component.css']
})
export class EmployeeProjectComponent implements OnInit {

  constructor(
    private employeeProjectService: EmployeeProjectService
    ,private dataService: DataService
    ) { 
  }

  ngOnInit() {
    this.employeeProjectService.getAllEmployeeProject()
      .subscribe(employeeProject =>{

      },error =>{

      });
  }
}
