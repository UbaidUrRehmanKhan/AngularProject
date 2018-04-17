import { SecurityService } from './security.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AdminCheckService {

  constructor(private securityService: SecurityService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.securityService.securityObject.isAdmin) {
      return true;
    } else {
      this.router.navigate(['login'],
         { queryParams: {returnUrl: state.url }});
      return false;
    }
  }

}
