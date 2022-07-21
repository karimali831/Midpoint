import { createAction } from '@reduxjs/toolkit';
import { ICreateUserDTO } from '../../../dto/ICreateUserDTO';
import { IUser } from "../../../model/IUser";


const SigninLoadingAction = createAction('@@event/signinloading');
const LoginAction = createAction('@@reactReduxFirebase/LOGIN');
const LoginSuccessAction = createAction<IUser>('@@event/loginsuccess');
const LogoutAction = createAction('@@reactReduxFirebase/AUTH_EMPTY_CHANGE');
const RegisterUserAction = createAction<ICreateUserDTO>('@@event/registeruser');
const UpdateUserInfoAction = createAction<{ updateKey: keyof IUser, updateValue: any }>('@@event/updateuserinfo');
const UpdateUserInfoSuccessAction = createAction<{ updatedKey: keyof IUser, updatedValue: any }>('@@event/updateuserinfosuccess');

export {
    SigninLoadingAction,
    LoginAction,
    LoginSuccessAction,
    LogoutAction,
    RegisterUserAction,
    UpdateUserInfoAction,
    UpdateUserInfoSuccessAction
};

