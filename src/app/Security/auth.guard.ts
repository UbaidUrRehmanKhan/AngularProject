import { SecurityService } from './security.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private securityService: SecurityService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('Auth guard checked');
    if (this.securityService.isLoggedIn()) {
      console.log('Auth guard ture');
      return true;
    } else {
      console.log('Auth guard false');
      this.router.navigate(['login'],
         { queryParams: {returnUrl: state.url }});
      return false;
    }

  }
}
