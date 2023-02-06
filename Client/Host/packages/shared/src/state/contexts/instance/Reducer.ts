import { createReducer } from '@reduxjs/toolkit';
import {
    CreateAction, CreateSuccessAction,
} from './Actions';
import { instanceInitialState } from './IInstanceState';

export const instanceReducer = createReducer(instanceInitialState, (builder) => {
    builder
        .addCase(CreateSuccessAction, (state, action) => {
            state.instance = action.payload
        })
});

