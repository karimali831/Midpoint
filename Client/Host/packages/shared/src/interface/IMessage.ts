export interface IMessage {
    id: string
    userId: string
    roomId: string
    message: string
    createdAt: string
    isBot?: boolean
    read?: boolean
}