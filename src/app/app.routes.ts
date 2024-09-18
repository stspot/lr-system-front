import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UsersAllComponent } from './users/users-all/users-all.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { CreateNewPasswordComponent } from './auth/create-new-password/create-new-password.component';
import { ConfirmRegistrationComponent } from './auth/confirm-registration/confirm-registration.component';
import { UsersAllPagesComponent } from './users/users-all-pages/users-all-pages.component';
import { UserUpdateComponent } from './users/user-update/user-update.component';
import { UsersDeleteByIdComponent } from './users/users-delete-by-id/users-delete-by-id.component';
import { UsersDeleteByIdFakeComponent } from './users/users-delete-by-id-fake/users-delete-by-id-fake.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';

export const routes: Routes = [

    {path: '', component: HomeComponent},

    {path: 'auth/login', component: LoginComponent},
    {path: 'auth/register', component: RegisterComponent},
    {path: 'auth/confirm-registration', component: ConfirmRegistrationComponent},
    {path: 'auth/reset-password', component: ResetPasswordComponent},
    {path: 'auth/create-new-password', component: CreateNewPasswordComponent},

    {path: 'users/users-all/pages', component: UsersAllPagesComponent},
    {path: 'users/users-all', component: UsersAllComponent},
    {path: 'users/user-profile', component: UserProfileComponent},
    {path: 'users/user-update', component: UserUpdateComponent},
    {path: 'users/user-delete-id', component: UsersDeleteByIdComponent},
    {path: 'users/user-delete-id-fake', component: UsersDeleteByIdFakeComponent},
];
