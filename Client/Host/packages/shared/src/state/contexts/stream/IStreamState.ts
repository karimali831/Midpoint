import { HostRoom } from "../../../graphql/types";
import { IChannel } from "../../../interface/IChannel";
import { IChannelData } from "../../../interface/IChannelData";
import { IUserConnection } from "../../../interface/IUserConnection";


export interface IStreamState {
    userConnection: IUserConnection | null
    channels: IChannel[]
    channelData: IChannelData[]
    onlineUsers: IUserConnection[]
    loadingMessages: boolean
    loadingMore: boolean
    pageNumber: number
    pageSize: number

    selectedHostRoom: HostRoom | null
    userCreatedHostRooms: HostRoom[]

}

export const streamInitialState: IStreamState = {
    userConnection: null,
    channels: [],
    channelData: [],
    onlineUsers: [],
    loadingMessages: false,
    loadingMore: false,
    pageNumber: 0,
    pageSize: 50,

    selectedHostRoom: null,
    userCreatedHostRooms: []
}