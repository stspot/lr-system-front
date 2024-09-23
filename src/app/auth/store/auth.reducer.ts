import {
  authLoginSucccess,
  authLogout,
  loadStateFromLocalStorage
} from './auth.actions';
import { AuthState } from './auth.state';
import { Action, createReducer, on } from '@ngrx/store';

export const AUTH_NAME = 'auth';

const initialState: AuthState = {
  authToken: null,
  isLogged: false,
  isLoading: false,
  loggedUserId: '',
};

const _authReducer = createReducer(
  initialState,

  on(authLoginSucccess, (state, action) => {
    localStorage.setItem('authToken', JSON.stringify(action.authResponse));
    localStorage.setItem('isLogged', 'true');
    localStorage.setItem('loading', 'false');
    return {
      ...state,
      authToken: action.authResponse,
      isLogged: true,
      loading: false,
    };
  }),

  on(authLogout, (state, action) => {
    localStorage.clear();
    return {
      ...state,
      authToken: null,
      isLogged: false,
      loading: false,
    };
  }),

  on(loadStateFromLocalStorage, (state, action) => {
    const authObj: any = localStorage.getItem('authToken');
    const isLoggedObj: boolean = localStorage.getItem('isLogged') === 'true';
    const loadingObj: boolean = localStorage.getItem('loading') === 'true';
    return {
      ...state,
      authToken: authObj,
      isLogged: isLoggedObj,
      isLoading: loadingObj,
    };
  })
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}
