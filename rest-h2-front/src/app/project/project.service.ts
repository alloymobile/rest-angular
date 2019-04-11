import { Injectable } from '@angular/core';
import { Project } from './../model/project.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  readonly URL = 'http://localhost:8080/project';
  constructor(private http: HttpClient) { }

  getAllProject() {
    return this.http.get(this.URL);
  }

  getProjectById(id: number) {
    return this.http.get(this.URL+ '/' + id);
  }

  addProject(project: Project) {
    return this.http.post(this.URL, project);
  }

  updateProject(project: Project) {
    return this.http.put(this.URL + '/' + project.id, project);
  }

  deleteProject(id: number){
    return this.http.delete(this.URL + '/' + id);
  }

}
