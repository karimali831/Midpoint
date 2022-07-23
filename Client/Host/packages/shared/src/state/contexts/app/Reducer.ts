import { createReducer } from '@reduxjs/toolkit';
import { IAlert } from '../../../interface/IAlert';
import {
    HideAlertAction,
    SetAppFocusedAction,
    SetAppReadyAction,
    SetOnConfirmLoadingAction,
    ShowAlertAction,
    ShowScreenAction
} from './Actions';
import { appInitialState, InitialAlert } from './IAppState';

export const appReducer = createReducer(appInitialState, (builder) => {
    builder
        .addCase(SetAppFocusedAction, (state, action) => {
            state.appFocused = action.payload;
        })
        .addCase(ShowAlertAction, (state, action) => {
            let alert: IAlert = InitialAlert();

            const {
                title,
                message,
                status,
                autoHide,
                duration,
                blurBackground,
                position,
            } = action.payload;

            const isError = (status ?? alert.status) === 'error'

            alert = {
                title,
                message: message ?? alert.message,
                status: status ?? alert.status,
                autoHide: autoHide ?? (isError ? false : alert.autoHide),
                duration: duration ?? alert.duration,
                blurBackground: blurBackground ?? alert.blurBackground,
                position: position ?? alert.position,
            };

            state.alertModal = alert;
            state.showAlert = true;
        })
        .addCase(SetAppReadyAction, (state, action) => {
            const modify = [...state.appReady];
            modify.map((x) => {
                if (x.name === action.payload) {
                    x.loaded = true;
                }
            });

            state.appReady = modify;
        })
        .addCase(HideAlertAction, (state) => {
            state.alertModal = InitialAlert();
            state.showAlert = false;
        })
        .addCase(ShowScreenAction, (state, action) => {
            state.currentScreen = action.payload.screen;
        })
        .addCase(SetOnConfirmLoadingAction, (state, action) => {
            state.modalOnConfirmLoading = action.payload;
            state.showModal = action.payload;
        });
});
