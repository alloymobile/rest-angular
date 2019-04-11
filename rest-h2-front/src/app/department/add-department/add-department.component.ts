import { DataService } from './../../service/data.service';
import { Department } from './../../model/department.model';
import { DepartmentService } from './../department.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  addOrUpdate: string;
  constructor(
    private departmentService: DepartmentService
    ,private dataService: DataService
    ,private routerService: Router
    ) { 
      this.dataService.department.id === 0 ? this.addOrUpdate = "Create Department" : this.addOrUpdate = "Update Department";
  }

  ngOnInit() {
  }

  addOrUpdateDepartment(){
    if(this.dataService.department.id === 0){
      this.departmentService.addDepartment(this.dataService.department)
      .subscribe(success=>{
        this.routerService.navigate(['/department']);
      },error=>{
      });
    }else{
      this.departmentService.updateDepartment(this.dataService.department)
      .subscribe(success =>{
        this.routerService.navigate(['/department']);
      },error=>{
      });
    }
  }

}
