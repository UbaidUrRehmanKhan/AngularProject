import { SecurityService } from './../../Security/security.service';
import { Component, OnInit } from '@angular/core';
import { TASKS } from '../../Tasks/tasks-listing-container/mockTasks';
import { AppUserAuth } from '../../auth/login/appUserAuth';

@Component({
  selector: 'app-assigned-tasks-container',
  templateUrl: './assigned-tasks-container.component.html',
  styleUrls: ['./assigned-tasks-container.component.css']
})
export class AssignedTasksContainerComponent implements OnInit {
  securityObject: AppUserAuth = null;


  constructor(private securityService: SecurityService) {
    this.securityObject = this.securityService.securityObject;
   }
  tasks = TASKS;
  ngOnInit() {
  }

}
