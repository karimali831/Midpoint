import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { userApi } from "../../../components/api/userApi";
import { ICreateUserDTO } from "../../../dto/ICreateUserDTO";
import { PageName } from "../../../enum/PageName";
import { IAxiosError } from "../../../interface/IAxiosError";
import { IUser } from "../../../model/IUser";
import { IFirebaseUser } from "../../../types/types";
import { AxiosErrorAlertAction, NavigatePageAction, ShowAlertAction } from "../../contexts/app/Actions";
import { LoginAction, LoginSuccessAction, LogoutAction, RegisterUserAction, UpdateUserInfoAction, UpdateUserInfoSuccessAction } from "../../contexts/user/Actions";
import { getUserId } from "../../contexts/user/Selectors";

export default function* userApiSaga() {
    yield takeLatest(RegisterUserAction.type, registerUser);
    yield takeLatest(LoginAction.type, firebaseAuthenticated);
    yield takeLatest(LogoutAction.type, userLoggedOut)
    yield takeLatest(UpdateUserInfoAction.type, updateUserInfo)
}

export function* userLoggedOut() {
    yield put(NavigatePageAction(PageName.Login))
}

export function* updateUserInfo(action: PayloadAction<{ 
        updateKey: keyof IUser, 
        updateValue: any 
    }>
) {
    try {
        const { updateKey, updateValue } = action.payload

        const userId: string = yield select(getUserId)
        const response: boolean = yield call(userApi.updateUserInfo, updateKey, updateValue, userId)

        if (response) {
            yield put(UpdateUserInfoSuccessAction({ updatedKey: updateKey, updatedValue: updateValue }))
            yield put(ShowAlertAction({
                title: "Succesfully updated" + updateKey,
                status: "success"
            }));
        }

    } catch (e: any) {
        yield put(AxiosErrorAlertAction(e as IAxiosError))
    } 
}


export function* registerUser(action: PayloadAction<ICreateUserDTO>) {
    try {

        const registerUser: IUser = yield call(userApi.createUser, action.payload);

        if (registerUser) {
            yield put(LoginSuccessAction(registerUser))
        }

    } catch (e: any) {
        yield put(AxiosErrorAlertAction(e as IAxiosError))
    }
}

export function* firebaseAuthenticated(action: { type: string, auth: IFirebaseUser }) {
    try {
        yield put(ShowAlertAction({
            title: "Authenticating...",
            status: "info",
            position: "topright",
            blurBackground: false
        }))

        const user: IUser = yield call(userApi.getUserByFirebaseUid, action.auth)

        yield put(
            ShowAlertAction({
                title: `You're logged in as ${user.name}`,
                status: "success",
                position: "topright",
                blurBackground: false
            }
        ))

        yield put(LoginSuccessAction(user))

    } catch (e: any) {

        yield put(AxiosErrorAlertAction(e as IAxiosError))
    } 
}
