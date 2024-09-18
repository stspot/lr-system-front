export interface IUserResponseModel {
    id: string;
    username?: string;
    email: string;
    roles: IRoleResponseModel[],
    firstName: string;
    lastName: string;
    birthday: Date;
}

export interface IRoleResponseModel {
    id: string;
    name: string;
    authorities: IAuthorityResponseModel[];
}

export interface IAuthorityResponseModel {
    id: string;
    name: string;
}

export interface IUserRegisterModel {
    id: string;
    username?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    birthday: Date;
    phoneNumber: string;
}

export interface IUserUpdateModel {
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

export interface IUserLoginModel {
    email: string;
    password: string;
}

export interface IUserResetPasswordRequestModel {
    email: string;
}

export interface IUserNewPasswordRequestModel {
    id: string;
    password: string;
}

export interface INewPasswordRequestModel {
    password: string;
}

export interface IAuthResponseModel {
    token: string;
}