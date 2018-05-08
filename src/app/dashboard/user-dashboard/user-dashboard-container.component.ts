import { TaskService } from './../../Tasks/task.service';
import { Component, OnInit } from '@angular/core';
import { AppUserAuth } from '../../auth/login/appUserAuth';
import { SecurityService } from '../../Security/security.service';
import { TaskModel } from '../../Tasks/taskModel';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  // It is the starter page/dashboard for a user after login
  tasks: TaskModel[];
  securityObject: AppUserAuth = null;
  constructor(private securityService: SecurityService,
     private taskService: TaskService ) {
    this.securityObject = securityService.securityObject;

  }

  ngOnInit() {
    this.getTasks();
  }

  // getting all the tasks for the logged in user
  getTasks(): void {
    this.taskService.getUserTasks().subscribe(
      resp => {
        console.log(resp);
        this.tasks = resp;
        console.log('fetching all tasks in tasks list' + this.tasks);
      },
      () => {
        console.log('error in displaying tasks list');
      }
    );
  }



}
