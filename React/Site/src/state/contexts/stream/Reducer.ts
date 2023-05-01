import { HubConnectionState } from '@microsoft/signalr';
import { createReducer } from '@reduxjs/toolkit';
import { IChannelData } from '../../../interface/IChannelData';
import { AddChannelAction, DeleteHostRoomAction, GetHostRoomDataAction, GetHostRoomDataSuccessAction, GetHostRoomsSuccessAction, SendMessageAction, SetConnectionStateAction, SetHostRoomAction, SetMidPointJoinIdAction, SetTimeLiveAction, SetUserConnectionAction, UpdateHostRoomAction, UpdateHostRoomFailAction, UpdateHostRoomSuccessAction, UsersInRoomAction } from './Actions';
import { streamInitialState } from './IStreamState';

export const streamReducer = createReducer(streamInitialState, (builder) => {
    builder
        .addCase(SetConnectionStateAction, (state, action) => {
            const userConnection = state.userConnection

            if (!userConnection)
                return

            const {
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

            let updatedState = Object.assign({}, userConnection)
            updatedState.connectionState = action.payload
            updatedState.showConnectionStatus = showStatus

            state.userConnection = updatedState
        })
        .addCase(SetUserConnectionAction, (state, action) => {
            state.userConnection = action.payload
        })
        .addCase(SetTimeLiveAction, (state, action) => {
            state.timeLiveDuration = action.payload.duration
            state.timeLiveStr = action.payload.value
        })
        .addCase(GetHostRoomDataAction, (state, action) => {

            state.loadingMessages = !action.payload.loadMore
            state.loadingMore = action.payload.loadMore ?? false
            state.pageNumber = action.payload.pageNumber
        })
        .addCase(GetHostRoomDataSuccessAction, (state, action) => {

            state.channelData = updateChatRoomMessages(state.channelData, action.payload)
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
        .addCase(GetHostRoomsSuccessAction, (state, action) => {
            state.userCreatedHostRooms = action.payload
        })
        .addCase(SetHostRoomAction, (state, action) => {
            state.selectedHostRoom = action.payload

            if (action.payload == null) {
                state.channelData = []
            }
        })
        .addCase(SetMidPointJoinIdAction, (state, action) => {
            state.midPointJoinId = action.payload
        })
        .addCase(DeleteHostRoomAction, (state, action) => {
            
            state.userCreatedHostRooms = state.userCreatedHostRooms.filter(x => x.id !== action.payload)

        })
        .addCase(UpdateHostRoomAction, (state) => {
            state.updatingHostRoom = true
        })
        .addCase(UpdateHostRoomSuccessAction, (state, action) => {
            
            state.selectedHostRoom = action.payload
            state.updatingHostRoom = false
        })
        .addCase(UpdateHostRoomFailAction, (state) => {

            state.updatingHostRoom = false
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