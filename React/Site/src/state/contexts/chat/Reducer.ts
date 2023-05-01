import { createReducer } from '@reduxjs/toolkit';
import { LoadingMessagesAction } from './Actions';
import { chatInitialState } from './IChatState';

export const chatReducer = createReducer(chatInitialState, (builder) => {
    builder
        .addCase(LoadingMessagesAction, (state, action) => {
            state.loadingMessages = action.payload
        })
});

