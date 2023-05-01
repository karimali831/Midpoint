import { IMessage } from "./IMessage";
import { IParticipant } from "./IParticipant";

export interface IChannelData {
    roomId: string
    totalMessages: number
    participants: IParticipant[]
    messages: IMessage[]
}