import { createAction, props } from "@ngrx/store";
import { IUserResponseModel } from "../../models/user.model";
import { IHttpErrorResponse } from "../../models/error.model";

export const getUserByIdStart = createAction('[User] Get By Id - Start', props<{userId: string}>());
export const getUserByIdSucccess = createAction('[User] Get By Id - Success', props<{user: IUserResponseModel}>());
export const getUserByIdFail = createAction('[User] Get By Id - Fail', props<{error: IHttpErrorResponse}>());

export const getAllUsersByPagesStart = createAction('[User] Get All Users By Pages - Start', props<{page: number, size: number}>());
export const getAllUsersByPagesSucccess = createAction('[User] Get All Users By Pages - Success', props<{users: IUserResponseModel[]}>());
export const getAllUsersByPagesFail = createAction('[User] Get All Users By Pages - Fail', props<{error: IHttpErrorResponse}>());

export const searchUsersByPagesStart = createAction('[User] Search Users By Pages - Start', props<{page: number, size: number}>());
export const searchUsersByPagesSucccess = createAction('[User] Search Users By Pages - Success', props<{users: IUserResponseModel[]}>());
export const searchUsersByPagesFail = createAction('[User] Search Users By Pages - Fail', props<{error: IHttpErrorResponse}>());