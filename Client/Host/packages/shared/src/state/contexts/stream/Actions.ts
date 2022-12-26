import { createAction } from '@reduxjs/toolkit';
import { HubConnectionState } from "@microsoft/signalr";
import { HostRoom } from '../../../graphql/types';
import { IChannel } from '../../../interface/IChannel';
import { IChannelData } from '../../../interface/IChannelData';
import { IMessage } from '../../../interface/IMessage';
import { IUserConnection } from '../../../interface/IUserConnection';

// ACTION CREATORS
const SetConnectionStateAction = createAction<HubConnectionState>('@@Stream/SetConnectionState');
const SetUserConnectionAction = createAction<IUserConnection | null>('@@Stream/SetUserConnection');
const UsersInRoomAction = createAction<IUserConnection[]>("@@Stream/UsersInRoom")
const AddChannelAction = createAction<IChannel>("@@Stream/AddChannel")
const SendMessageAction = createAction<{ message: IMessage, roomId: string }>("@@Stream/SendMessage")
const MessageReceivedAction = createAction<{ message: IMessage, roomId: string }>("@@Stream/MessageReceived")

const GetHostRoomDataAction = createAction<{
    roomId: string,
    pageNumber: number,
    loadMore?: boolean
}>("@@Stream/GetHostRoomData")


const GetHostRoomDataSuccessAction = createAction<IChannelData>("@@Stream/GetHostRoomDataSuccess")

const SetHostRoomAction = createAction<HostRoom | null>('@@Stream/SetHostRoom')
const CreateHostRoomAction = createAction('@@Stream/CreateHostRoom')
const GetHostRoomsAction= createAction('@@Stream/GetHostRooms')
const GetHostRoomAction= createAction<string>('@@Stream/GetHostRooms')
const GetHostRoomsSuccessAction= createAction<HostRoom[]>('@@Stream/GetHostRoomsSuccess')

export {
    SetConnectionStateAction,
    SetUserConnectionAction,
    UsersInRoomAction,
    AddChannelAction,
    SendMessageAction,
    MessageReceivedAction,
    GetHostRoomDataAction,
    GetHostRoomDataSuccessAction,
    CreateHostRoomAction,
    GetHostRoomsAction,
    GetHostRoomsSuccessAction,
    SetHostRoomAction,
    GetHostRoomAction // when joining a stream from ext link
};

