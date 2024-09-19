import { Action, createReducer, on } from '@ngrx/store';
import { UserState } from './user.state';
import { getUserByIdSucccess } from './user.actions';
import { authLoginSucccess, loadStateFromLocalStorageSuccess } from '../../auth/store/auth.actions';

export const USER_NAME = "user";

const initialState: UserState = {
  loggedUser: null,
};

const _userReducer = createReducer(
  initialState,

  on(getUserByIdSucccess, (state, action) => {
    return {
      ...state,
      loggedUser: action.user
    }
  })
);

export function userReducer(state: UserState | undefined, action: Action) {
  return _userReducer(state, action);
}
