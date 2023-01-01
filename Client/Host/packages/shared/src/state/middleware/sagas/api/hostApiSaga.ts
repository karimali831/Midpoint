import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { hostApi } from '../../../../api/hostApi';
import { CreateHostRoomInput, HostRoom, HostRoomUser } from '../../../../graphql/types';
import { IAwsError } from '../../../../interface/IAwsError';
import { AwsErrorAlertAction, SetDashboardSection, SetMidPointStep, ShowAlertAction } from '../../../contexts/app/Actions';
import { getUserId } from '../../../contexts/user/Selectors';
import { CreateHostRoomAction, DeleteHostRoomAction, GetHostRoomsAction, GetHostRoomsSuccessAction, SetHostRoomAction, SetMidPointJoinIdAction } from '../../../contexts/stream/Actions';
import { showLoading } from 'react-redux-loading-bar';
import { DashboardSection, MidPointStep } from '../../../../enum/DashboardSection';
import { PayloadAction } from '@reduxjs/toolkit';
import { getUserCreatedHostRooms } from '../../../contexts/stream/Selectors';
import { chatApi } from '../../../../api/chatApi';
import { IMessage } from '../../../../interface/IMessage';

export default function* hostApiSaga() {
    yield takeLatest(CreateHostRoomAction.type, createHostRoom);
    yield takeLatest(GetHostRoomsAction.type, getHostRooms);
    yield takeLatest(SetMidPointJoinIdAction.type, setHostRoomFromJoinId)
    yield takeLatest(DeleteHostRoomAction.type, deleteHostRoom)
}

export function* deleteHostRoom(action: PayloadAction<string>) {
    try{

        // This delete ALL messages (carful)
        // const messages: IMessage[] = yield call(chatApi.getAllChatMessages)
        // yield all(messages.map(message => 
        //     call(chatApi.deleteChatMessages, message.id) 
        // ))

        const messages: IMessage[] = yield call(chatApi.getChatMessages, action.payload)
        const users: HostRoomUser[] = yield call(hostApi.getHostRoomUsers, action.payload)

        yield all(messages.map(message => 
            call(chatApi.deleteChatMessages, message.id) 
        ))
        yield all(users.map(user => 
            call(hostApi.deleteHostRoomUsers, user.id) 
        ))
        yield call(hostApi.deleteHostRoom, action.payload)

        yield put(ShowAlertAction({ title: "Room deleted", status: "success" }))
        yield put(SetDashboardSection(DashboardSection.Overview))

    }
    catch (e) {
        yield put(AwsErrorAlertAction(e as IAwsError))
    } 
}

export function* setHostRoomFromJoinId(action: PayloadAction<string>) {
    try{
        if (action.payload === null)
            return;

        const response: HostRoom = yield call(hostApi.getHostRoom, action.payload)
        yield put(SetHostRoomAction(response))
        yield put(SetDashboardSection(DashboardSection.Start))

    }
    catch (e) {
        yield put(AwsErrorAlertAction(e as IAwsError))
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
        // else{
        //     yield put(CreateHostRoomAction())
        // }


    }
    catch (e) {
        yield put(AwsErrorAlertAction(e as IAwsError))
    } finally {
        yield put(showLoading())
    } 

}

export function* createHostRoom() {
    try {

        const userCreatedHostRooms: HostRoom[] = yield select(getUserCreatedHostRooms)

        if (userCreatedHostRooms.length >= 5)
            return;


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

