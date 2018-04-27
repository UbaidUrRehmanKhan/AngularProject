import { SecurityService } from './security.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private securityService: SecurityService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('Admin guard checked');
    if (this.securityService.securityObject.isAdmin) {
      console.log('Admin guard ture');
      return true;
    } else {
      console.log('Admin guard false');
      this.router.navigate(['login'],
         { queryParams: {returnUrl: state.url }});
      return false;
    }

  }
}
