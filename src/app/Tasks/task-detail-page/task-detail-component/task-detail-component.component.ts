import { TaskModel } from './../../taskModel';
import { Component, OnInit, Input } from '@angular/core';
import { AppUserAuth } from '../../../auth/login/appUserAuth';
import { UserService } from '../../../users/user-service.service';
import { SecurityService } from '../../../Security/security.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-detail-component',
  templateUrl: './task-detail-component.component.html',
  styleUrls: ['./task-detail-component.component.css']
})
export class TaskDetailComponentComponent implements OnInit {
  @Input() task: TaskModel;
  securityObject: AppUserAuth = null;

  constructor(private userService: UserService,
    private securityService: SecurityService,
    private route: ActivatedRoute,
    private location: Location,

  ) {     this.securityObject = securityService.securityObject;
  }

  ngOnInit() {
  }

}
