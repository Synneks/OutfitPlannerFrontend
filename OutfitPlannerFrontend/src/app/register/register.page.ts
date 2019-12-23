import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {LocalStorageUser, User} from "../interfaces/User";
import {take} from "rxjs/operators";
import {API_URL} from "../constants";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  public form: FormGroup = this.formBuilder.group({
    username:[null, Validators.required],
    password:[null, Validators.required],
    confirmPassword:[null, Validators.required]

  });
  constructor(public formBuilder: FormBuilder,public httpClient:HttpClient,public router:Router) {}


  async register() {
    const {username, password, confirmPassword} = this.form.value;
    if (password == confirmPassword){
      let user : User ={
        userId : 0,
        username : username,
        password : password
      };
      try{
        let receivedUser = await this.httpClient.post<User>(API_URL + 'register', user).pipe(take(1)).toPromise();
        alert("User successfully registered! You will be logged in into your account");
        this.router.navigate(['/gallery']);
        const storedUser : LocalStorageUser ={
          id: receivedUser.userId,
          username: receivedUser.username
        };
        const jsonUser = JSON.stringify(storedUser);
        localStorage.setItem('user', jsonUser);
        this.form.get('username').reset();
        this.form.get('password').reset();
      }
      catch (error) {
        alert(error.error);
      }
    }
    else{
      alert("The 2 passwords don't match")
    }

  }

}
