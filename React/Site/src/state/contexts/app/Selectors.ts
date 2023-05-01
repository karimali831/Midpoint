import { AppScreen } from '../../../enum/AppScreen';
import { INotificationOptions } from '../../../interface/INotificationOptions';
import { IStoreState } from '../../IStoreState';

export const getNotificationOptions = (
    state: IStoreState
): INotificationOptions => {
    return state.app.notificationOptions;
};

export const getAppState = (state: IStoreState) => state.app;

export const getAppReady = (state: IStoreState): boolean =>
    state.app.appReady.every((x) => x.loaded);

export const getCurrentScreen = (state: IStoreState): AppScreen =>
    state.app.currentScreen;
