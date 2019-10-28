import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {LocalStorageUser, User} from "../interfaces/User";
import {Type} from "../interfaces/Type";
import {take} from "rxjs/operators";
import {Router} from "@angular/router";
import {json} from "@angular-devkit/core";
import {API_URL} from "../constants";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public form: FormGroup = this.formBuilder.group({
    username:[null, Validators.required],
    password:[null, Validators.required]
  });

  constructor(public formBuilder: FormBuilder, public httpClient: HttpClient,private router: Router) {}

  async login(){
    const {username, password} = this.form.value;
    let user : User ={
        userId : 0,
        username : username,
        password : password
      };

    try{
        let receivedUser = await this.httpClient.post<User>(API_URL+'login', user).pipe(take(1)).toPromise();
        this.router.navigate(['/gallery']);
        const storedUser : LocalStorageUser ={
            id: receivedUser.userId,
            username: receivedUser.username
        };
        const jsonUser = JSON.stringify(storedUser);
        localStorage.setItem('user', jsonUser);
        this.form.get('username').reset();
        this.form.get('password').reset();
    }catch(error){
        alert(error.error);
    }





  }

}
