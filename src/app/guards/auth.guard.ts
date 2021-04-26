import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  async canActivate() {
    if (localStorage.getItem('token')) {
      let res = await this.userService.findByEmail(localStorage.getItem('token')).toPromise()
      if (res.length) {
        return true;
      } else {
        return false;
      }
    } else {
      return this.router.navigate(['login']);
    }
  }
}