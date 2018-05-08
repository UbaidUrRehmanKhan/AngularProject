import { UserService } from './../user-service.service';
import { UserModelToRegister } from './../../auth/register/UserModelToRegister';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from './../../Security/security.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { UserModel } from '../userModel';
@Component({
  selector: 'app-edit-user-page',
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.css']
})
export class EditUserPageComponent implements OnInit {
  @Input() user: UserModel; // user model is used to map the retireved user data (expectedly, here @Input() has no usage)
  // user is received form API rather than any parent component
  errorMessage = null;
  successMessage = null;

  constructor(private securityService: SecurityService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private location: Location) { }


  ngOnInit() {
    this.getUser();
  }


  // getting the data of a single user
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
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

  // back button
  goBack(): void {
    this.location.back();
  }


  // user updation function that interacts with Laravel API
  userEditing(f: NgForm): void {
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
  }
}
