import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery, takeLatest } from "redux-saga/effects";
import { IAwsError } from '../../../interface/IAwsError';
import { IAxiosError } from '../../../interface/IAxiosError';
import toast from 'react-hot-toast';
import { AwsErrorAlertAction, AxiosErrorAlertAction } from '../../contexts/app/Actions';

export default function* appSaga() {
    yield takeLatest(AxiosErrorAlertAction.type, axiosErrorAlert);
    yield takeEvery(AwsErrorAlertAction.type, awsErrorAlert);
}

export function* awsErrorAlert(action: PayloadAction<IAwsError>) {
    const error = action.payload

    console.log(error)

    toast.error(error.errors[0].message)
}

export function* axiosErrorAlert(action: PayloadAction<IAxiosError>) {
    const error = action.payload

    if (error.response?.data) {
        const { title, errors } = error.response.data
        console.error(JSON.stringify(errors, null, 2))
        toast.error(title + ": " + JSON.stringify(errors, null, 2))

        return;
    }

    toast.error(error.message)
}