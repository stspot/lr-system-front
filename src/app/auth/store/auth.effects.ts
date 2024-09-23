import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import {
  map,
  catchError,
  tap,
  exhaustMap
} from 'rxjs/operators';
import {
  authLoginFail,
  authLoginStart,
  authLoginSucccess,
  authRegisterFail,
  authRegisterStart,
  authRegisterSucccess,
  authLogout,
  loadStateFromLocalStorage,
  authConfirmRegistrationStart,
  authResetPasswordStart,
  authResetPasswordSucccess,
  authResetPasswordFail,
  authCreateNewPasswordStart,
  authCreateNewPasswordSucccess,
} from './auth.actions';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { AuthService } from '../../services/auth.service';
import { JwtService } from '../../services/jwt.service';
import { AppState } from '../../store/app.state';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private jwtService: JwtService,
    private router: Router,
    private toastr: ToastrService,
    private store: Store<AppState>
  ) {}

  /* ====================================================================== */

  /* REGISTER */
  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authRegisterStart),
      exhaustMap((action) =>
        this.authService.register(action.authRegister).pipe(
          map(() => authRegisterSucccess()),
          catchError((error) => {
            this.toastr.error(error.error.message, 'Register Error!');
            return of(authRegisterFail({ error }));
          })
        )
      )
    )
  );

  /* REGISTER - SUCCESS */
  registerUserSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authRegisterSucccess),
        map(() => {
          this.toastr.info(
            `Registration started successfully. 
              You will receive a confirmation email. 
              You have 2 hours to confirm your registration.`
            , 'Registration started successfully!');
          //this.router.navigateByUrl('/auth/confirm-registration-info');
        })
      ),
    { dispatch: false }
  );

  /* ====================================================================== */

  /* CONFIRM REGISTRAATION */
  confirmRegistrarion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authConfirmRegistrationStart),
      exhaustMap((action) =>
        this.authService
          .confirmRegistration(action.uniqueRegistrationConfirmationLink)
          .pipe(
            map(() => authRegisterSucccess()),
            catchError((error) => {
              this.toastr.error(
                error.error.message,
                'Confirm Registration Error!'
              );
              return of(authRegisterFail({ error }));
            })
          )
      )
    )
  );

  /* CONFIRM REGISTRAATION - SUCCESS */
  confirmRegistrarionSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authRegisterSucccess),
        map(() => {
          // this.router.navigateByUrl('/auth/login');
        })
      ),
    { dispatch: false }
  );

  /* ====================================================================== */

  /* LOGIN */
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authLoginStart),
      exhaustMap((action) =>
        this.authService.login(action.authLogin).pipe(
          map((resp) => {
            this.router.navigateByUrl('/');
            return authLoginSucccess({ authResponse: resp });
          }),
          catchError((error) => {
            this.toastr.error(error.error.message, 'Login Error!');
            this.router.navigateByUrl('/login');
            return of(authLoginFail({ error }));
          })
        )
      )
    );
  });

  /* LOGIN - Success */
  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authLoginSucccess),
        map((action) => {
          const userId: string = this.jwtService.decodeToken(
            action.authResponse.token
          ).id;
          localStorage.setItem('userId', userId);
        })
      ),
    { dispatch: false }
  );

  /* ====================================================================== */

  /* RESET PASSWORD */
  resetPassword$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authResetPasswordStart),
      exhaustMap((action) =>
        this.authService.resetPassword(action.resetPasswordObj).pipe(
          map((resp) => {
            this.toastr.info('Check you email!', 'Reset Password Link!');
            this.router.navigateByUrl('/');
            return authResetPasswordSucccess({ rprm: resp });
          }),
          catchError((error) => {
            this.toastr.error(error.error.message, 'Reset Password Error!');
            // this.router.navigateByUrl('/login');
            return of(authResetPasswordFail({ error }));
          })
        )
      )
    );
  });

  /* RESET PASSWORD - Success */
  resetPasswordSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authResetPasswordSucccess),
        map((action) => {
          //....
        })
      ),
    { dispatch: false }
  );

  /* ====================================================================== */

  /* CREATE NEW PASSWORD */
  createNewPassword$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authCreateNewPasswordStart),
      exhaustMap((action) =>
        this.authService
          .createNewPassword(action.urpt, action.newPasswordObj)
          .pipe(
            map((resp) => {
              this.toastr.info(
                'Your password has been changed successfully!',
                'New Password Condition!'
              );
              this.router.navigateByUrl('/auth/login');
              return authCreateNewPasswordSucccess({ isCreated: resp });
            }),
            catchError((error) => {
              this.toastr.error(
                error.error.message,
                'Create New Password Error!'
              );
              // this.router.navigateByUrl('/login');
              return of(authResetPasswordFail({ error }));
            })
          )
      )
    );
  });

  /* CREATE NEW PASSWORD - Success */
  createNewPasswordSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authCreateNewPasswordSucccess),
        map((action) => {
          //....
        })
      ),
    { dispatch: false }
  );

  /* ====================================================================== */

  /* LOGOUT */
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authLogout),
        tap(() => {
          this.router.navigateByUrl('/')
        })
      ),
    { dispatch: false }
  );

  /* ====================================================================== */

  /* LOAD STATE FROM LOCAL STORAGE */
  loadStateFromLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadStateFromLocalStorage),
        tap(() => {
          // localStorage.
        })
      ),
    { dispatch: false }
  );
}
