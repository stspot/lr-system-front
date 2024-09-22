import { IPageUserResponseModel } from "../../models/page.model";
import { IUserResponseModel } from "../../models/user.model";

export interface UserState {
  loggedUser: IUserResponseModel | null;
  allUsersByPageSorted: IPageUserResponseModel | null
}
