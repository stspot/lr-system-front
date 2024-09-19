import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';
import { AUTH_NAME } from './auth.reducer';

const getAuthState = createFeatureSelector<AuthState>(AUTH_NAME);

export const authStateData = createSelector(getAuthState, (state) => {
  return state;
});

export const isLogged = createSelector(getAuthState, (state) => {
  return state.isLogged;
});

