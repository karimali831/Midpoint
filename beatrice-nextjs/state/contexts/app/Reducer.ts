import { createReducer } from '@reduxjs/toolkit';
import { NavigatePageAction } from './Actions';
import { appInitialState } from './IAppState';

export const appReducer = createReducer(appInitialState, (builder) => {
    builder
        .addCase(NavigatePageAction, (state, action) => {
            state.currentPage = action.payload;
        })
    });

