import { Component, OnInit } from '@angular/core';
import { RegisteredUserModel } from '../../auth/register/registeredUserModel';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from './../../Security/security.service';
@Component({
  selector: 'app-edit-user-page',
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.css']
})
export class EditUserPageComponent implements OnInit {

  user: RegisteredUserModel = new RegisteredUserModel();

  constructor(private securityService: SecurityService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
  }


  userEditing(): void {
    this.router.navigate(['dashboard']);
  }
}
