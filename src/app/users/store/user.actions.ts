import { createAction, props } from "@ngrx/store";
import { IUserResponseModel, IUserUpdateModel } from "../../models/user.model";
import { IHttpErrorResponse } from "../../models/error.model";
import { IPageUserResponseModel } from "../../models/page.model";

export const getUserByIdStart = createAction('[User] Get By Id - Start', props<{userId: string}>());
export const getUserByIdSucccess = createAction('[User] Get By Id - Success', props<{user: IUserResponseModel}>());
export const getUserByIdFail = createAction('[User] Get By Id - Fail', props<{error: IHttpErrorResponse}>());

export const getLoggedUserByIdStart = createAction('[User] Get Logged By Id - Start', props<{userId: string}>());
export const getLoggedUserByIdSucccess = createAction('[User] Get Logged By Id - Success', props<{user: IUserResponseModel}>());
export const getLoggedUserByIdFail = createAction('[User] Get By Logged Id - Fail', props<{error: IHttpErrorResponse}>());

export const updateUserStart = createAction('[User] Update User - Start', props<{user: IUserUpdateModel}>());
export const updateUserSuccess = createAction('[User] Update User - Success', props<{user: IUserResponseModel}>());
export const updateUserFail = createAction('[User] Update User - Fail', props<{error: IHttpErrorResponse}>());

export const searchUsersByPagesStart = createAction('[User] Search Users By Pages - Start', props<{page: number, size: number, searchTerm: string}>());
export const searchUsersByPagesSuccess = createAction('[User] Search Users By Pages - Success', props<{usersByPage: IPageUserResponseModel}>());
export const searchUsersByPagesFail = createAction('[User] Search Users By Pages - Fail', props<{error: IHttpErrorResponse}>());

export const getAllUsersByPagesSortedStart = createAction('[User] Get All Users By Pages - Start', props<{page: number, size: number}>());
export const getAllUsersByPagesSortedSuccess = createAction('[User] Get All Users By Pages - Success', props<{usersByPage: IPageUserResponseModel}>());
export const getAllUsersByPagesSortedFail = createAction('[User] Get All Users By Pages - Fail', props<{error: IHttpErrorResponse}>());

