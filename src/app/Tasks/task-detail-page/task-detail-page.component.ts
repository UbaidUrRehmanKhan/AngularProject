import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../Security/security.service';
import { UserService } from '../../users/user-service.service';
import { AppUserAuth } from '../../auth/login/appUserAuth';

@Component({
  selector: 'app-task-detail-page',
  templateUrl: './task-detail-page.component.html',
  styleUrls: ['./task-detail-page.component.css']
})
export class TaskDetailPageComponent implements OnInit {
  securityObject: AppUserAuth = null;

  constructor(private userService: UserService,
    private securityService: SecurityService) { }

  ngOnInit() {
    this.securityObject = this.securityService.securityObject;
  }

}
