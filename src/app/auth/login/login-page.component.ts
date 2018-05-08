import { SecurityService } from './../../Security/security.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AppUserAuth } from './appUserAuth';
import { AppUser } from './appUser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  securityObject: AppUserAuth; // to store the retieved user object after successful login
  user: AppUser = new AppUser(); // to get the credentials of user in login form
  SecurityObject: AppUserAuth = null;
  returnUrl: string;

  constructor(private securityService: SecurityService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  login() {
    this.securityService.login(this.user).subscribe(
      resp => {this.SecurityObject = resp;
        console.log(resp);
        if ( this.returnUrl) {
          console.log(this.returnUrl);
          this.router.navigateByUrl(this.returnUrl);
        } else {
          this.router.navigate(['dashboard']);
        }

      },
      () => {
        this.securityObject = new AppUserAuth();
        console.log('login error');
      }
    );
  }

  // it is used that if some one tries to enter any url and user is not logged in, so we will redirect to that url
  // right after login

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
  }
}
