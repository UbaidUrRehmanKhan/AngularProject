import { USERS } from './../../mock-users';
import { MockUserModel } from './../../mockUserModel';
import { UserService } from './../../user-service.service';
import { SecurityService } from './../../../Security/security.service';
import { AppUserAuth } from './../../../auth/login/appUserAuth';
import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../../userModel';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail-item',
  templateUrl: './user-detail-item.component.html',
  styleUrls: ['./user-detail-item.component.css']
})
export class UserDetailItemComponent implements OnInit {

  user = USERS[1];

  securityObject: AppUserAuth = null;
  constructor(private userService: UserService, private securityService: SecurityService) {
    this.securityObject = securityService.securityObject;
  }

  ngOnInit() {
  }

}
