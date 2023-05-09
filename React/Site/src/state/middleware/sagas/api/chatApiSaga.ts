import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, select, takeLatest } from 'redux-saga/effects'
import { chatApi } from '../../../../api/chatApi'
import { IAwsError } from '../../../../interface/IAwsError'
import { IChannelData } from '../../../../interface/IChannelData'
import { IMessage } from '../../../../interface/IMessage'
import { AwsErrorAlertAction } from '../../../contexts/app/Actions'
import { getUserId } from '../../../contexts/user/Selectors'
import {
    GetHostRoomDataAction,
    GetHostRoomDataSuccessAction,
    SendMessageAction
} from '../../../contexts/stream/Actions'
// import { getPageNumber, getPageSize } from '../../../contexts/stream/Selectors';

export default function* chatApiSaga() {
    yield takeLatest(SendMessageAction.type, sendMessage)
    yield takeLatest(GetHostRoomDataAction.type, loadChatRoomData)
}

export function* loadChatRoomData(
    action: PayloadAction<{
        roomId: string
        pageNumber: number
        loadMore?: boolean
    }>
) {
    try {
        // const pageSize: number = yield select(getPageSize)
        // const pageNumber: number = yield select(getPageNumber)

        const messages: IMessage[] = yield call(
            chatApi.getChatMessages,
            action.payload.roomId
        )

        if (messages.length === 0) return

        const data: IChannelData = {
            roomId: messages[0].roomId,
            totalMessages: 10,
            participants: [],
            messages
        }

        yield put(GetHostRoomDataSuccessAction(data))
    } catch (e) {
        yield put(AwsErrorAlertAction(e as IAwsError))
    }
}

export function* sendMessage(
    action: PayloadAction<{ message: IMessage; roomId: string }>
) {
    try {
        const {
            roomId,
            message: { message, isBot }
        } = action.payload

        if (isBot) return

        const userId: string = yield select(getUserId)

        yield call(chatApi.sendChatMessage, {
            userId,
            roomId,
            message: message,
            read: false
        })
    } catch (e) {
        yield put(AwsErrorAlertAction(e as IAwsError))
    }
}
