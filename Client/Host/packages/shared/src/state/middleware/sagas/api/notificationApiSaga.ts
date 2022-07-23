import * as Notifications from 'expo-notifications';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { notificationApi } from '../../../../api/notificationApi';
import { INotificationOptions } from '../../../../interface/INotificationOptions';
import {
    SendNotificationAction,
    ShowAlertAction
} from '../../../contexts/app/Actions';
import { getNotificationOptions } from '../../../contexts/app/Selectors';
import { getUserPushToken } from '../../../contexts/user/Selectors';

export default function* notificationApiSaga() {
    const notificationOptions: INotificationOptions = yield select(
        getNotificationOptions
    );

    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: notificationOptions.shouldShowAlert,
            shouldPlaySound: notificationOptions.shouldPlaySound,
            shouldSetBadge: notificationOptions.shouldSetBadge,
        }),
    });

    yield takeLatest<ReturnType<typeof SendNotificationAction>>(
        SendNotificationAction.type,
        sendNotification
    );
}

export function* sendNotification(
    action: ReturnType<typeof SendNotificationAction>
) {
    try {
        const token: string = yield select(getUserPushToken);

        const { delayInSeconds, message } = action.payload;

        if (delayInSeconds && delayInSeconds > 0) {
            yield call(notificationApi.schedule, message, delayInSeconds);
        } else {
            yield call(notificationApi.send, message, token);
        }
    } catch (e: any) {

        yield put(
            ShowAlertAction({
                title: "Error sending notification",
                message: e.message,
            })
        );
    }
}
