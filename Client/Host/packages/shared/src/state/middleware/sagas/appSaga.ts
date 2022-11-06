import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery, takeLatest } from "redux-saga/effects";
import { IAwsError } from '../../../interface/IAwsError';
import { IAxiosError } from '../../../interface/IAxiosError';
import { AwsErrorAlertAction, AxiosErrorAlertAction, ShowAlertAction } from '../../contexts/app/Actions';

export default function* appSaga() {
    yield takeLatest(AxiosErrorAlertAction.type, axiosErrorAlert);
    yield takeEvery(AwsErrorAlertAction.type, awsErrorAlert);
}

export function* awsErrorAlert(action: PayloadAction<IAwsError>) {
    const error = action.payload

    yield put(ShowAlertAction({
        title: error.errors[0].message
    }))
}

export function* axiosErrorAlert(action: PayloadAction<IAxiosError>) {
    const error = action.payload

    if (error.response?.data) {
        const { title, errors } = error.response.data

        console.error(JSON.stringify(errors, null, 2))

        yield put(ShowAlertAction({
            title,
            message: JSON.stringify(errors, null, 2)
        }))
        return;
    }

    yield put(ShowAlertAction({
        title: error.message
    }));
}