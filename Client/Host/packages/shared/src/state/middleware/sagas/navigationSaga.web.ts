import { PayloadAction } from '@reduxjs/toolkit';
import { goBack } from 'react-router-redux';
import { put, select, takeLatest } from 'redux-saga/effects';
import { AppScreen } from '../../../enum/AppScreen';
import { DefaultScreen } from '../../../navigation/RootNavigation';
import { Routes } from '../../../router/Routes';
import { history } from '../../../state/InitialiseStore';
import {
    GoBackAction,
    LocationChangeAction,
    ShowAlertAction,
    ShowScreenAction,
    ShowScreenType
} from '../../contexts/app/Actions';
import { getCurrentScreen } from '../../contexts/app/Selectors';
import { getUserAuth } from '../../contexts/user/Selectors';

export default function* navigationSaga() {
    yield takeLatest(ShowScreenAction.type, navigateToScreen);
    yield takeLatest(GoBackAction.type, navigatePreviousScreen);
    yield takeLatest(LocationChangeAction.type, locationChange)
}

export function* locationChange() {

    const currentScreen: AppScreen = yield select(getCurrentScreen)
    const currentLocation = history.location.pathname;
    const currentRoute = Routes.filter((x) => x.url === currentLocation.toLowerCase())[0];

    // user accessing app from non default screen for first time
    if (currentScreen !== currentRoute.screen) {
        yield put(ShowScreenAction({
            screen: currentRoute.screen,
            replace: true
        }))
    }
}

export function* navigateToScreen(route: PayloadAction<ShowScreenType>) {
    try {
        const { screen, replace } = route.payload;

        const auth: boolean = yield select(getUserAuth);
        const newLocation = Routes.filter((x) => x.screen === screen)[0];
        const currentLocation = history.location.pathname;

        if (newLocation.url === currentLocation) {
            window.scrollTo(0, 0);
            return;
        }

        if (newLocation.memberOnly && !auth) {
            const defaultLocationUrl = Routes.filter(
                (x) => x.screen === DefaultScreen
            )[0].url;

            history.replace(defaultLocationUrl);
        }

        if (replace) {
            history.replace(newLocation.url);
        } else {
            history.push(newLocation.url);
        }
    } catch {
        yield put(
            ShowAlertAction({
                title: 'Error navigating you',
            })
        );
    }
}

export function* navigatePreviousScreen() {
    yield put(goBack());
}
