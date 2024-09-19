import { createAction, props } from "@ngrx/store";
import { IUserResponseModel } from "../../models/user.model";

export const getUserByIdStart = createAction('[User] Get By Id - Start', props<{userId: string}>());
export const getUserByIdSucccess = createAction('[User] Get Lm By User Id - Success', props<{user: IUserResponseModel}>());
export const getUserByIdFail = createAction('[User] Get By Id - Fail', props<{error: any}>());
