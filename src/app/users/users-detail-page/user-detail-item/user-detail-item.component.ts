import { USERS } from './../../mock-users';
import { MockUserModel } from './../../mockUserModel';
import { UserService } from './../../user-service.service';
import { SecurityService } from './../../../Security/security.service';
import { AppUserAuth } from './../../../auth/login/appUserAuth';
import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../../userModel';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserModelToRegister } from '../../../auth/register/UserModelToRegister';

@Component({
  selector: 'app-user-detail-item',
  templateUrl: './user-detail-item.component.html',
  styleUrls: ['./user-detail-item.component.css']
})
export class UserDetailItemComponent implements OnInit {

  @Input() user: UserModel;
  securityObject: AppUserAuth = null;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private securityService: SecurityService) {
    this.securityObject = securityService.securityObject;
  }



  ngOnInit() {

  }


}
