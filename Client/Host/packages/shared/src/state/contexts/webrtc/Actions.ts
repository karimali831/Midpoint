import { createAction } from '@reduxjs/toolkit';

import { HubConnectionState } from "@microsoft/signalr";
import { IChannel } from '../../../interface/IChannel';
import { IMessage } from '../../../interface/IMessage';
import { IUserConnection } from '../../../interface/IUserConnection';

// ACTION CREATORS
const SetConnectionStateAction = createAction<HubConnectionState>('@@WebRTC/SetConnectionState');
const SetUserConnectionAction = createAction<IUserConnection>('@@WebRTC/SetUserConnection');
const UsersInRoomAction = createAction<IUserConnection[]>("@@WebRTC/UsersInRoom")
const AddChannelAction = createAction<IChannel>("@@WebRTC/AddChannel")
const SendMessageAction = createAction<{ message: IMessage, roomId: string }>("@@WebRTC/SendMessage")
const MessageReceivedAction = createAction<{ message: IMessage, roomId: string }>("@@WebRTC/MessageReceived")

export {
    SetConnectionStateAction,
    SetUserConnectionAction,
    UsersInRoomAction,
    AddChannelAction,
    SendMessageAction,
    MessageReceivedAction
};

