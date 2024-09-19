import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { authConfirmRegistrationStart } from '../store/auth.actions';

@Component({
  selector: 'app-confirm-registration',
  standalone: true,
  imports: [
  ],
  templateUrl: './confirm-registration.component.html',
  styleUrl: './confirm-registration.component.scss'
})
export class ConfirmRegistrationComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    const urcl = this.activatedRoute.snapshot.paramMap.get('uniqueRegistrationConfirmationLink')!;
    this.store.dispatch(authConfirmRegistrationStart({uniqueRegistrationConfirmationLink: urcl}))
  }
}
