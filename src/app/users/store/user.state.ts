import { IUserResponseModel } from "../../models/user.model";

export interface UserState {
  loggedUser: IUserResponseModel | null;
  allUsersByPageSorted: any
}
