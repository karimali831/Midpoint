import { IChannel } from "../../../interface/IChannel";
import { IChannelData } from "../../../interface/IChannelData";
import { IUserConnection } from "../../../interface/IUserConnection";


export interface IWebRTCState {
    userConnection: IUserConnection | null
    channels: IChannel[]
    channelData: IChannelData[]
    onlineUsers: IUserConnection[]
}

export const webRTCInitialState: IWebRTCState = {
    userConnection: null,
    channels: [],
    channelData: [],
    onlineUsers: []
}