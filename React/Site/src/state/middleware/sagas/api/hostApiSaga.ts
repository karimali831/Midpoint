import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { hostApi } from '../../../../api/hostApi'
import { IAwsError } from '../../../../interface/IAwsError'
import {
    AwsErrorAlertAction,
    SetDashboardSection
} from '../../../contexts/app/Actions'
import { getUserId } from '../../../contexts/user/Selectors'
import {
    CreateHostRoomAction,
    DeleteHostRoomAction,
    GetHostRoomsAction,
    GetHostRoomsSuccessAction,
    SetHostRoomAction,
    SetMidPointJoinIdAction,
    UpdateHostRoomAction,
    UpdateHostRoomFailAction,
    UpdateHostRoomSuccessAction
} from '../../../contexts/stream/Actions'
import { DashboardSection } from '../../../../enum/DashboardSection'
import { PayloadAction } from '@reduxjs/toolkit'
import { getUserCreatedHostRooms } from '../../../contexts/stream/Selectors'
import { chatApi } from '../../../../api/chatApi'
import toast from 'react-hot-toast'
import { IMessage } from '../../../../interface/IMessage'
import {
    CreateHostRoomInput,
    HostRoom,
    HostRoomUser,
    UpdateHostRoomInput
} from '../../../../API'

export default function* hostApiSaga() {
    yield takeLatest(CreateHostRoomAction.type, createHostRoom)
    yield takeLatest(GetHostRoomsAction.type, getHostRooms)
    yield takeLatest(SetMidPointJoinIdAction.type, setHostRoomFromJoinId)
    yield takeLatest(DeleteHostRoomAction.type, deleteHostRoom)
    yield takeLatest(UpdateHostRoomAction, updateHostRoom)
}

export function* updateHostRoom(action: PayloadAction<UpdateHostRoomInput>) {
    try {
        const response: HostRoom = yield call(
            hostApi.updateHostRoom,
            action.payload
        )

        if (response) {
            yield put(UpdateHostRoomSuccessAction(response))
        } else {
            toast.error('An error occured')
            yield put(UpdateHostRoomFailAction())
        }
    } catch (e) {
        yield put(AwsErrorAlertAction(e as IAwsError))
        yield put(UpdateHostRoomFailAction())
    }
}

export function* deleteHostRoom(action: PayloadAction<string>) {
    try {
        // This delete ALL messages (carful)
        // const messages: IMessage[] = yield call(chatApi.getAllChatMessages)
        // yield all(messages.map(message =>
        //     call(chatApi.deleteChatMessages, message.id)
        // ))

        const messages: IMessage[] = yield call(
            chatApi.getChatMessages,
            action.payload
        )
        const users: HostRoomUser[] = yield call(
            hostApi.getHostRoomUsers,
            action.payload
        )

        yield all(
            messages.map((message) =>
                call(chatApi.deleteChatMessages, message.id)
            )
        )
        yield all(
            users.map((user) => call(hostApi.deleteHostRoomUsers, user.id))
        )
        yield call(hostApi.deleteHostRoom, action.payload)
        yield put(SetDashboardSection(DashboardSection.Overview))

        toast.success('Stream ended')
    } catch (e) {
        yield put(AwsErrorAlertAction(e as IAwsError))
    }
}

export function* setHostRoomFromJoinId(action: PayloadAction<string>) {
    try {
        if (action.payload === null) return

        const response: HostRoom = yield call(
            hostApi.getHostRoom,
            action.payload
        )

        if (response == null) {
            toast.error('This host room does not exist or was deleted')
        } else {
            yield put(SetDashboardSection(DashboardSection.Start))
            yield put(SetHostRoomAction(response))
        }
    } catch (e) {
        yield put(AwsErrorAlertAction(e as IAwsError))
    }
}

export function* getHostRooms() {
    try {
        const userId: string = yield select(getUserId)
        const response: HostRoom[] = yield call(
            hostApi.getUserCreatedHostRooms,
            userId
        )

        if (response.length > 0) {
            yield put(GetHostRoomsSuccessAction(response))
            yield put(SetHostRoomAction(response[0]))
        } else {
            yield put(CreateHostRoomAction())
        }
    } catch (e) {
        yield put(AwsErrorAlertAction(e as IAwsError))
    }
}

export function* createHostRoom() {
    try {
        const userCreatedHostRooms: HostRoom[] = yield select(
            getUserCreatedHostRooms
        )

        if (userCreatedHostRooms.length >= 5) {
            toast.error('Maximum rooms created')
            return
        }

        const userId: string = yield select(getUserId)

        const input: CreateHostRoomInput = {
            createdUserId: userId,
            name: 'New Room'
        }

        const response: HostRoom = yield call(hostApi.createHostRoom, input)
        yield put(SetHostRoomAction(response))
    } catch (e) {
        yield put(AwsErrorAlertAction(e as IAwsError))
    }
}
