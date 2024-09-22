import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IUserRegisterModel, IUserResponseModel } from '../../models/user.model';
import { AppState } from '../../store/app.state';
import * as regexDataV from '../../regex/regex';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { searchUsersByPagesFail, searchUsersByPagesStart, searchUsersByPagesSuccess } from '../store/user.actions';
import { Actions, ofType } from '@ngrx/effects';
import { catchError, map, of, Subscription, switchMap } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-search-users',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './search-users.component.html',
  styleUrl: './search-users.component.scss'
})
export class SearchUsersComponent implements OnInit {

  private subscription: Subscription | undefined;
  searchUserForm: FormGroup;
  regexData = regexDataV;
  allUsersByPageSorted: IUserResponseModel[] = [];
  totalElements: number = 0;
  page: number = 0;
  size: number = 10;
  totalPages: number = 0;

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private userService: UserService
  ) {
    this.searchUserForm = new FormGroup({
      searchTerm: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я0-9-\/]*$')])
    });
  }
  ngOnInit(): void { }

  get searchTerm() {
    return this.searchUserForm.get('searchTerm');
  }

  onSubmit() {
    if (this.searchUserForm.valid) {
      this.getUsers();
    }
  }

  getUsers() {
    const searchTerm = {...this.searchUserForm.value}.searchTerm;
    this.store.dispatch(searchUsersByPagesStart({page: this.page, size: this.size, searchTerm: searchTerm}));
    this.subscription = this.actions$.pipe(
      ofType(searchUsersByPagesStart),
      switchMap((action) => this.userService.searchUsers(searchTerm, action.page, action.size))
    ).subscribe(users => {
      this.allUsersByPageSorted = users.content;
      this.totalElements = users.totalElements;
      this.totalPages = users.totalPages;
    });
  

    // return this.actions$.pipe(
    //   ofType(searchUsersByPagesStart),
    //   switchMap(() => this.userService.searchUsers(searchTerm, this.page, this.size)
    //     .pipe(
    //       map(resp => {
    //         console.log(resp);
    //         return searchUsersByPagesSuccess({ usersByPage: resp });
    //       }),
    //       catchError(error => of(searchUsersByPagesFail({ error })))
    //     )
    //   )
    // );

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
  }
}
