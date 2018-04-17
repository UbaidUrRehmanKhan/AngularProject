import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../security/security.service';
import { AppUserAuth } from '../auth/login/appUserAuth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title = 'Paul Training Company';
  securityObject: AppUserAuth = null;

  constructor(private securityService: SecurityService) {
    this.securityObject = securityService.securityObject;
  }

  logout(): void {
    this.securityService.logout();
  }

}
