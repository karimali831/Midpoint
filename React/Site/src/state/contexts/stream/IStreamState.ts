import { HostRoom } from '../../../API'
import { IChannel } from '../../../interface/IChannel'
import { IChannelData } from '../../../interface/IChannelData'
import { IUserConnection } from '../../../interface/IUserConnection'

export interface IStreamState {
    userConnection: IUserConnection | null
    channels: IChannel[]
    channelData: IChannelData[]
    onlineUsers: IUserConnection[]
    loadingMessages: boolean
    loadingMore: boolean
    updatingHostRoom: boolean
    pageNumber: number
    pageSize: number
    midPointJoinId: string | null
    selectedHostRoom: HostRoom | null
    userCreatedHostRooms: HostRoom[]
    timeLiveDuration: moment.Duration | null
    timeLiveStr: string
}

export const streamInitialState: IStreamState = {
    userConnection: null,
    channels: [],
    channelData: [],
    onlineUsers: [],
    loadingMessages: false,
    loadingMore: false,
    updatingHostRoom: false,
    pageNumber: 0,
    pageSize: 50,
    midPointJoinId: null,
    selectedHostRoom: null,
    userCreatedHostRooms: [],
    timeLiveDuration: null,
    timeLiveStr: '0m 0s'
}
