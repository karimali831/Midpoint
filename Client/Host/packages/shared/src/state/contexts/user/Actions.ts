import { createAction } from '@reduxjs/toolkit';
import { ICreateUserDTO } from '../../../api/userApi';
import { IFirebaseUser } from '../../../models/IFirebaseUser';
import { IUser } from '../../../models/IUser';

const SigninLoadingAction = createAction('@@user/signinLoading');
const FirebaseAuthEmptyAction = createAction(
    '@@reactReduxFirebase/AUTH_EMPTY_CHANGE'
);
const FirebaseAuthenticatedAction = createAction<IFirebaseUser>(
    '@@reactReduxFirebase/LOGIN'
);
const UpdateUserInfoAction = createAction('@@user/updateuserinfo');

const UpdateUserInfoSuccessAction = createAction<{
    updatedKey: keyof IUser;
    updatedValue: any;
}>('@@user/updateuserinfosuccess');

const LoginSuccessAction = createAction<IUser>('@@user/loginsuccess');
const UpdateUserPushTokenAction = createAction<string>(
    '@@user/updateuserpushtoken'
);
const TestAction = createAction('@@user/test');
const RegisterUserAction = createAction<ICreateUserDTO>('@@user/registeruser');

export {
    SigninLoadingAction,
    FirebaseAuthEmptyAction,
    FirebaseAuthenticatedAction,
    RegisterUserAction,
    UpdateUserInfoAction,
    UpdateUserInfoSuccessAction,
    LoginSuccessAction,
    UpdateUserPushTokenAction,
    TestAction,
};
