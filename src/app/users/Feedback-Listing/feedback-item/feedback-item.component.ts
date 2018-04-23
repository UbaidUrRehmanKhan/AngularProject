import { Component, OnInit } from '@angular/core';
import { AppUserAuth } from '../../../auth/login/appUserAuth';
import { UserService } from '../../user-service.service';
import { SecurityService } from '../../../Security/security.service';

@Component({
  selector: 'app-feedback-item',
  templateUrl: './feedback-item.component.html',
  styleUrls: ['./feedback-item.component.css']
})
export class FeedbackItemComponent implements OnInit {
  securityObject: AppUserAuth = null;
  constructor(private userService: UserService,
    private securityService: SecurityService) { }

  ngOnInit() {
    this.securityObject = this.securityService.securityObject;
  }

}
