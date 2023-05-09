import { SoftwareType } from '../../../components/Dashboard/Software/SoftwareSelect'
import { Page } from '../../../enum/Page'
import {
    DashboardSection,
    MidPointStep,
    Setting
} from '../../../enum/DashboardSection'
import { LoadStartup } from '../../../enum/LoadStartup'
import { ILoadStartup } from '../../../interface/ILoadStartup'
import { INotificationOptions } from '../../../interface/INotificationOptions'

export interface IAppState {
    appReady: ILoadStartup[]
    appFocused: boolean
    page: Page
    showModal: boolean
    modalOnConfirmLoading: boolean
    notificationOptions: INotificationOptions
    selectedSoftware: SoftwareType | null
    dashboardSection: DashboardSection
    midpointStep: MidPointStep | null
    setting: Setting | null
    started: boolean
    registering: boolean
}

export const appInitialState: IAppState = {
    appReady: InitialStartupLoading(),
    appFocused: true,
    page: Page.Dashboard,
    showModal: false,
    modalOnConfirmLoading: false,
    notificationOptions: InitialNotificationOptions(),
    selectedSoftware: null,
    dashboardSection: DashboardSection.Overview,
    midpointStep: null,
    setting: null,
    started: false,
    registering: false
}

// Resources and data to load on splash screen before opening app
export function InitialStartupLoading(): ILoadStartup[] {
    return [
        {
            name: LoadStartup.Auth,
            loaded: true
        },
        {
            name: LoadStartup.Resources,
            loaded: false
        }
    ]
}

export function InitialNotificationOptions(): INotificationOptions {
    return {
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false
    }
}
