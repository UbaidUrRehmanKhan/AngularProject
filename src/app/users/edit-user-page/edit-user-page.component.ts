import { UserService } from './../user-service.service';
import { UserModelToRegister } from './../../auth/register/UserModelToRegister';
import { Component, OnInit } from '@angular/core';
import { RegisteredUserModel } from '../../auth/register/registeredUserModel';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from './../../Security/security.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-edit-user-page',
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.css']
})
export class EditUserPageComponent implements OnInit {

  user: UserModelToRegister = new UserModelToRegister;
  errorMessage = null;
  successMessage = null;
  constructor(private securityService: SecurityService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) { }


  ngOnInit() {
  }


  // need to work on it
  userEditing(f: NgForm): void {
    this.errorMessage = null;
    this.successMessage = null;

    this.userService.updateUser(this.user).subscribe(
      resp => {
        console.log('Response in user updation ' + resp);
        this.successMessage = 'User is updated successfully.';
        f.resetForm();
      },
      (err: HttpErrorResponse) => {
        if (err.status === 422) {
          console.log(err.error);
          this.errorMessage =  'Whoops! Error in updating user...';
        } else if (err.status === 500) {
          console.log(err.error);
          this.errorMessage =  'This E-mail is already taken.';
        } else {
          this.errorMessage = 'Woops! There is something wrong.';
        }
      }
    );
  }
}
