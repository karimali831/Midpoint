import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from "redux-saga/effects";
import { IAxiosError } from '../../../interface/IAxiosError';
import { AxiosErrorAlertAction, ShowAlertAction } from '../../contexts/app/Actions';

export default function* appSaga() {
    yield takeLatest(AxiosErrorAlertAction.type, axiosErrorAlert);
}

export function* axiosErrorAlert(action: PayloadAction<IAxiosError>) {
    const error = action.payload

    if (error.response.data) {
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