import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  addOrUpdate: string;
  constructor(
    private projectService: ProjectService
    ,private dataService: DataService
    ,private routerService: Router
    ) { 
      this.dataService.project.id === 0 ? this.addOrUpdate = "Create Project" : this.addOrUpdate = "Update Project";
  }

  ngOnInit() {
  }

  addOrUpdateProject(){
    if(this.dataService.project.id === 0){
      this.projectService.addProject(this.dataService.project)
      .subscribe(success=>{
        this.routerService.navigate(['/project']);
      },error=>{
      });
    }else{
      this.projectService.updateProject(this.dataService.project)
      .subscribe(success =>{
        this.routerService.navigate(['/project']);
      },error=>{
      });
    }
  }
}
