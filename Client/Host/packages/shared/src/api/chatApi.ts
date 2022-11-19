import { graphQLQuery } from "../graphql/api";
import { createHostRoomChatMessage } from "../graphql/mutations";
import { CreateHostRoomChatMessageInput, CreateHostRoomChatMessageMutation } from "../graphql/types";

export class ChatApi {

    public sendChatMessage = async (input: CreateHostRoomChatMessageInput): Promise<boolean> => {
        console.log("[API] sendChatMessage")

        try {
            await graphQLQuery<CreateHostRoomChatMessageMutation, CreateHostRoomChatMessageInput>(createHostRoomChatMessage, {
                input
            });

            return true
        }
        catch (error) {
            console.error(ChatApi.name, "sendChatMessage", error);
            throw error;
        }
    }
}


export const chatApi = new ChatApi();
