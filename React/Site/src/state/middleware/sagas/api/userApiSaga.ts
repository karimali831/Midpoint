import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, select, takeLatest } from 'redux-saga/effects'
import { ICreateUserDTO, userApi } from '../../../../api/userApi'
import { Page } from '../../../../enum/Page'
import { LoadStartup } from '../../../../enum/LoadStartup'
import { IAwsError } from '../../../../interface/IAwsError'
import { IAxiosError } from '../../../../interface/IAxiosError'
import { IUser } from '../../../../models/IUser'
import { toast } from 'react-hot-toast'
import {
    AwsErrorAlertAction,
    AxiosErrorAlertAction,
    SetAppReadyAction,
    SetOnConfirmLoadingAction,
    ShowPageAction
} from '../../../contexts/app/Actions'
import {
    CreateUserAction,
    FirebaseAuthEmptyAction,
    FirebaseAuthenticatedAction,
    GetUserAction,
    GetUserSuccessAction,
    LoginSuccessAction,
    SetFirebaseUidAction,
    SignOutAction,
    UpdateUserInfoAction,
    UpdateUserInfoSuccessAction
} from '../../../contexts/user/Actions'
import { getFirebaseUid, getUserId } from '../../../contexts/user/Selectors'
import { ec2InstanceApi, EC2Response } from '../../../../api/ec2InstanceApi'
import { CreateSuccessAction } from '../../../contexts/instance/Actions'
import {
    GetHostRoomsAction,
    SetMidPointJoinIdAction
} from '../../../contexts/stream/Actions'
import { auth } from '../../../../config/firebase'
import { IFirebaseUser } from '../../../../types/types'

export default function* userApiSaga() {
    yield takeLatest(FirebaseAuthenticatedAction.type, firebaseAuthenticated)
    yield takeLatest(FirebaseAuthEmptyAction.type, userLoggedOut)
    yield takeLatest(LoginSuccessAction.type, authLoadDone)
    yield takeLatest(UpdateUserInfoAction.type, updateUserInfo)
    yield takeLatest(CreateUserAction.type, createUser)
    yield takeLatest(SignOutAction.type, signOut)
    yield takeLatest(GetUserAction.type, getUser)
}

export function* createUser(action: PayloadAction<ICreateUserDTO>) {
    try {
        const registerUser: IUser = yield call(
            userApi.createUser,
            action.payload
        )

        if (registerUser) {
            yield put(LoginSuccessAction(registerUser))
        }
    } catch (e: any) {
        yield put(AxiosErrorAlertAction(e as IAxiosError))
    }
}

export function* userLoggedOut() {
    yield put(ShowPageAction(Page.Login))
}

export function* updateUserInfo(
    action: PayloadAction<{
        updatedKey: keyof IUser
        updatedValue: any
    }>
) {
    try {
        const userId: string = yield select(getUserId)

        const response: boolean = yield call(
            userApi.updateUserInfo,
            action.payload.updatedKey,
            action.payload.updatedValue,
            userId
        )

        if (response) {
            yield put(
                UpdateUserInfoSuccessAction({
                    updatedKey: action.payload.updatedKey,
                    updatedValue: action.payload.updatedValue
                })
            )

            toast.success(
                `Controller successfully ${
                    action.payload.updatedValue === null ? 'unset' : 'set'
                }`
            )
        }
    } catch (e: any) {
        yield put(AwsErrorAlertAction(e as IAwsError))
    } finally {
        yield put(SetOnConfirmLoadingAction(false))
    }
}

export function* authLoadDone() {
    yield put(SetAppReadyAction(LoadStartup.Auth))
}

export function* getUser() {
    try {
        const firebaseUid: string = yield select(getFirebaseUid)

        if (firebaseUid == null) return

        const user: IUser = yield call(
            userApi.getUserByFirebaseUid,
            firebaseUid
        )

        yield put(GetUserSuccessAction(user))
    } catch (e) {
        toast.error('An error occurred')
    }
}

export function* firebaseAuthenticated(action: PayloadAction<IFirebaseUser>) {
    try {
        const auth = action.payload as IFirebaseUser
        const user: IUser = yield call(userApi.getUserByFirebaseUid, auth.uid)

        yield put(SetFirebaseUidAction(auth.uid))
        yield put(LoginSuccessAction(user))
        yield put(GetHostRoomsAction())

        if (user.createdInstanceId) {
            const response: EC2Response = yield call(
                ec2InstanceApi.get,
                user.createdInstanceId,
                user.id
            )

            if (response) {
                yield put(CreateSuccessAction(response))
                yield put(SetMidPointJoinIdAction(response.hostRoomId))
            }
        }
    } catch (e) {
        toast.error('An error occurred')
        yield put(AwsErrorAlertAction(e as IAwsError))
        yield call(authLoadDone)
    }
}

export function* signOut() {
    try {
        auth.signOut()
    } catch (e: any) {
        yield put(AxiosErrorAlertAction(e as IAxiosError))
    }
}
