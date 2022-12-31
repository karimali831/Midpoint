import { call, put, select, takeLatest } from 'redux-saga/effects';
import { hostApi } from '../../../../api/hostApi';
import { CreateHostRoomInput, HostRoom } from '../../../../graphql/types';
import { IAwsError } from '../../../../interface/IAwsError';
import { AwsErrorAlertAction, SetMidPointStep } from '../../../contexts/app/Actions';
import { getUser, getUserId } from '../../../contexts/user/Selectors';
import { CreateHostRoomAction, GetHostRoomAction, GetHostRoomsAction, GetHostRoomsSuccessAction, SetHostRoomAction, SetUserConnectionAction } from '../../../contexts/stream/Actions';
import { showLoading } from 'react-redux-loading-bar';
import { MidPointStep } from '../../../../enum/DashboardSection';
import { HubConnectionState } from '@microsoft/signalr';
import { IUserConnection } from '../../../../interface/IUserConnection';
import { newHubConnection } from '../../../../utils/HubHelper';
import { IUser } from '../../../../models/IUser';
import { PayloadAction } from '@reduxjs/toolkit';

export default function* hostApiSaga() {
    yield takeLatest(CreateHostRoomAction.type, createHostRoom);
    yield takeLatest(GetHostRoomsAction.type, getHostRooms);
    yield takeLatest(SetHostRoomAction.type, setHostRoom)
    yield takeLatest(GetHostRoomAction.type, getHostRoom)
}

export function* getHostRoom(action: PayloadAction<string>) {
    try{
        const response: HostRoom = yield call(hostApi.getHostRoom, action.payload)
        yield put(SetHostRoomAction(response))

    }
    catch (e) {
        yield put(AwsErrorAlertAction(e as IAwsError))
    } 

}

export function* setHostRoom(action: PayloadAction<HostRoom>) {

    try{
        yield put(showLoading())

        const user: IUser = yield select(getUser)

        const userConnection: IUserConnection = {
            hubConnection: newHubConnection(),
            connectionState: HubConnectionState.Disconnected,
            showConnectionStatus: false,
            userId: user.id,
            displayName: user.displayName,
            roomId: action.payload.id,
            roomName: action.payload.name
        };

        console.log("here")
        console.log(userConnection)

        yield put(SetUserConnectionAction(userConnection))
    }
    catch (e) {
        yield put(AwsErrorAlertAction(e as IAwsError))
    } finally {
        yield put(showLoading())
    } 
}

export function* getHostRooms() {
    try{
        yield put(showLoading())

        const userId: string = yield select(getUserId)
        const response: HostRoom[] = yield call(hostApi.getUserCreatedHostRooms, userId)

        if (response.length > 0) {
            yield put(GetHostRoomsSuccessAction(response))
        }
        else{
            yield put(CreateHostRoomAction())
        }


    }
    catch (e) {
        yield put(AwsErrorAlertAction(e as IAwsError))
    } finally {
        yield put(showLoading())
    } 

}

export function* createHostRoom() {
    try {
        yield put(showLoading())
        const userId: string = yield select(getUserId)

        const input: CreateHostRoomInput = {
            createdUserId: userId,
            name: 'My Room'
        }

        const response: HostRoom = yield call(hostApi.createHostRoom, input)

        yield put(SetHostRoomAction(response))
        yield put(SetMidPointStep(MidPointStep.Welcome))

    } catch (e) {
        yield put(AwsErrorAlertAction(e as IAwsError))
    } finally {
        yield put(showLoading())
    } 

}

