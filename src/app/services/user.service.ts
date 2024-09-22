import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserResponseModel, IUserUpdateModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { IPageUserResponseModel } from '../models/page.model';

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

  getAllPageSorted(page: number = 0, size: number = 10): Observable<IPageUserResponseModel> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<IPageUserResponseModel>(
      `${this.baseApiUrl}/users/all/pages`, {params: params});
  }

  deleteById(userId: string): Observable<Boolean> {
    return this.http.delete<Boolean>(
      `${this.baseApiUrl}/users/delete/${userId}`);
  }

  deleteByIdFake(userId: string): Observable<Boolean> {
    return this.http.delete<Boolean>(
      `${this.baseApiUrl}/users/fake/delete/${userId}`);
  }

  // deleteByIdFake(userId: string): Observable<IUserResponseModel> {
  //   return this.http.get<IUserResponseModel>(
  //     `${this.baseApiUrl}/users/${userId}`);
  // }

  searchUsers(searchTerm: string = '', page: number = 0, size: number = 10): Observable<IPageUserResponseModel> {
    let params = new HttpParams()
      .set('searchTerm', searchTerm)
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<IPageUserResponseModel>(`${this.baseApiUrl}/users/search`, { params });
  }
}
