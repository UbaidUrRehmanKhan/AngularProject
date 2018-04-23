import { Component, OnInit } from '@angular/core';
import { AppUserAuth } from '../../../auth/login/appUserAuth';
import { UserService } from '../../../users/user-service.service';
import { SecurityService } from '../../../Security/security.service';

@Component({
  selector: 'app-task-detail-component',
  templateUrl: './task-detail-component.component.html',
  styleUrls: ['./task-detail-component.component.css']
})
export class TaskDetailComponentComponent implements OnInit {
  securityObject: AppUserAuth = null;

  constructor(private userService: UserService,
    private securityService: SecurityService

  ) {     this.securityObject = securityService.securityObject;
  }

  ngOnInit() {
  }

}
