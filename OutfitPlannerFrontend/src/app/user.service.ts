import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public get isUserLoggedIn(): boolean {
    const userJson = localStorage.getItem('user');
    const userData = JSON.parse(userJson);
    return !!userData;
  }

  constructor(private router: Router) { }

  public async logout() {
    await this.router.navigate(['/']);
    setTimeout(() => {
      localStorage.removeItem('user');
    }, 3000)
  }
}
