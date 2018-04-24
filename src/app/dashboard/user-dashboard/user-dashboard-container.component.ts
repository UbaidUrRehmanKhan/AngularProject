import { Component, OnInit } from '@angular/core';
import { AppUserAuth } from '../../auth/login/appUserAuth';
import { SecurityService } from '../../Security/security.service';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  securityObject: AppUserAuth = null;


  constructor(private securityService: SecurityService) {
    this.securityObject = securityService.securityObject;

  }

  ngOnInit() {
  }

}
