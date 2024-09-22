import { Component, OnDestroy, OnInit } from '@angular/core';
import * as regexDataV from '../../regex/regex';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { getUserByIdStart, getUserByIdSucccess, updateUserStart } from '../store/user.actions';
import { Actions, ofType } from '@ngrx/effects';
import { Subscription, switchMap } from 'rxjs';
import { UserService } from '../../services/user.service';
import { IUserResponseModel } from '../../models/user.model';

@Component({
  selector: 'app-user-update',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.scss'
})
export class UserUpdateComponent implements OnInit, OnDestroy {

  private subscription: Subscription | undefined;
  updateProfileForm: FormGroup;
  regexData = regexDataV;
  user!: IUserResponseModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
    private actions$: Actions,
    private userService: UserService
  ) {
    this.getUser();
    this.updateProfileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern(regexDataV.FIRST_NAME_REGEX)]),
      lastName: new FormControl('', [Validators.required, Validators.pattern(regexDataV.LAST_NAME_REGEX)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(regexDataV.PHONE_NUMBER_REGEX)])
    });
  }

  ngOnInit(): void { }

  get firstName() { return this.updateProfileForm!.get('firstName'); }
  get lastName() { return this.updateProfileForm!.get('lastName'); }
  get phoneNumber() { return this.updateProfileForm!.get('phoneNumber'); }

  getUser() {
    const userId = this.activatedRoute.snapshot.paramMap.get('userId')!;
    this.store.dispatch(getUserByIdStart({userId: userId}));
    this.subscription = this.actions$.pipe(
      ofType(getUserByIdSucccess),
      switchMap(() => this.userService.getById(userId))
    ).subscribe(user => {
      console.log('User: ' + user);
      
      this.user = user;
      this.firstName?.setValue(user.firstName);
      this.lastName?.setValue(user.lastName);
      this.phoneNumber?.setValue(user.phoneNumber);
    });
  }

  onSubmit() {
    if (this.updateProfileForm!.valid) {
      const userData: IUserResponseModel = {...this.updateProfileForm.value}
      console.log(this.updateProfileForm!.value);
      this.user.firstName = userData.firstName;
      this.user.lastName = userData.lastName;
      this.user.phoneNumber = userData.phoneNumber;
      console.log(this.user);
      this.store.dispatch(updateUserStart({user: this.user}))
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
