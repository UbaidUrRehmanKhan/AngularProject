import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user-service.service';
import { SecurityService } from '../../../Security/security.service';
import { AppUserAuth } from '../../../auth/login/appUserAuth';

@Component({
  selector: 'app-newf-feedback-item',
  templateUrl: './newf-feedback-item.component.html',
  styleUrls: ['./newf-feedback-item.component.css']
})
export class NewfFeedbackItemComponent implements OnInit {
  securityObject: AppUserAuth = null;
  constructor(private userService: UserService,
    private securityService: SecurityService
) {this.securityObject = securityService.securityObject; }

  ngOnInit() {
  }

}
