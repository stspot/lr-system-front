import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import * as regexDataV from '../../regex/regex';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { authLoginStart } from '../store/auth.actions';
import { IUserLoginModel } from '../../models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  regexData = regexDataV;

  constructor(
    private store: Store<AppState>
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('zstefchev@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('sN4-%@)W.B+ZaX!+', [Validators.required, Validators.pattern(regexDataV.PASSWORD_REGEX)]),
    });
  }

  ngOnInit(): void {}

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    if (this.loginForm.valid) {
      const userLoginObj: IUserLoginModel = {...this.loginForm.value};
      this.store.dispatch(authLoginStart({authLogin: userLoginObj}));
    }
  }
}
