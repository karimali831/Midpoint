
import { HubConnection, HubConnectionState } from "@microsoft/signalr"

export interface IUserConnection {
    hubConnection: HubConnection
    connectionState: HubConnectionState
    showConnectionStatus: boolean
    userId: string
    displayName: string
    roomId: string
    roomName: string
}