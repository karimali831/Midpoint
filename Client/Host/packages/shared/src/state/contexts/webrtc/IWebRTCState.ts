import { IChannel } from "../../../interface/IChannel";
import { IChannelData } from "../../../interface/IChannelData";
import { IUserConnection } from "../../../interface/IUserConnection";


export interface IWebRTCState {
    userConnections: IUserConnection[]
    channels: IChannel[]
    channelData: IChannelData[]
    onlineUsers: IUserConnection[]
}

export const webRTCInitialState: IWebRTCState = {
    userConnections: [],
    channels: [],
    channelData: [],
    onlineUsers: []
}