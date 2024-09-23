import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IAuthResponseModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  
  jwtHelper: JwtHelperService;

  constructor() {
    this.jwtHelper = new JwtHelperService();
  }

  initDataInLocal() { }

  getIdFromToken(): string | null {
    if (localStorage.getItem('appState') !== null) {
      let mainStateObj = localStorage.getItem('appState')!;
      mainStateObj = JSON.parse(mainStateObj) as any;
      let token: any = (mainStateObj as any).auth.authToken.token;
      let id: string | null = this.decodeToken(token).id;
      return id;
    } else {
      return null;
    }
  }

  decodeToken(token: string) {
    return this.jwtHelper.decodeToken(token);
  }

  isTokenExpired(token: string): boolean {
    return this.jwtHelper.isTokenExpired(token);
  }
}
