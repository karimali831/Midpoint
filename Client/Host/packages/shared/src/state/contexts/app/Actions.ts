import { createAction } from '@reduxjs/toolkit';
import { RouteParamList } from '../../../../types/types';
import { AppScreen } from '../../../enum/AppScreen';
import { LoadStartup } from '../../../enum/LoadStartup';
import { IAlert } from '../../../interface/IAlert';
import { IAxiosError } from '../../../interface/IAxiosError';
import { INotificationMessage } from '../../../interface/INotificationMessage';

// ACTION TYPES
export type ShowScreenType = {
    screen: AppScreen;
    replace?: boolean;
    params?: RouteParamList[keyof RouteParamList];
};

// ACTION CREATORS
const SetAppFocusedAction = createAction<boolean>('@@app/setappfocused');
const AxiosErrorAlertAction = createAction<IAxiosError>('@@app/axioserroralert');
const ShowAlertAction = createAction<IAlert>('@@app/showalert');
const LocationChangeAction = createAction('@@app/locationchange');
const SetAppReadyAction = createAction<LoadStartup>('@@app/setappready');
const HideAlertAction = createAction('@@app/hidealert');
const ShowScreenAction = createAction<ShowScreenType>('@@app/showscreen');
const SetOnConfirmLoadingAction = createAction<boolean>(
    '@@app/setonconfirmloading'
);
const GoBackAction = createAction('@@app/goback');
const SendNotificationAction = createAction<{
    message: INotificationMessage;
    delayInSeconds?: number;
}>('@@app/sendnotification');

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
    AxiosErrorAlertAction
};

