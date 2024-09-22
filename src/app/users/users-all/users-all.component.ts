import { Component, OnInit } from '@angular/core';
import * as regexDataV from '../../regex/regex';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { RouterModule } from '@angular/router';
import { deleteUserByIdStart, deleteUserByIdSuccess, getAllUsersByPagesSortedStart } from '../store/user.actions';
import { getAllUsersByPageSorted } from '../store/user.selectors';
import { Actions, ofType } from '@ngrx/effects';
import { Subscription, switchMap } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-all',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './users-all.component.html',
  styleUrl: './users-all.component.scss',
})
export class UsersAllComponent implements OnInit {

  private subscription: Subscription | undefined;
  
  regexData = regexDataV;
  allUsersByPageSorted: any[] = [];
  totalElements: number = 0;
  page: number = 0;
  size: number = 10;
  totalPages: number = 0;
  isTheSameUser: boolean = false;
  loggedUserId: string = localStorage.getItem('userId')!;

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.store.dispatch(
      getAllUsersByPagesSortedStart({ page: this.page, size: this.size })
    );
    this.store.select(getAllUsersByPageSorted).subscribe(users => {
      this.allUsersByPageSorted = users!.content;
      this.totalElements = users!.totalElements;
      this.totalPages = users!.totalPages;
    });
  }

  nextPage(): void {
    if (this.page < this.totalPages - 1) {
      this.page++;
      this.getUsers();
    }
  }

  previousPage(): void {
    if (this.page > 0) {
      this.page--;
      this.getUsers();
    }
  } 

  deleteById(userId: string) {
    this.store.dispatch(deleteUserByIdStart({userId: userId}));
    // this.getUsers();

    this.subscription = this.actions$.pipe(
      ofType(deleteUserByIdSuccess),
      switchMap(() => this.userService.getById(userId))
    ).subscribe(resp => {
      getAllUsersByPagesSortedStart({ page: this.page, size: this.size })
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
