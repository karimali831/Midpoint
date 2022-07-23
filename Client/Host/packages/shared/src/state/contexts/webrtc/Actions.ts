import { createAction } from '@reduxjs/toolkit';

import { HubConnectionState } from "@microsoft/signalr";
import { IChannel } from '../../../interface/IChannel';
import { IMessage } from '../../../interface/IMessage';
import { IUserConnection } from '../../../interface/IUserConnection';

// ACTION CREATORS
const SetConnectionStateAction = createAction<HubConnectionState>('@@webrtc/setconnectionstate');
const AddUserConnectionAction = createAction<IUserConnection>('@@webrtc/adduserconnection');
const UpdateActiveUserConnectionAction = createAction<{ roomId: string, isActive: boolean }>("@@webrtc/updateactiveuserconnection")
const UsersInRoomAction = createAction<IUserConnection[]>("@@webrtc/usersinroom")
const AddChannelAction = createAction<IChannel>("@@webrtc/addchannel")
const SendMessageAction = createAction<{ message: IMessage, roomId: string }>("@@webrtc/sendmessage")
const MessageReceivedAction = createAction<{ message: IMessage, roomId: string }>("@@webrtc/messagereceived")

export {
    SetConnectionStateAction,
    AddUserConnectionAction,
    UpdateActiveUserConnectionAction,
    UsersInRoomAction,
    AddChannelAction,
    SendMessageAction,
    MessageReceivedAction
};

