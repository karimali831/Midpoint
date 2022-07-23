import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ICreateUserDTO, userApi } from '../../../../api/userApi';
import { AppScreen } from '../../../../enum/AppScreen';
import { LoadStartup } from '../../../../enum/LoadStartup';
import { IAxiosError } from '../../../../interface/IAxiosError';
import { IFirebaseUser } from '../../../../models/IFirebaseUser';
import { IUser } from '../../../../models/IUser';
import {
    AxiosErrorAlertAction,
    SetAppReadyAction,
    SetOnConfirmLoadingAction,
    ShowAlertAction,
    ShowScreenAction
} from '../../../contexts/app/Actions';
import {
    FirebaseAuthEmptyAction,
    FirebaseAuthenticatedAction,
    LoginSuccessAction,
    RegisterUserAction,
    TestAction,
    UpdateUserInfoAction,
    UpdateUserInfoSuccessAction
} from '../../../contexts/user/Actions';
import { getUserId } from '../../../contexts/user/Selectors';

export default function* userApiSaga() {
    yield takeLatest(RegisterUserAction.type, registerUser);
    yield takeLatest(FirebaseAuthenticatedAction.type, firebaseAuthenticated);
    yield takeLatest(FirebaseAuthEmptyAction.type, userLoggedOut);
    yield takeLatest(LoginSuccessAction.type, authLoadDone);
    yield takeLatest(UpdateUserInfoAction.type, updateUserInfo);
    yield takeLatest(TestAction.type, doTest);
}

export function* doTest() {
    try {
        const response: boolean = yield call(userApi.test);

        if (response) {
            yield put(
                ShowAlertAction({
                    title: 'Axios test working',
                    status: 'success'
                })
            );
        }
    } catch (e: any) {
        yield put(AxiosErrorAlertAction(e as IAxiosError))
    }
}

export function* userLoggedOut() {
    yield put(
        ShowScreenAction({
            screen: AppScreen.Host,
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
        yield put(AxiosErrorAlertAction(e as IAxiosError))
    } finally {
        yield put(SetOnConfirmLoadingAction(false));
    }
}

export function* authLoadDone() {
    yield put(SetAppReadyAction(LoadStartup.Auth));
}

export function* registerUser(action: PayloadAction<ICreateUserDTO>) {
    try {
        const registerUser: IUser = yield call(
            userApi.createUser,
            action.payload
        );

        if (registerUser) {
            yield put(LoginSuccessAction(registerUser));
        }
    } catch (e: any) {
        yield put(AxiosErrorAlertAction(e as IAxiosError))
    }
}

export function* firebaseAuthenticated(action: PayloadAction<IFirebaseUser>) {
    try {
        const user: IUser = yield call(
            userApi.getUserByFirebaseUid,
            action.payload
        );

        if (user) {
            yield put(LoginSuccessAction(user));

            yield put(
                ShowAlertAction({
                    title: `Logged in as ${user.name}`,
                    status: 'success',
                    duration: 4000,
                    position: 'topright',
                    blurBackground: false,
                })
            );
        }
    } catch (e: any) {
        yield put(AxiosErrorAlertAction(e as IAxiosError))
        yield call(authLoadDone);
    }
}
