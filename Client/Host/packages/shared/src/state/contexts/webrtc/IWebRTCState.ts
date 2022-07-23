import { IUserConnection } from "../../../interface/IUserConnection";


export interface IWebRTCState {
    userConnections: IUserConnection[]
}

export const webRTCInitialState: IWebRTCState = {
    userConnections: [],
}