
import { ActionReducerMap } from '@ngrx/store';

import { AppState } from './app.state';
import { AUTH_NAME, authReducer } from '../auth/store/auth.reducer';
import { USER_NAME, userReducer } from '../users/store/user.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  [AUTH_NAME]: authReducer,
  [USER_NAME]: userReducer,
};

export function getInitialState(): AppState {
  const storedState = localStorage.getItem('appState');
  return storedState ? JSON.parse(storedState) : undefined;
}

export { AppState };
