import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../security/security.service';
import { AppUserAuth } from '../auth/login/appUserAuth';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  securityObject: AppUserAuth = null;
  isAdmin: boolean;
  constructor(private securityService: SecurityService) {
    this.securityObject = securityService.securityObject;
    if (this.securityObject.isAdmin) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }
  ngOnInit() {
  }

}
