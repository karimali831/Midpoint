import { createAction } from '@reduxjs/toolkit';
import { RouteParamList } from '../../../../types/types';
import { AppScreen } from '../../../enum/AppScreen';
import { LoadStartup } from '../../../enum/LoadStartup';
import { IAlert } from '../../../interface/IAlert';
import { IAwsError } from '../../../interface/IAwsError';
import { IAxiosError } from '../../../interface/IAxiosError';
import { INotificationMessage } from '../../../interface/INotificationMessage';

// ACTION TYPES
export type ShowScreenType = {
    screen: AppScreen;
    replace?: boolean;
    params?: RouteParamList[keyof RouteParamList];
};

// ACTION CREATORS
const SetAppFocusedAction = createAction<boolean>('@@App/SetAppFocused');
const AxiosErrorAlertAction = createAction<IAxiosError>('@@App/AxiosErrorAlert');
const AwsErrorAlertAction = createAction<IAwsError>('@@App/AwsErrorAlert');
const ShowAlertAction = createAction<IAlert>('@@App/ShowAlert');
const LocationChangeAction = createAction('@@App/LocationChange');
const SetAppReadyAction = createAction<LoadStartup>('@@App/SetAppReady');
const HideAlertAction = createAction('@@App/HideAlert');
const ShowScreenAction = createAction<ShowScreenType>('@@App/ShowScreen');
const SetOnConfirmLoadingAction = createAction<boolean>(
    '@@App/SetOnConfirmLoading'
);
const GoBackAction = createAction('@@App/Goback');
const SendNotificationAction = createAction<{
    message: INotificationMessage;
    delayInSeconds?: number;
}>('@@App/SendNotification');

export {
    SetAppFocusedAction,
    ShowAlertAction,
    SetAppReadyAction,
    HideAlertAction,
    ShowScreenAction,
    SetOnConfirmLoadingAction,
    GoBackAction,
    SendNotificationAction,
    LocationChangeAction,
    AxiosErrorAlertAction,
    AwsErrorAlertAction
};

