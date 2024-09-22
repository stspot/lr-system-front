import { Component, OnInit } from '@angular/core';
import * as regexDataV from '../../regex/regex';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { authRegisterStart } from '../../auth/store/auth.actions';
import {
  IUserRegisterModel,
  IUserResponseModel,
} from '../../models/user.model';
import { AppState } from '../../store/app.state';
import { Router, RouterModule } from '@angular/router';
import { getAllUsersByPagesSortedStart } from '../store/user.actions';
import { getAllUsersByPageSorted } from '../store/user.selectors';

@Component({
  selector: 'app-users-all',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './users-all.component.html',
  styleUrl: './users-all.component.scss',
})
export class UsersAllComponent implements OnInit {
  
  regexData = regexDataV;
  allUsersByPageSorted: any[] = [];
  totalElements: number = 0;
  page: number = 0;
  size: number = 10;
  totalPages: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.store.dispatch(
      getAllUsersByPagesSortedStart({ page: this.page, size: this.size })
    );
    this.store.select(getAllUsersByPageSorted).subscribe(users => {
      this.allUsersByPageSorted = users.content;
      this.totalElements = users.totalElements;
      this.totalPages = users.totalPages;
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
    console.log(userId);
  }
}
