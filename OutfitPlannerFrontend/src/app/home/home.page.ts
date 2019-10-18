import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
  constructor(public formBuilder: FormBuilder,
              // public httpService: HttpClient
  ) {}


  login(){
    const {username, password} = this.form.value;
    // this.http.post(URL, {authentication:}, {})
    // login service
    // this.httpService.post('localhost:9000/api/loign', PAYLOAD, HEADERsS)
  }

}
