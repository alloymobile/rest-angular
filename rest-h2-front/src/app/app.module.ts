import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeProjectComponent } from './employee-project/employee-project.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeService } from './employee/employee.service';
import { DataService } from './service/data.service';
import { ProjectService } from './project/project.service';
import { DepartmentService } from './department/department.service';
import { EmployeeProjectService } from './employee-project/employee-project.service';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { AddEmployeeProjectComponent } from './employee-project/add-employee-project/add-employee-project.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ProjectComponent,
    DepartmentComponent,
    EmployeeProjectComponent,
    NavbarComponent,
    AddEmployeeComponent,
    AddDepartmentComponent,
    AddProjectComponent,
    AddEmployeeProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService,DepartmentService,ProjectService,EmployeeProjectService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
