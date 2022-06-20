import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AUTH } from '../shared/consts/localStorage.const';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    var isLogin = localStorage.getItem(AUTH);
    
    if (!isLogin) {
      this.router.navigate(['/']);
      return false;
    } else {

      return true;
    }
  }
}
