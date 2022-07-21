import { PayloadAction } from '@reduxjs/toolkit';
import { NextResponse } from 'next/server';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { PageName } from '../../../enum/PageName';
import { Routes } from '../../../pages/routes';
import { userAuth } from '../../../state/contexts/user/Selectors';
import { NavigatePageAction, ShowAlertAction } from '../../contexts/app/Actions';

export default function* navigationSaga() {
    yield takeLatest(NavigatePageAction.type, navigateToPage)
}

export function* navigateToPage(route: PayloadAction<PageName>) {
    try {
        const auth: boolean = yield select(userAuth);
        const navToPage = Routes.filter((x) => x.name === route.payload)[0];

        if (navToPage.memberOnly && !auth) {    
            yield call(NextResponse.redirect, navToPage.url)
        }
        else {
            yield call(NextResponse.redirect, "/")
        }
    }
    catch (e) {
        console.error(e)
        yield put(
            ShowAlertAction({
                title: 'Error navigating you',
            })
        );
    }
}
