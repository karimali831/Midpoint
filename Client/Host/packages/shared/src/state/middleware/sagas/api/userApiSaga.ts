import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { auth } from '../../../../../config/firebase';
import { IFirebaseUser } from '../../../../../types/types';
import { ICreateUserDTO, userApi } from '../../../../api/userApi';
import { AppScreen } from '../../../../enum/AppScreen';
import { LoadStartup } from '../../../../enum/LoadStartup';
import { IAwsError } from '../../../../interface/IAwsError';
import { IAxiosError } from '../../../../interface/IAxiosError';
import { IUser } from '../../../../models/IUser';
import {
    AwsErrorAlertAction,
    AxiosErrorAlertAction,
    SetAppReadyAction,
    SetOnConfirmLoadingAction,
    ShowAlertAction,
    ShowScreenAction
} from '../../../contexts/app/Actions';
import {
    CreateUserAction,
    FirebaseAuthEmptyAction,
    FirebaseAuthenticatedAction,
    LoginSuccessAction,
    SignOutAction,
    UpdateUserInfoAction,
    UpdateUserInfoSuccessAction
} from '../../../contexts/user/Actions';
import { getUserId } from '../../../contexts/user/Selectors';

export default function* userApiSaga() {
    yield takeLatest(FirebaseAuthenticatedAction.type, firebaseAuthenticated);
    yield takeLatest(FirebaseAuthEmptyAction.type, userLoggedOut);
    yield takeLatest(LoginSuccessAction.type, authLoadDone);
    yield takeLatest(UpdateUserInfoAction.type, updateUserInfo);
    yield takeLatest(CreateUserAction.type, createUser);
    yield takeLatest(SignOutAction.type, signOut);
}

export function* createUser(action: PayloadAction<ICreateUserDTO>) {

    try {

        const registerUser: IUser = yield call(
            userApi.createUser, action.payload
        );

        if (registerUser) {
            yield put(LoginSuccessAction(registerUser));
        }
    } catch (e: any) {
        yield put(AxiosErrorAlertAction(e as IAxiosError))
    }
}

export function* userLoggedOut() {
    yield put(
        ShowScreenAction({
            screen: AppScreen.Home,
        })
    );
}

export function* updateUserInfo(
    action: PayloadAction<{
        updatedKey: keyof IUser;
        updatedValue: any;
    }>
) {
    try {
        const userId: string = yield select(getUserId);

        const response: boolean = yield call(
            userApi.updateUserInfo,
            action.payload.updatedKey,
            action.payload.updatedValue,
            userId
        );

        if (response) {
            yield put(
                UpdateUserInfoSuccessAction({
                    updatedKey: action.payload.updatedKey,
                    updatedValue: action.payload.updatedValue,
                })
            );

            yield put(
                ShowAlertAction({
                    title: 'User info updated',
                    status: 'success',
                    duration: 1500,
                })
            );
        }
    } catch (e: any) {
        yield put(AwsErrorAlertAction(e as IAwsError))
    } finally {
        yield put(SetOnConfirmLoadingAction(false));
    }
}

export function* authLoadDone() {
    yield put(SetAppReadyAction(LoadStartup.Auth));
}


export function* firebaseAuthenticated(action: any) {
    try {

        const auth = action.auth as IFirebaseUser

        const user: IUser = yield call(
            userApi.getUserByFirebaseUid,
            auth.uid
        );

        if (user) {
            yield put(LoginSuccessAction(user));
        }
    } catch (e) {
        yield put(AwsErrorAlertAction(e as IAwsError))
        yield call(authLoadDone);
    }
}

export function* signOut() {

    try {
        auth.signOut()

    } catch (e: any) {
        yield put(AxiosErrorAlertAction(e as IAxiosError))
    }
}