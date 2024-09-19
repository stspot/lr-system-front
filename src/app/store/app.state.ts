import { AUTH_NAME } from "../auth/store/auth.reducer";
import { AuthState } from "../auth/store/auth.state";
import { USER_NAME } from "../users/store/user.reducer";
import { UserState } from "../users/store/user.state";

export interface AppState {
    [AUTH_NAME]: AuthState,
    [USER_NAME]?: UserState,
  }