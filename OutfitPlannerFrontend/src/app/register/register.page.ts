import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
  constructor(public formBuilder: FormBuilder,
              // public httpService: HttpClient
  ) {}


  register() {
    const {username, password, confirmPassword} = this.form.value;
    console.log(username, password, confirmPassword);
  }

}
