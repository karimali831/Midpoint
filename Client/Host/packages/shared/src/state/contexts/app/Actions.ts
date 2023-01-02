import { createAction } from '@reduxjs/toolkit';
import { RouteParamList } from '../../../../types/types';
import { SoftwareType } from '../../../components/Dashboard/Software/SoftwareSelect';
import { AppScreen } from '../../../enum/AppScreen';
import { DashboardSection, MidPointStep } from '../../../enum/DashboardSection';
import { LoadStartup } from '../../../enum/LoadStartup';
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
const LocationChangeAction = createAction('@@App/LocationChange');
const SetAppReadyAction = createAction<LoadStartup>('@@App/SetAppReady');
const ShowScreenAction = createAction<ShowScreenType>('@@App/ShowScreen');
const SetOnConfirmLoadingAction = createAction<boolean>(
    '@@App/SetOnConfirmLoading'
);
const GoBackAction = createAction('@@App/Goback');
const SendNotificationAction = createAction<{
    message: INotificationMessage;
    delayInSeconds?: number;
}>('@@App/SendNotification');
const SetSoftwareAction = createAction<SoftwareType | null>('@@App/SetSoftware');
const SetDashboardSection = createAction<DashboardSection>('@@App/SetDashboardSection')
const SetMidPointStep = createAction<MidPointStep>('@@App/SetMidPointStep')
const SetRegisteringAction = createAction<boolean>('@App/SetRegistering')

export {
    SetAppFocusedAction,
    SetAppReadyAction,
    ShowScreenAction,
    SetOnConfirmLoadingAction,
    GoBackAction,
    SendNotificationAction,
    LocationChangeAction,
    AxiosErrorAlertAction,
    AwsErrorAlertAction,
    SetSoftwareAction,
    SetDashboardSection,
    SetMidPointStep,
    SetRegisteringAction
};

