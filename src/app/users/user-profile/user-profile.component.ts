import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { getUserByIdStart } from '../store/user.actions';
import { getLoggedUserData } from '../store/user.selectors';
import { IUserResponseModel } from '../../models/user.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {

  loggedUser: IUserResponseModel | null | undefined;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    const userId: string = localStorage.getItem('userId')!;    
    this.store.dispatch(getUserByIdStart({userId: userId}));
    this.store.select(getLoggedUserData).subscribe(user => {
      this.loggedUser = user;
    })
  }
}
