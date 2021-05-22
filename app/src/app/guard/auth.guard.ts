import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router) { }

  canActivate() {

    if (this.authService.CurrentlyloggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
