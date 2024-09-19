import { createAction, props } from '@ngrx/store';
import {
  IAuthResponseModel,
  IResetPasswordResponseModel,
  IUserLoginModel,
  IUserNewPasswordRequestModel,
  IUserRegisterModel,
  IUserResetPasswordRequestModel,
} from '../../models/user.model';
import { IHttpErrorResponse } from '../../models/error.model';
import { AppState } from '../../store/app.state';

/* *************************************************** */

export const authRegisterStart = createAction(
  '[Auth] Register - Start',
  props<{ authRegister: IUserRegisterModel }>()
);
export const authRegisterSucccess = createAction('[Auth] Register - Success');
export const authRegisterFail = createAction(
  '[Auth] Register - Fail',
  props<{ error: IHttpErrorResponse }>()
);

/* *************************************************** */

export const authConfirmRegistrationStart = createAction(
  '[Auth] Confirm Registration - Start',
  props<{ uniqueRegistrationConfirmationLink: string }>()
);
export const authConfirmRegistrationSucccess = createAction(
  '[Auth] Confirm Registration - Success',
  props<{ isActivated: boolean }>()
);
export const authConfirmRegistrationFail = createAction(
  '[Auth] Confirm Registration - Fail',
  props<{ error: IHttpErrorResponse }>()
);

/* *************************************************** */

export const authLoginStart = createAction(
  '[Auth] Login - Start',
  props<{ authLogin: IUserLoginModel }>()
);
export const authLoginSucccess = createAction(
  '[Auth] Login - Success',
  props<{ authResponse: IAuthResponseModel }>()
);
export const authLoginFail = createAction(
  '[Auth] Login - Fail',
  props<{ error: IHttpErrorResponse }>()
);

/* *************************************************** */

export const authResetPasswordStart = createAction(
  '[Auth] Reset Password - Start',
  props<{ resetPasswordObj: IUserResetPasswordRequestModel }>()
);
export const authResetPasswordSucccess = createAction(
  '[Auth] Reset Password - Success',
  props<{ rprm: IResetPasswordResponseModel }>()
);
export const authResetPasswordFail = createAction(
  '[Auth] Reset Password - Fail',
  props<{ error: IHttpErrorResponse }>()
);

/* *************************************************** */

export const authCreateNewPasswordStart = createAction(
  '[Auth] Create New Password - Start',
  props<{ urpt: string, newPasswordObj: IUserNewPasswordRequestModel }>()
);
export const authCreateNewPasswordSucccess = createAction(
  '[Auth] Create New Password - Success',
  props<{ isCreated: Boolean }>()
);
export const authCreateNewPasswordFail = createAction(
  '[Auth] Create New Password - Fail',
  props<{ error: IHttpErrorResponse }>()
);

/* *************************************************** */


















export const loadStateFromLocalStorage = createAction(
  '[Auth] Load State From Local Storage'
);

export const loadStateFromLocalStorageStart = createAction(
  '[Auth] Load State From Local Storage - Start'
);
export const loadStateFromLocalStorageSuccess = createAction(
  '[Auth] Load State From Local Storage - Success',
  props<{ state: AppState }>()
);
export const loadStateFromLocalStorageFail = createAction(
  '[Auth] Load State From Local Storage - Fail'
);

export const setLoggedUserId = createAction(
  '[Auth] Set Logged User Id',
  props<{ loggedUserId: string }>()
);

export const saveTheCurrentStateToLocalStorage = createAction(
  '[Auth] Save The Current State To Local Storage'
);
export const resetAuthStore = createAction('[Auth] Reset Store');
export const authLogout = createAction('[Auth] Logout');
