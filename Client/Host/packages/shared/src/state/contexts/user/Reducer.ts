import { createReducer } from '@reduxjs/toolkit';
import {
    FirebaseAuthEmptyAction,
    LoginSuccessAction,
    SigninLoadingAction,
    UpdateUserInfoSuccessAction,
    UpdateUserPushTokenAction,
} from './Actions';
import { userInitialState } from './IUserState';

export const userReducer = createReducer(userInitialState, (builder) => {
    builder
        .addCase(SigninLoadingAction, (state) => {
            state.signingIn = !state.signingIn;
        })
        .addCase(LoginSuccessAction, (state, action) => {
            state.user = action.payload;
            state.signingIn = false;
            state.authSuccess = true;
        })
        .addCase(UpdateUserInfoSuccessAction, (state, action) => {
            state.user = Object.assign({}, state.user, {
                [action.payload.updatedKey]: action.payload.updatedValue,
            });
        })
        .addCase(FirebaseAuthEmptyAction, (state) => {
            state.user = null;
            state.authSuccess = false;
        })
        .addCase(UpdateUserPushTokenAction, (state, action) => {
            state.user = Object.assign({}, state.user, {
                pushToken: action.payload,
            });
        });
});
