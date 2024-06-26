import { User } from '../API'

export interface IMessage {
    id: string
    userId: string
    name?: string
    roomId: string
    message: string
    createdAt: string
    isBot?: boolean
    read?: boolean
    user?: User | null
}
