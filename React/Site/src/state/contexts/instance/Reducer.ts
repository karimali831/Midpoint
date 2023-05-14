import { createReducer } from '@reduxjs/toolkit'
import {
    CreateFailureAction,
    CreateSuccessAction,
    GetInstancesAction,
    GetInstancesFailureAction,
    GetInstancesSuccessAction
} from './Actions'
import { instanceInitialState } from './IInstanceState'

export const instanceReducer = createReducer(
    instanceInitialState,
    (builder) => {
        builder
            .addCase(CreateSuccessAction, (state, action) => {
                state.instance = action.payload
                state.instanceFailure = null
            })
            .addCase(CreateFailureAction, (state, action) => {
                state.instanceFailure = action.payload
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
    }
)
