import { IUserResponseModel } from "./user.model";

export interface IPageUserResponseModel {
    content: IUserResponseModel[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    numberOfElements: number;
    first: boolean;
    last: boolean;
    empty: boolean;
  }