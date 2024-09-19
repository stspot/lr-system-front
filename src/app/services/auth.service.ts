import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthResponseModel, IResetPasswordResponseModel, IUserLoginModel, IUserNewPasswordRequestModel, IUserRegisterModel, IUserResetPasswordRequestModel, IUserResponseModel } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseApiUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  login(loginObj: IUserLoginModel): Observable<IAuthResponseModel> {
    return this.http.post<IAuthResponseModel>(
      `${this.baseApiUrl}/auth/login`, loginObj);
  }

  register(registerObj: IUserRegisterModel): Observable<IUserResponseModel> {
    return this.http.post<IUserResponseModel>(
      `${this.baseApiUrl}/auth/register`, registerObj);
  }

  resetPassword(resetPasswordObj: IUserResetPasswordRequestModel): Observable<IResetPasswordResponseModel> {
    return this.http.post<IResetPasswordResponseModel>(
      `${this.baseApiUrl}/auth/reset/password`, resetPasswordObj);
  }

  createNewPassword(urpt: string, newPasswordObj: IUserNewPasswordRequestModel): Observable<Boolean> {
    const url: string = `${this.baseApiUrl}/auth/create/new/password/${urpt}`;
    return this.http.post<Boolean>(
      url, newPasswordObj);
  }

  confirmRegistration(confirmLink: string): Observable<string> {
    return this.http.get<string>(
      `${this.baseApiUrl}/auth/confirm/registration/${confirmLink}`);
  }
}

