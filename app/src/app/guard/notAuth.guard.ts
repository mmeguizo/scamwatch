import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class NotAuthGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router,
  ) { }

  canActivate() {
    if (this.authService.CurrentlyloggedIn()) {
      // this.router.navigate(['/admin/dashboard']);
      return false;
    }
    else {
      return true;
    }
  }

}
