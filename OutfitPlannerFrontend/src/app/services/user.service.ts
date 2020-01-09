import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorageUser, User } from "../interfaces/User";
import { API_URL } from "../constants";
import { take } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  public get isUserLoggedIn(): boolean {
    const userJson = localStorage.getItem("user");
    const userData = JSON.parse(userJson);
    return !!userData;
  }

  constructor(private router: Router, private httpClient: HttpClient) {}

  public async logout() {
    await this.router.navigate(["/"]);
    setTimeout(() => {
      localStorage.removeItem("user");
    }, 3000);
  }

  public async login(user) {
    let receivedUser = await this.httpClient
      .post<User>(API_URL + "login", user)
      .pipe(take(1))
      .toPromise();
    this.router.navigate(["/gallery"]);
    const storedUser: LocalStorageUser = {
      id: receivedUser.userId,
      username: receivedUser.username
    };
    const jsonUser = JSON.stringify(storedUser);
    localStorage.setItem("user", jsonUser);
  }
}
