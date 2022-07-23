
import { HubConnection, HubConnectionState } from "@microsoft/signalr"

export interface IUserConnection {
    hubConnection: HubConnection
    connectionState: HubConnectionState
    showConnectionStatus: boolean
    userId: string
    name: string
    roomId: string
    isGroup: boolean
    focused: boolean
}