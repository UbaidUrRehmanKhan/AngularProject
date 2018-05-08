import { UserService } from './../../users/user-service.service';
import { UserModelToRegister } from './UserModelToRegister';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from './../../Security/security.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: UserModelToRegister; // to keep the user details for registeration/updation
  errorMessage = null;
  successMessage = null;
  newUserMode = false;
  pageHeading = '';
  // to be used for dynamic binding (currently not required)
  roles = [
    {value: 1, name: 'Admin'},
    {value: 0, name: 'User'}
  ];


  constructor(private securityService: SecurityService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  // back button
  goBack(): void {
    this.location.back();
  }



  // getting the data of a single user
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id === 0) {
      this.user = new UserModelToRegister();
      this.newUserMode = true;
      this.pageHeading = 'User Creation';
    } else {
      this.pageHeading = 'User Updation';
      this.userService.getUser(id)
      .subscribe(
        resp => {
          console.log('Response in user updation ' + resp);
          this.user = resp;

        },
        (err: HttpErrorResponse) => {
          if (err.status === 304) {
            console.log(err.error);
            this.errorMessage =  'Whoops! Error in updating user...';
          } else if (err.status === 404) {
            this.errorMessage =  'Whoops! No data is found';
          } else if (err.status === 500) {
            console.log(err.error);
            this.errorMessage =  'This E-mail is already taken.';
          } else {
            this.errorMessage = 'There is something wrong.';
          }

        }
      );
    }
  }


  // button to save the data (updation, new user)
  saveUser(f: NgForm): void {
    if (this.newUserMode === false) {
      // updating the User
      this.errorMessage = null;
      this.successMessage = null;
      console.log(this.user);
      this.user.isActive = +this.user.isActive;
      this.user.isAdmin = +this.user.isAdmin;
      console.log(f.value);
      this.userService.updateUser(this.user).subscribe(
        resp => {
          console.log('Response in user updation ' + resp);
          this.successMessage = 'User is Updated successfully.';
        },
        (err: HttpErrorResponse) => {
          if (err.status === 304) {
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
    } else {
      // new user
      this.errorMessage = null;
      this.successMessage = null;
      this.securityService.register(this.user).subscribe(
        resp => {
          console.log('Response in user creation ' + resp);
          this.successMessage = 'User is added successfully.';
          f.resetForm();
        },
        (err: HttpErrorResponse) => {
          if (err.status === 422) {
            console.log(err.error);
            this.errorMessage =  'Whoops! Error in creating user...';
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
}
