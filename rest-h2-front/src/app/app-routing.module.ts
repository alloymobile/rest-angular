import { AddEmployeeProjectComponent } from './employee-project/add-employee-project/add-employee-project.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { EmployeeProjectComponent } from './employee-project/employee-project.component';
import { ProjectComponent } from './project/project.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  {path:'department', component: DepartmentComponent},
  {path:'add-department', component: AddDepartmentComponent},
  {path:'employee', component: EmployeeComponent},
  {path:'add-employee', component: AddEmployeeComponent},
  {path:'project', component: ProjectComponent},
  {path:'add-project', component: AddProjectComponent},
  {path:'employee-project', component: EmployeeProjectComponent},
  {path:'add-employee-project', component: AddEmployeeProjectComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
