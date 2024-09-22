import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap, exhaustMap, withLatestFrom, concatMap } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { getAllUsersByPagesSortedFail, getAllUsersByPagesSortedStart, getAllUsersByPagesSortedSuccess, 
  getLoggedUserByIdFail, 
  getLoggedUserByIdStart, getLoggedUserByIdSucccess, getUserByIdFail, getUserByIdStart, getUserByIdSucccess,
  updateUserStart,
  updateUserSuccess} from './user.actions';
import { Store } from '@ngrx/store';
import { getLoggedUserData, getUserStateData } from './user.selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AppState } from '../../store/app.state';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private store: Store<AppState>
  ) { }

  /* GET USER BY ID EFFECT *********************************************************** */

     getUserById$ = createEffect(() => this.actions$.pipe(
      ofType(getUserByIdStart),
      switchMap((action) => this.userService.getById(action.userId).pipe(
        map(response => {
          return getUserByIdSucccess({ user: response})
        }),
        catchError(error => of(getUserByIdFail({ error })))
      ))
    ));

    /* GET LOGGED USER BY ID EFFECT *********************************************************** */

  getLoggedUserById$ = createEffect(() => this.actions$.pipe(
    ofType(getLoggedUserByIdStart),
    switchMap((action) => this.userService.getById(action.userId).pipe(
      map(response => {
        return getLoggedUserByIdSucccess({ user: response})
      }),
      catchError(error => of(getLoggedUserByIdFail({ error })))
    ))
  ));

  /* GET ALL BY PAGE SORTED EFFECT *********************************************************** */
  
  getAllByPageSorted$ = createEffect(() => this.actions$.pipe(
    ofType(getAllUsersByPagesSortedStart),
    switchMap((action) => this.userService.getAllPageSorted(action.page, action.size).pipe(
      map(response => {
        return getAllUsersByPagesSortedSuccess({ usersByPage: response})
      }),
      catchError(error => of(getAllUsersByPagesSortedFail({ error })))
    ))
  ));

  updateByIdStart$ = createEffect(() => this.actions$.pipe(
    ofType(updateUserStart),
    switchMap((action) => this.userService.update(action.user).pipe(
      map(response => {
        this.router.navigateByUrl('/users/users-all')
        return updateUserSuccess({ user: response})
      }),
      catchError(error => of(getAllUsersByPagesSortedFail({ error })))
    ))
  ));
}
