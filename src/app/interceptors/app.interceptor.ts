import { HttpInterceptorFn } from '@angular/common/http';
import { IAuthResponseModel } from '../models/user.model';

export const appInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.method === 'OPTIONS') {
    return next(req);
  }
  
  const authDataString: string | null = localStorage.getItem('appState');

  if (authDataString) {
    const authDataObj = JSON.parse(authDataString);
    if (authDataObj?.auth?.authToken) {
      const authTokenString: string = authDataObj.auth.authToken;
      try {
        const authTokenObj: IAuthResponseModel = JSON.parse(authTokenString);
        if (authTokenObj?.token) {
          const token: string = authTokenObj.token;
          const clonedReq = req.clone({ 
            headers: req.headers.set('Authorization', `Bearer ${token}`) 
          });
          return next(clonedReq);
        }
      } catch (error) {
        console.error('Error parsing authTokenString:', error);
      }
    }
  }
  return next(req);
};
