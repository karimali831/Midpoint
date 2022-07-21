import { createReducer } from '@reduxjs/toolkit';
import { LoginSuccessAction, LogoutAction, SigninLoadingAction, UpdateUserInfoSuccessAction } from './Actions';
import { userInitialState } from './IUserState';

export const userReducer = createReducer(userInitialState, (builder) => {
    builder
        .addCase(SigninLoadingAction, (state) => {
            state.signingIn = !state.signingIn
        })
        .addCase(LoginSuccessAction, (state, action) => {
            state.user = action.payload
            state.signingIn = false
            state. authSuccess = true
        })
        .addCase(UpdateUserInfoSuccessAction, (state, action) => {
            state.user = Object.assign({},
                state.user, {
                    [action.payload.updatedKey]: action.payload.updatedValue
                })
        })
        .addCase(LogoutAction, (state) => {
            state.user = null
            state.authSuccess = false
        })
    })