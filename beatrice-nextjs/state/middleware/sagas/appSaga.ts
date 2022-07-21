import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from "redux-saga/effects";
import { IAxiosError } from '../../../interface/IAxiosError';
import { AxiosErrorAlertAction, ShowAlertAction } from '../../../state/contexts/app/Actions';

export default function* appSaga() {
    yield takeLatest(AxiosErrorAlertAction.type, axiosErrorAlert);
}


export function* axiosErrorAlert(action: PayloadAction<IAxiosError>) {
    const error = action.payload

    if (error.response.data) {
        console.log("Error:" + JSON.stringify(error.response, null, 2))

        const { title, errors, message } = error.response.data

        yield put(ShowAlertAction({
            title: title ?? message,
            message: error.message
        }));
        return;
    }

    yield put(ShowAlertAction({
        title: error.message
    }));
}