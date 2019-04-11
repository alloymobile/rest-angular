import { Injectable } from '@angular/core';
import { Employee } from './../model/employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly URL = 'http://localhost:8080/employee';
  constructor(private http: HttpClient) { }

  getAllEmployee() {
    return this.http.get(this.URL);
  }

  getEmployeeById(id: string) {
    return this.http.get(this.URL+ '/' + id);
  }

  addEmployee(employee: Employee) {
    return this.http.post(this.URL, employee);
  }

  updateEmployee(employee: Employee) {
    return this.http.put(this.URL + '/' + employee.id, employee);
  }

  deleteEmployee(id: string){
    return this.http.delete(this.URL + '/' + id);
  }
}
