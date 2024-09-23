import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import * as regexDataV from '../../regex/regex';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { authRegisterStart } from '../store/auth.actions';
import { IUserRegisterModel } from '../../models/user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  regexData = regexDataV;

  constructor(
    private store: Store<AppState>
  ) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(regexDataV.PASSWORD_REGEX)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.pattern(regexDataV.PASSWORD_REGEX)]),
      firstName: new FormControl('', [Validators.required, Validators.pattern(regexDataV.FIRST_NAME_REGEX)]),
      lastName: new FormControl('', [Validators.required, Validators.pattern(regexDataV.LAST_NAME_REGEX)]),
      birthday: new FormControl('', [Validators.required, Validators.pattern(this.regexData.BIRTHDAY_REGEX)]), //TODO...
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(regexDataV.PHONE_NUMBER_REGEX)])
    });
  }

  ngOnInit(): void {}

  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }
  get firstName() { return this.registerForm.get('firstName'); }
  get lastName() { return this.registerForm.get('lastName'); }
  get birthday() { return this.registerForm.get('birthday'); }
  get phoneNumber() { return this.registerForm.get('phoneNumber'); }

  onSubmit() {
    if (this.registerForm.valid) {
      const registerObj: IUserRegisterModel = {...this.registerForm.value};
      this.store.dispatch(authRegisterStart({authRegister: registerObj}));
    }
  }
}
