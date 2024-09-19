import { IAuthResponseModel } from "../../models/user.model";

export interface AuthState {
  authToken: IAuthResponseModel | null;
  isLogged: boolean;
  isLoading: boolean;
  loggedUserId: string;
}
