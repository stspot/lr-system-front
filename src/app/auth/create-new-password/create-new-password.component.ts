import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import * as regexDataV from '../../regex/regex';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { authConfirmRegistrationStart, authCreateNewPasswordStart } from '../store/auth.actions';
import { IUserNewPasswordRequestModel, IUserResetPasswordRequestModel } from '../../models/user.model';

@Component({
  selector: 'app-create-new-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-new-password.component.html',
  styleUrl: './create-new-password.component.scss',
})
export class CreateNewPasswordComponent {
  createNewPasswordForm: FormGroup;
  regexData = regexDataV;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.createNewPasswordForm = new FormGroup({
      password: new FormControl('5zh317aq!A', [
        Validators.required,
        Validators.pattern(regexDataV.PASSWORD_REGEX),
      ]),
      confirmPassword: new FormControl('5zh317aq!A', [
        Validators.required,
        Validators.pattern(regexDataV.PASSWORD_REGEX),
      ]),
    });
  }

  ngOnInit(): void {}

  get password() {
    return this.createNewPasswordForm.get('password');
  }
  get confirmPassword() {
    return this.createNewPasswordForm.get('confirmPassword');
  }

  onSubmit() {
    if (this.createNewPasswordForm.valid) {
      console.log(this.createNewPasswordForm.value.password);
      const urpt = this.activatedRoute.snapshot.paramMap.get('urpt')!;
      const createNewPasswordObj: IUserNewPasswordRequestModel = {
        password: this.createNewPasswordForm.value.password
      };
      this.store.dispatch(
        authCreateNewPasswordStart({ urpt: urpt, newPasswordObj: createNewPasswordObj })
      );
    }
  }
}
