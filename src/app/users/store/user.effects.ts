import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap, exhaustMap, withLatestFrom, concatMap } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { getUserByIdFail, getUserByIdStart, getUserByIdSucccess } from './user.actions';
import { Store } from '@ngrx/store';
import { getLoggedUserData, getUserStateData } from './user.selectors';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AppState } from '../../store/app.state';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private store: Store<AppState>
  ) { }

  /* *********************************************************************************
     *********************************************************************************
     GET USER BY ID EFFECT ***********************************************************
     *********************************************************************************
     ********************************************************************************* */

  getLmProfileByUserId$ = createEffect(() => this.actions$.pipe(
    ofType(getUserByIdStart),
    switchMap((action) => this.userService.getById(action.userId).pipe(
      map(response => {
        return getUserByIdSucccess({ user: response})
      }),
      catchError(error => of(getUserByIdFail({ error })))
    ))
  ));
}
