import { Department } from './../model/department.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  readonly URL = 'http://127.0.0.1:8080/department';

  constructor(private http: HttpClient) {   }

  getAllDepartment() {
    return this.http.get(this.URL);
  }

  getDepartmentById(id: number) {
    return this.http.get(this.URL+ '/' + id);
  }

  addDepartment(department: Department) {
    return this.http.post(this.URL, department);
  }

  updateDepartment(department: Department) {
    return this.http.put(this.URL + '/' + department.id, department);
  }

  deleteDepartment(id: number){
    return this.http.delete(this.URL + '/' + id);
  }
}
