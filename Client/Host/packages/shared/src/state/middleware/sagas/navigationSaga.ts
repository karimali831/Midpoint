import { PayloadAction } from '@reduxjs/toolkit';
import { put, select, takeLatest } from 'redux-saga/effects';
import * as RootNavigation from '../../../navigation/RootNavigation';
import { DefaultScreen } from '../../../navigation/RootNavigation';
import { Routes } from '../../../router/Routes';
import {
    GoBackAction,
    ShowAlertAction,
    ShowScreenAction,
    ShowScreenType
} from '../../contexts/app/Actions';
import { getUserState } from '../../contexts/user/Selectors';

export default function* navigationSaga() {
    yield takeLatest(ShowScreenAction.type, navigateToScreen);
    yield takeLatest(GoBackAction.type, goBack);
}

export function* navigateToScreen(route: PayloadAction<ShowScreenType>) {
    try {
        const { screen, params, replace } = route.payload;

        const auth: boolean = yield select(getUserState);
        const newScreen = Routes.filter((x) => x.screen === screen)[0];

        if (newScreen.memberOnly && !auth) {
            yield RootNavigation.replace(DefaultScreen, params);
        } else {
            if (replace) {
                yield RootNavigation.replace(screen, params);
            } else {
                yield RootNavigation.navigate(screen, params);
            }
        }
    } catch (e) {
        console.error(e);
        yield put(
            ShowAlertAction({
                title: 'Error navigating you',
            })
        );
    }
}

export function* goBack() {
    try {
        yield RootNavigation.goBack();
    } catch (e) {
        console.error(e);
        yield put(
            ShowAlertAction({
                title: 'Error navigating back',
            })
        );
    }
}
