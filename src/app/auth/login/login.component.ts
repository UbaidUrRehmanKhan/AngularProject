import { SecurityService } from './../../security/security.service';
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

  securityObject: AppUserAuth;
  user: AppUser = new AppUser();
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

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
  }
}
