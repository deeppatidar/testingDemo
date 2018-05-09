import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): boolean {
    console.log("Inside guard"+ this.auth.isLoggedIn());
    if (this.auth.isLoggedIn()) {
      console.log("Inside auth login");
      return true;
    } else {
      localStorage.removeItem('currentUser');
      this.router.navigate(['login']);
      return false;
    }
  }

}
