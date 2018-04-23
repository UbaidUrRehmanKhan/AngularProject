import { Component, OnInit } from '@angular/core';
import { RegisterUserModel } from '../../auth/register/registerUserModel';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from './../../Security/security.service';
@Component({
  selector: 'app-edit-user-page',
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.css']
})
export class EditUserPageComponent implements OnInit {

  user: RegisterUserModel = new RegisterUserModel();

  constructor(private securityService: SecurityService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
  }


  userEditing(): void {
    this.router.navigate(['dashboard']);
  }
}
