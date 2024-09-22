export interface IUserResponseModel {
    id: string;
    username?: string;
    email: string;
    roles: IRoleResponseModel[],
    firstName: string;
    lastName: string;
    birthday: Date;
    phoneNumber: string;
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
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

export interface IUserLoginModel {
    email: string;
    password: string;
}

export interface IUserResetPasswordRequestModel {
    urpt: string;
    password: string;
}

export interface IResetPasswordResponseModel {
    message: string;
}

export interface IUserNewPasswordRequestModel {
    password: string;
}

export interface IAuthResponseModel {
    token: string;
}