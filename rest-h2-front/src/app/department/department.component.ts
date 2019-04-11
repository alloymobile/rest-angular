import { DataService } from './../service/data.service';
import { Department } from './../model/department.model';
import { DepartmentService } from './department.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(
    private departmentService: DepartmentService
    ,private dataService: DataService
    ,private routerService: Router
    ) { }

  ngOnInit() {
    this.departmentService.getAllDepartment()
      .subscribe(department =>{
        this.dataService.departments = department as Department[];
      },error =>{

      });
  }
  addDepartment(){
    this.dataService.department = {id:0,name:''};
    this.routerService.navigate(["/add-department"]);
  }

  updateDepartment(department: Department){
    this.dataService.department = department;
    this.routerService.navigate(["/add-department"]);
  }
  deleteDepartment(id: number, department: Department){
    this.departmentService.deleteDepartment(department.id)
    .subscribe(department =>{
      this.dataService.departments.splice(id,1);
    }, error=>{

    });
  }
}
