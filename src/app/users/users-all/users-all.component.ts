import { Component, OnInit } from '@angular/core';
import * as regexDataV from '../../regex/regex';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authRegisterStart } from '../../auth/store/auth.actions';
import { IUserRegisterModel } from '../../models/user.model';
import { AppState } from '../../store/app.state';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-users-all',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './users-all.component.html',
  styleUrl: './users-all.component.scss'
})
export class UsersAllComponent implements OnInit {

  searchUserForm: FormGroup;
  regexData = regexDataV;

  constructor(
    private store: Store<AppState>
  ) {
    this.searchUserForm = new FormGroup({
      searchTerm: new FormControl('', [Validators.required]), //TODO REGEX!!!
      birthday: new FormControl('1971-06-12', [Validators.required, Validators.pattern(this.regexData.BIRTHDAY_REGEX)]), //TODO...
    });
  }

  ngOnInit(): void {}

  get searchTerm() { return this.searchUserForm.get('searchTerm'); }
  get birthday() { return this.searchUserForm.get('birthday'); }

  onSubmit() {
    if (this.searchUserForm.valid) {
      const searchUserFormObj: IUserRegisterModel = {...this.searchUserForm.value};
      console.log(searchUserFormObj);
      
    }
  }

  deleteById(userId: string){
    console.log(userId);
    
  }

}
