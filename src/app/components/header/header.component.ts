import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IUserResponseModel } from '../../models/user.model';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { isLogged } from '../../auth/store/auth.selectors';
import { authLogout } from '../../auth/store/auth.actions';
import { getLoggedUserData } from '../../users/store/user.selectors';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  isAdmin: boolean = false;
  isLoggedIn$: Observable<boolean>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.isLoggedIn$ = this.store.select(isLogged);
  }

  ngOnInit(): void {}

  logout() {
    this.store.dispatch(authLogout());
  }

  ngOnDestroy(): void {}
}
