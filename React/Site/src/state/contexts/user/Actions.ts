import { createAction } from '@reduxjs/toolkit';
import { ICreateUserDTO } from '../../../api/userApi';
import { IUser } from '../../../models/IUser';
import { IFirebaseUser } from '../../../types/types';

const GetUserAction = createAction('@@User/GetUser')
const GetUserSuccessAction = createAction<IUser>('@@User/GetUserSuccess')
const SigninLoadingAction = createAction<boolean>('@@User/SigninLoading');
const FirebaseAuthEmptyAction = createAction(
    '@@User/FirebaseAuthEmptyAction'
);
const FirebaseAuthenticatedAction = createAction<IFirebaseUser>(
    '@@User/FirebaseAuthenticated'
);
const UpdateUserInfoAction = createAction<{
    updatedKey: keyof IUser;
    updatedValue: any;
}>('@@User/UpdateUserInfo');

const UpdateUserInfoSuccessAction = createAction<{
    updatedKey: keyof IUser;
    updatedValue: any;
}>('@@User/UpdateUserInfoSuccess');

const CamToggleAction = createAction('@@User/CamToggleAction');
const DJReadyAction = createAction<boolean>('@@User/DJReady');
const LoginSuccessAction = createAction<IUser>('@@User/LoginSuccess');
const SetFirebaseUidAction = createAction<string>('@@User/SetFirebaseUid');
const CreateUserAction = createAction<ICreateUserDTO>('@@User/CreateUser');
const SignOutAction = createAction('@@User/SignOutAction');

export {
    GetUserAction,
    GetUserSuccessAction,
    SigninLoadingAction,
    FirebaseAuthEmptyAction,
    FirebaseAuthenticatedAction,
    UpdateUserInfoAction,
    UpdateUserInfoSuccessAction,
    LoginSuccessAction,
    CreateUserAction,
    CamToggleAction,
    DJReadyAction,
    SignOutAction,
    SetFirebaseUidAction
};

