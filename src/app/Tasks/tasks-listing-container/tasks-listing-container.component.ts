import { TaskModel } from './../taskModel';
import { Component, OnInit, Input } from '@angular/core';
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
  @Input() tasksArray: TaskModel[];
  @Input() remove: boolean;
  constructor(
    private router: Router,
    private securityService: SecurityService) {
    this.securityObject = this.securityService.securityObject;
  }



  ngOnInit() {
  }


  getUrl(id): void {
    console.log(id);
    console.log(this.router.url);
    const userId = +this.router.url.substr(this.router.url.lastIndexOf('/') + 1);
    if (this.router.url === '/users/' + userId && this.securityObject.isAdmin) {
      this.router.navigate(['users/' + userId + '/userTasks/' + id]);
    } else if (this.router.url === '/tasks' && this.securityObject.isAdmin) {
      this.router.navigate(['/tasks/' + id]);
    } else if (!this.securityObject.isAdmin) {
      this.router.navigate(['users/1/userTasks/1']);
    }
  }
}
