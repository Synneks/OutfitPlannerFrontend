import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../interfaces/User";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  public form: FormGroup = this.formBuilder.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });

  constructor(
    public formBuilder: FormBuilder,
    public userService: UserService
  ) {}

  async login() {
    const { username, password } = this.form.value;
    let user: User = {
      userId: 0,
      username: username,
      password: password
    };
    try {
      this.userService.login(user);
      this.form.get("username").reset();
      this.form.get("password").reset();
    } catch (error) {
      alert(error.error);
    }
  }
}
