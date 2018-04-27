import { UserModelToRegister } from './UserModelToRegister';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from './../../Security/security.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: UserModelToRegister = new UserModelToRegister();
  errorMessage = null;
  successMessage = null;
  // to be used for dynamic binding (currently not required)
  roles = [
    {value: 1, name: 'Admin'},
    {value: 0, name: 'User'}
  ];


  constructor(private securityService: SecurityService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

  }



  register(f: NgForm): void {
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
