import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { hostApi } from '../../../../api/hostApi';
import { CreateHostRoomInput } from '../../../../graphql/types';
import { IAwsError } from '../../../../interface/IAwsError';
import { AwsErrorAlertAction } from '../../../contexts/app/Actions';
import { getUserId } from '../../../contexts/user/Selectors';
import { SendMessageAction } from '../../../contexts/webrtc/Actions';

export default function* hostApiSaga() {
    yield takeLatest(SendMessageAction.type, createHostRoom);
}

export function* createHostRoom(action: PayloadAction<CreateHostRoomInput>) {
    try {
        const userId: string = yield select(getUserId)

        action.payload.createdUserId = userId

        yield call(hostApi.createHostRoom, action.payload)

    } catch (e) {
        yield put(AwsErrorAlertAction(e as IAwsError))
    }
}

