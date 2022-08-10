import { createAction } from '@reduxjs/toolkit';
import { IFirebaseUser } from '../../../../types/types';
import { ICreateUserDTO } from '../../../api/userApi';
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
const CreateUserAction = createAction<ICreateUserDTO>('@@user/createuser');

export {
    SigninLoadingAction,
    FirebaseAuthEmptyAction,
    FirebaseAuthenticatedAction,
    UpdateUserInfoAction,
    UpdateUserInfoSuccessAction,
    LoginSuccessAction,
    CreateUserAction
};

