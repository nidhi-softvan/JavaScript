import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,private router:Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,) {
    console.log(this.authService.isLoggedIn);

    if (this.authService.isLoggedIn !== true) {
     
      this.router.navigate(['auth/Signin'])
    }

    // not logged in so redirect to login page with the return url
    return true
  }
}
