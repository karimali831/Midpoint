import { graphQLQuery } from "../graphql/api";
import { createHostRoomChatMessage } from "../graphql/mutations";
import { listHostRoomChatMessages } from "../graphql/queries";
import { CreateHostRoomChatMessageInput, CreateHostRoomChatMessageMutation, ListHostRoomChatMessagesQuery, ModelHostRoomChatMessageFilterInput } from "../graphql/types";
import { IMessage } from "../interface/IMessage";

export class ChatApi {

    public sendChatMessage = async (input: CreateHostRoomChatMessageInput) => {
        console.log("[API] sendChatMessage")

        try {
            await graphQLQuery<CreateHostRoomChatMessageMutation, CreateHostRoomChatMessageInput>(createHostRoomChatMessage, {
                input
            });
        }
        catch (error) {
            console.error(ChatApi.name, "sendChatMessage", error);
            throw error;
        }
    }

    public getChatMessages = async (roomId: string): Promise<IMessage[]> => {
        console.log("[API] getChatMessages")

        try {
            const response = await graphQLQuery<ListHostRoomChatMessagesQuery, ModelHostRoomChatMessageFilterInput>(listHostRoomChatMessages, {
                filter: {
                    roomId: { eq: roomId }
                }
            });

            return response.data?.listHostRoomChatMessages?.items as IMessage[]
        }
        catch (error) {
            console.error(ChatApi.name, "getChatMessages", error);
            throw error;
        }
    }
}


export const chatApi = new ChatApi();
