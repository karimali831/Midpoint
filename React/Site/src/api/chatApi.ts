import { graphQLQuery } from '../graphql/api'
import { IMessage } from '../interface/IMessage'
import {
    createHostRoomChatMessage,
    deleteHostRoomChatMessage
} from '../graphql/mutations'
import { listHostRoomChatMessages } from '../graphql/queries'
import {
    CreateHostRoomChatMessageInput,
    CreateHostRoomChatMessageMutation,
    ListHostRoomChatMessagesQuery,
    ModelHostRoomChatMessageFilterInput,
    DeleteHostRoomChatMessageMutation,
    DeleteHostRoomChatMessageInput
} from '../API'

export class ChatApi {
    public sendChatMessage = async (input: CreateHostRoomChatMessageInput) => {
        console.log('[API] sendChatMessage')

        try {
            await graphQLQuery<
                CreateHostRoomChatMessageMutation,
                CreateHostRoomChatMessageInput
            >(createHostRoomChatMessage, {
                input
            })
        } catch (error) {
            console.error(ChatApi.name, 'sendChatMessage', error)
            throw error
        }
    }

    public getChatMessages = async (roomId: string): Promise<IMessage[]> => {
        console.log('[API] getChatMessages')

        try {
            const response = await graphQLQuery<
                ListHostRoomChatMessagesQuery,
                ModelHostRoomChatMessageFilterInput
            >(listHostRoomChatMessages, {
                filter: {
                    roomId: { eq: roomId }
                }
            })

            return response.data?.listHostRoomChatMessages?.items as IMessage[]
        } catch (error) {
            console.error(ChatApi.name, 'getChatMessages', error)
            throw error
        }
    }

    public getAllChatMessages = async (): Promise<IMessage[]> => {
        console.log('[API] getAllChatMessages')

        try {
            const response = await graphQLQuery<
                ListHostRoomChatMessagesQuery,
                ModelHostRoomChatMessageFilterInput
            >(listHostRoomChatMessages)
            return response.data?.listHostRoomChatMessages?.items as IMessage[]
        } catch (error) {
            console.error(ChatApi.name, 'getAllChatMessages', error)
            throw error
        }
    }

    public deleteChatMessages = async (id: string) => {
        console.log('[API] deleteChatMessages' + id)

        try {
            await graphQLQuery<
                DeleteHostRoomChatMessageMutation,
                DeleteHostRoomChatMessageInput
            >(deleteHostRoomChatMessage, {
                input: { id }
            })
        } catch (error) {
            console.error(ChatApi.name, 'deleteChatMessages', error)
            throw error
        }
    }
}

export const chatApi = new ChatApi()
