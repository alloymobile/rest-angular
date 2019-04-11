import { DataService } from './../service/data.service';
import { Project } from './../model/project.model';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(
    private projectService: ProjectService
    ,private dataService: DataService
    ,private routerService: Router
    ) { }

  ngOnInit() {
    this.projectService.getAllProject()
      .subscribe(project =>{
        this.dataService.projects = project as Project[];
      },error =>{

      });
  }
  addProject(){
    this.dataService.project = {id:0,name:''};
    this.routerService.navigate(["/add-project"]);
  }

  updateProject(project: Project){
    this.dataService.project = project;
    this.routerService.navigate(["/add-project"]);
  }
  deleteProject(id: number, project: Project){
    this.projectService.deleteProject(project.id)
    .subscribe(project =>{
      this.dataService.projects.splice(id,1);
    }, error=>{

    });
  }
}
