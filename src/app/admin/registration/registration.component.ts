import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  public email = new FormControl('', [Validators.required, Validators.email]);
  public password = new FormControl('', [Validators.required,Validators.minLength(5)]);
  public name = new FormControl('', [Validators.required,Validators.minLength(2)]);
  public secondName = new FormControl('', [Validators.required,Validators.minLength(3)]);
  submitted = false;

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: this.email,
      password: this.password,
      name: this.name,
      secondName: this.secondName
    });
  }

  public registration(): void {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;

    const user = {
      email: this.form.value.email,
      password: this.form.value.password,
      name: this.form.value.name,
      secondName: this.form.value.secondName
    };
    console.log(user)
    this.authService.registration(user).subscribe(
      () => {
        this.form.reset();
        this.submitted = false;
        this.router.navigate(['/admin']).then();
      },
      () => alert('Данный юзер уже существует'));
  }

}
