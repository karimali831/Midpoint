import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { chatApi } from '../../../../api/chatApi';
import { IAwsError } from '../../../../interface/IAwsError';
import { IMessage } from '../../../../interface/IMessage';
import { AwsErrorAlertAction } from '../../../contexts/app/Actions';
import { getUserId } from '../../../contexts/user/Selectors';
import { SendMessageAction } from '../../../contexts/webrtc/Actions';

export default function* chatApiSaga() {
    yield takeLatest(SendMessageAction.type, sendMessage);
}

export function* sendMessage(action: PayloadAction<{ message: IMessage, roomId: string }>) {
    try {
        const {
            roomId,
            message: {
                message,
                isBot
            }
        } = action.payload

        if (isBot)
            return

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
