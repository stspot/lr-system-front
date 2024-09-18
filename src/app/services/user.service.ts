import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserResponseModel, IUserUpdateModel } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseApiUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  update(userObj: IUserUpdateModel): Observable<IUserResponseModel> {
    return this.http.patch<IUserResponseModel>(
      `${this.baseApiUrl}/users/update`, userObj);
  }

  getById(userId: string): Observable<IUserResponseModel> {
    return this.http.get<IUserResponseModel>(
      `${this.baseApiUrl}/users/${userId}`);
  }

  getAll(): Observable<IUserResponseModel[]> {
    return this.http.get<IUserResponseModel[]>(
      `${this.baseApiUrl}/users/all`);
  }

  getAllPage(page: number = 0, size: number = 10): Observable<IUserResponseModel[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<IUserResponseModel[]>(
      `${this.baseApiUrl}/users/all/pages`, {params: params});
  }

  deleteById(userId: string): Observable<IUserResponseModel> {
    return this.http.get<IUserResponseModel>(
      `${this.baseApiUrl}/users/delete/${userId}`);
  }

  // deleteByIdFake(userId: string): Observable<IUserResponseModel> {
  //   return this.http.get<IUserResponseModel>(
  //     `${this.baseApiUrl}/users/${userId}`);
  // }
}
