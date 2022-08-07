import { HubConnectionState } from '@microsoft/signalr';
import { createReducer } from '@reduxjs/toolkit';
import { IChannelData } from '../../../interface/IChannelData';
import { AddChannelAction, AddUserConnectionAction, SendMessageAction, SetConnectionStateAction, UpdateActiveUserConnectionAction, UsersInRoomAction } from './Actions';
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
        .addCase(AddUserConnectionAction, (state, action) => {
            const existing = state.userConnections.find(x => x.roomId == action.payload.roomId);

            if (!existing) {
                state.userConnections = [...state.userConnections.map(x => {
                    x.focused = false
                    return x
                }), action.payload]
            }
            else {
                state.userConnections = state.userConnections.map(g => {
                    return {
                        ...g, ...{
                            focused: g.roomId === action.payload.roomId
                        }
                    }
                })
            }


        })
        .addCase(UpdateActiveUserConnectionAction, (state, action) => {
            state.userConnections = state.userConnections.map(g => {
                return {
                    ...g, ...{
                        focused: g.roomId === action.payload.roomId && action.payload.isActive
                    }
                }
            })
        })

        .addCase(SendMessageAction, (state, action) => {
            const { roomId, message } = action.payload
            const existing = state.channelData.find(x => x.roomId == roomId);
            let data: IChannelData

            if (!existing) {
                data = {
                    roomId,
                    totalMessages: message.isBot ? 0 : 1,
                    participants: [],
                    messages: [message]

                }
            }
            else {
                data = {
                    roomId,
                    totalMessages: message.isBot ? existing.totalMessages : existing.totalMessages + 1,
                    participants: existing.participants,
                    messages: [message]

                }
            }

            state.channelData = updateChatRoomMessages(state.channelData, data)
        })
        .addCase(AddChannelAction, (state, action) => {
            state.channels = [action.payload, ...state.channels]
        })
        .addCase(UsersInRoomAction, (state, action) => {
            state.onlineUsers = action.payload

            const roomId = action.payload[0].roomId

            state.channelData = state.channelData.map(g => {
                if (g.roomId === roomId) {
                    let participants = g.participants.map(m => {
                        return {
                            ...m, ...{
                                online: action.payload.some(x => x.userId === m.id)
                            }
                        }
                    })

                    return {
                        ...g,
                        participants: participants
                    }

                }
                else {
                    return { ...g }
                }

            })

        })
});

const updateChatRoomMessages = (channelData: IChannelData[], data: IChannelData) => {
    const existing = channelData.find(x => x.roomId == data.roomId);
    let updateState: IChannelData[]

    if (!existing) {
        updateState = [...channelData, data]
    }
    else {

        updateState = channelData.map(g => {
            if (g.roomId === data.roomId) {
                return {
                    ...g, ...{
                        messages: [...g.messages, ...data.messages],
                        totalMessages: data.totalMessages
                    }
                }
            }
            else {
                return { ...g }
            }
        })
    }

    return updateState
}