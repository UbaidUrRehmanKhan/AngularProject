import { Component, OnInit } from '@angular/core';
import { TASKS } from './mockTasks';
import { Router } from '@angular/router';
import { SecurityService } from '../../Security/security.service';
import { AppUserAuth } from '../../auth/login/appUserAuth';

@Component({
  selector: 'app-tasks-listing-container',
  templateUrl: './tasks-listing-container.component.html',
  styleUrls: ['./tasks-listing-container.component.css']
})
export class TasksListingContainerComponent implements OnInit {

  securityObject: AppUserAuth;
  constructor(private router: Router, private securityService: SecurityService) {
    this.securityObject = this.securityService.securityObject;
  }
  tasks = TASKS;
  ngOnInit() {
  }


  getUrl(): void {

    console.log(this.router.url);
    if (this.router.url === '/users/1' && this.securityObject.isAdmin) {
      this.router.navigate(['users/1/userTasks/1'], { queryParams: { order: 'true' }});
    } else if (this.router.url === '/tasks' && this.securityObject.isAdmin) {
      this.router.navigate(['/tasks/1'], { queryParams: { order: 'false' }});
    } else if (!this.securityObject.isAdmin) {
      this.router.navigate(['users/1/userTasks/1']);
    }
  }
}
