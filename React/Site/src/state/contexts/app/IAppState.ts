import { SoftwareType } from '../../../components/Dashboard/Software/SoftwareSelect';
import { AppScreen } from '../../../enum/AppScreen';
import { DashboardSection, MidPointStep } from '../../../enum/DashboardSection';
import { LoadStartup } from '../../../enum/LoadStartup';
import { ILoadStartup } from '../../../interface/ILoadStartup';
import { INotificationOptions } from '../../../interface/INotificationOptions';

export interface IAppState {
    appReady: ILoadStartup[];
    appFocused: boolean;
    currentScreen: AppScreen;
    showModal: boolean
    modalOnConfirmLoading: boolean;
    notificationOptions: INotificationOptions;
    selectedSoftware: SoftwareType | null
    dashboardSection: DashboardSection
    midpointStep: MidPointStep | null
    started: boolean
    registering: boolean
}

export const appInitialState: IAppState = {
    appReady: InitialStartupLoading(),
    appFocused: true,
    currentScreen: AppScreen.Dashboard,
    showModal: false,
    modalOnConfirmLoading: false,
    notificationOptions: InitialNotificationOptions(),
    selectedSoftware: null,
    dashboardSection: DashboardSection.Overview,
    midpointStep: null,
    started: false,
    registering: false
};

// Resources and data to load on splash screen before opening app
export function InitialStartupLoading(): ILoadStartup[] {
    return [
        {
            name: LoadStartup.Auth,
            loaded: true,
        },
        {
            name: LoadStartup.Resources,
            loaded: false,
        },
    ];
}

export function InitialNotificationOptions(): INotificationOptions {
    return {
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    };
}
