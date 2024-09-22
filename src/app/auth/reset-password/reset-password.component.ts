import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import * as regexDataV from '../../regex/regex';
import { CommonModule } from '@angular/common';
import { IUserResetPasswordRequestModel } from '../../models/user.model';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { authResetPasswordStart } from '../store/auth.actions';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

  resetPasswordForm: FormGroup;
  regexData = regexDataV;

  constructor(
    private store: Store<AppState>
  ) {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {}

  get email() { return this.resetPasswordForm.get('email'); }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      const resetPasswordObj: IUserResetPasswordRequestModel = {...this.resetPasswordForm.value};
      this.store.dispatch(authResetPasswordStart({resetPasswordObj: resetPasswordObj}));
    }
  }
}
