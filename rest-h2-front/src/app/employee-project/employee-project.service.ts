import { Injectable } from '@angular/core';
import { EmployeeProject } from './../model/employee-project.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeProjectService {

  readonly URL = 'http://localhost:8080/employee-project';
  constructor(private http: HttpClient) { }

  getAllEmployeeProject() {
    return this.http.get(this.URL);
  }

  getEmployeeProjectById(id: string) {
    return this.http.get(this.URL+ '/' + id);
  }

  addEmployeeProject(employeeProject: EmployeeProject) {
    return this.http.post(this.URL, employeeProject);
  }

  updateEmployeeProject(employeeProject: EmployeeProject) {
    return this.http.put(this.URL + '/' + employeeProject.id, employeeProject);
  }

  deleteEmployeeProject(id: string){
    return this.http.delete(this.URL + '/' + id);
  }
}
