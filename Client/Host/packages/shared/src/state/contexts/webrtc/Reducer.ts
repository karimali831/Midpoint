import { HubConnectionState } from '@microsoft/signalr';
import { createReducer } from '@reduxjs/toolkit';
import { SetConnectionStateAction } from './Actions';
import { webRTCInitialState } from './IWebRTCState';

export const webRTCReducer = createReducer(webRTCInitialState, (builder) => {
    builder
        .addCase(SetConnectionStateAction, (state, action) => {

            const userConnection = state.userConnections.filter(x => x.focused)[0]

            const {
                roomId,
                connectionState,
                showConnectionStatus
            } = userConnection


            const isConnected = action.payload === HubConnectionState.Connected
            let showStatus = !isConnected

            if (connectionState !== HubConnectionState.Connected && isConnected && showConnectionStatus) {
                setTimeout(() => {
                    showStatus = false
                }, 2000)
            }

            const updateState = state.userConnections.map(g => {
                return {
                    ...g, ...{
                        connectionState: g.roomId === roomId ? action.payload : g.connectionState,
                        showConnectionStatus: showStatus
                    }
                }
            })

            state.userConnections = updateState
        })
});

