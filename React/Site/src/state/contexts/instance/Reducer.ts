import { createReducer } from '@reduxjs/toolkit'
import {
    CreateFailureAction,
    CreateSuccessAction,
    GetInstancesAction,
    GetInstancesFailureAction,
    GetInstancesSuccessAction,
    StartingAction,
    TerminateAction
} from './Actions'
import { instanceInitialState } from './IInstanceState'

export const instanceReducer = createReducer(
    instanceInitialState,
    (builder) => {
        builder
            .addCase(CreateSuccessAction, (state, action) => {
                state.instance = action.payload
                state.starting = false
            })
            .addCase(CreateFailureAction, (state, action) => {
                state.instanceFailure = action.payload
                state.starting = false
            })
            .addCase(GetInstancesAction, (state) => {
                state.loadingInstances = true
            })
            .addCase(GetInstancesSuccessAction, (state, action) => {
                state.instances = action.payload
                state.instancesFailure = null
                state.loadingInstances = false
            })
            .addCase(GetInstancesFailureAction, (state, action) => {
                state.instances = []
                state.instancesFailure = action.payload
                state.loadingInstances = false
            })
            .addCase(StartingAction, (state) => {
                state.starting = true
                state.instanceFailure = null
            })
            .addCase(TerminateAction, (state) => {
                state.instance = null
            })
    }
)
