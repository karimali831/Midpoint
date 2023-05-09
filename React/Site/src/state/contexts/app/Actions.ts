import { createAction } from '@reduxjs/toolkit'
import { SoftwareType } from '../../../components/Dashboard/Software/SoftwareSelect'
import { Page } from '../../../enum/Page'
import {
    DashboardSection,
    MidPointStep,
    Setting
} from '../../../enum/DashboardSection'
import { LoadStartup } from '../../../enum/LoadStartup'
import { IAwsError } from '../../../interface/IAwsError'
import { IAxiosError } from '../../../interface/IAxiosError'
import { INotificationMessage } from '../../../interface/INotificationMessage'

// ACTION CREATORS
const SetAppFocusedAction = createAction<boolean>('@@App/SetAppFocused')
const AxiosErrorAlertAction = createAction<IAxiosError>('@@App/AxiosErrorAlert')
const AwsErrorAlertAction = createAction<IAwsError>('@@App/AwsErrorAlert')
const LocationChangeAction = createAction('@@App/LocationChange')
const SetAppReadyAction = createAction<LoadStartup>('@@App/SetAppReady')
const ShowPageAction = createAction<Page>('@@App/ShowPage')
const SetSettingAction = createAction<Setting | null>('@App/SetSetting')
const SetOnConfirmLoadingAction = createAction<boolean>(
    '@@App/SetOnConfirmLoading'
)
const GoBackAction = createAction('@@App/Goback')
const SendNotificationAction = createAction<{
    message: INotificationMessage
    delayInSeconds?: number
}>('@@App/SendNotification')
const SetSoftwareAction = createAction<SoftwareType | null>('@@App/SetSoftware')
const SetDashboardSection = createAction<DashboardSection>(
    '@@App/SetDashboardSection'
)
const SetMidPointStep = createAction<MidPointStep>('@@App/SetMidPointStep')
const SetRegisteringAction = createAction<boolean>('@App/SetRegistering')

export {
    SetAppFocusedAction,
    SetAppReadyAction,
    ShowPageAction,
    SetOnConfirmLoadingAction,
    GoBackAction,
    SendNotificationAction,
    LocationChangeAction,
    AxiosErrorAlertAction,
    AwsErrorAlertAction,
    SetSoftwareAction,
    SetDashboardSection,
    SetMidPointStep,
    SetRegisteringAction,
    SetSettingAction
}
