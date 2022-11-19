import { createAction } from '@reduxjs/toolkit';
import { IFirebaseUser } from '../../../../types/types';
import { ICreateUserDTO } from '../../../api/userApi';
import { IUser } from '../../../models/IUser';

const SigninLoadingAction = createAction<boolean>('@@User/SigninLoading');
const FirebaseAuthEmptyAction = createAction(
    '@@reactReduxFirebase/AUTH_EMPTY_CHANGE'
);
const FirebaseAuthenticatedAction = createAction<IFirebaseUser>(
    '@@reactReduxFirebase/LOGIN'
);
const UpdateUserInfoAction = createAction('@@User/UpdateUserInfo');

const UpdateUserInfoSuccessAction = createAction<{
    updatedKey: keyof IUser;
    updatedValue: any;
}>('@@User/UpdateUserInfoSuccess');

const CamToggleAction = createAction('@@User/CamToggleAction');
const DJReadyAction = createAction<boolean>('@@User/DJReady');
const LoginSuccessAction = createAction<IUser>('@@User/LoginSuccess');
const CreateUserAction = createAction<ICreateUserDTO>('@@User/CreateUser');
const SignOutAction = createAction('@@User/SignOutAction');

export {
    SigninLoadingAction,
    FirebaseAuthEmptyAction,
    FirebaseAuthenticatedAction,
    UpdateUserInfoAction,
    UpdateUserInfoSuccessAction,
    LoginSuccessAction,
    CreateUserAction,
    CamToggleAction,
    DJReadyAction,
    SignOutAction
};

