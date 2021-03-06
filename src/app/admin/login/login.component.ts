import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  public email = new FormControl('', [Validators.required, Validators.email]);
  public password = new FormControl('', [Validators.required,Validators.minLength(5)]);
  submitted = false;

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;

    const user = {
      email: this.form.value.email,
      password: this.form.value.password,
      returnSecureToken: true
    };
    console.log(user)

    this.authService.login(user).subscribe(
      () => {
        console.log('32')
        this.authService.setUserEmail(user.email);
        this.form.reset();
        this.submitted = false;
        this.router.navigate(['/layout']).then();
        },
      () => {alert('Введен неправильный email или password'); this.submitted = false;});
  }

}
