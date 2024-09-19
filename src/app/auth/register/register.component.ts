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
      email: new FormControl('zstefchev@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('sN4-%@)W.B+ZaX!+', [Validators.required, Validators.pattern(regexDataV.PASSWORD_REGEX)]),
      confirmPassword: new FormControl('sN4-%@)W.B+ZaX!+', [Validators.required, Validators.pattern(regexDataV.PASSWORD_REGEX)]),
      firstName: new FormControl('Zvezdomir', [Validators.required, Validators.pattern(regexDataV.FIRST_NAME_REGEX)]),
      lastName: new FormControl('Stefchev', [Validators.required, Validators.pattern(regexDataV.LAST_NAME_REGEX)]),
      birthday: new FormControl('1971-06-12', [Validators.required, Validators.pattern(this.regexData.BIRTHDAY_REGEX)]), //TODO...
      phoneNumber: new FormControl('+000000000111', [Validators.required, Validators.pattern(regexDataV.PHONE_NUMBER_REGEX)])
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

  //TODO...
  logFormErrors(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        if (control.errors) {
          console.log(`Error in ${field}:`, control.errors);
        }
      } else if (control instanceof FormGroup) {
        this.logFormErrors(control);
      }
    });
  }
}
