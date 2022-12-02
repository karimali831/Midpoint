import { IChannel } from "../../../interface/IChannel";
import { IChannelData } from "../../../interface/IChannelData";
import { IUserConnection } from "../../../interface/IUserConnection";


export interface IWebRTCState {
    userConnection: IUserConnection | null
    channels: IChannel[]
    channelData: IChannelData[]
    onlineUsers: IUserConnection[]
    loadingMessages: boolean
    loadingMore: boolean
    pageNumber: number
    pageSize: number
}

export const webRTCInitialState: IWebRTCState = {
    userConnection: null,
    channels: [],
    channelData: [],
    onlineUsers: [],
    loadingMessages: false,
    loadingMore: false,
    pageNumber: 0,
    pageSize: 50,
}