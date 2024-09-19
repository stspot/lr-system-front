import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USER_NAME } from './user.reducer';
import { UserState } from './user.state';

const getUserState = createFeatureSelector<UserState>(USER_NAME);

export const getUserStateData = createSelector(getUserState, (state) => {
  return state;
});

export const getLoggedUserData = createSelector(getUserState, (state) => {
  return state.loggedUser;
});

