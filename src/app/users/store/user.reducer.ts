import { Action, createReducer, on } from '@ngrx/store';
import { UserState } from './user.state';
import { getAllUsersByPagesSortedSuccess, getLoggedUserByIdSucccess } from './user.actions';

export const USER_NAME = "user";

const initialState: UserState = {
  loggedUser: null,
  allUsersByPageSorted: []
};

const _userReducer = createReducer(
  initialState,

  on(getLoggedUserByIdSucccess, (state, action) => {
    return {
      ...state,
      loggedUser: action.user
    }
  }),

  on(getAllUsersByPagesSortedSuccess, (state, action) => {
    return {
      ...state,
      allUsersByPageSorted: action.usersByPage
    }
  })
);

export function userReducer(state: UserState | undefined, action: Action) {
  return _userReducer(state, action);
}
