import { createReducer } from '@reduxjs/toolkit'
import {
    SetAppFocusedAction,
    SetAppReadyAction,
    SetDashboardSection,
    SetMidPointStep,
    SetOnConfirmLoadingAction,
    SetRegisteringAction,
    SetSettingAction,
    SetSoftwareAction,
    ShowPageAction
} from './Actions'
import { appInitialState } from './IAppState'

export const appReducer = createReducer(appInitialState, (builder) => {
    builder
        .addCase(SetAppFocusedAction, (state, action) => {
            state.appFocused = action.payload
        })
        .addCase(SetAppReadyAction, (state, action) => {
            const modify = [...state.appReady]
            modify.map((x) => {
                if (x.name === action.payload) {
                    x.loaded = true
                }
            })

            state.appReady = modify
        })

        .addCase(ShowPageAction, (state, action) => {
            state.page = action.payload
        })
        .addCase(SetOnConfirmLoadingAction, (state, action) => {
            state.modalOnConfirmLoading = action.payload
            state.showModal = action.payload
        })
        .addCase(SetSoftwareAction, (state, action) => {
            state.selectedSoftware = action.payload
        })
        .addCase(SetDashboardSection, (state, action) => {
            state.dashboardSection = action.payload
            state.midpointStep = null
        })
        .addCase(SetMidPointStep, (state, action) => {
            state.midpointStep = action.payload
        })
        .addCase(SetRegisteringAction, (state, action) => {
            state.registering = action.payload
        })

        .addCase(SetSettingAction, (state, action) => {
            state.setting = action.payload
        })
})
