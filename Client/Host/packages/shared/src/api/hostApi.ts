import { graphQLQuery } from "../graphql/api";
import { createHostRoom } from "../graphql/mutations";
import { listHostRooms } from "../graphql/queries";
import { CreateHostRoomInput, CreateHostRoomMutation, HostRoom, ListHostRoomsQuery, ModelHostRoomChatMessageFilterInput } from "../graphql/types";

export class HostApi {

    public createHostRoom = async (input: CreateHostRoomInput) => {
        console.log("[API] createHostRoom")

        try {
            await graphQLQuery<CreateHostRoomMutation, CreateHostRoomInput>(createHostRoom, {
                input
            });
        }
        catch (error) {
            console.error(HostApi.name, "createHostRoom", error);
            throw error;
        }
    }

    public getHostRoom = async (roomId: string): Promise<HostRoom> => {
        console.log("[API] getChatMessages")

        try {
            const response = await graphQLQuery<ListHostRoomsQuery, ModelHostRoomChatMessageFilterInput>(listHostRooms, {
                filter: {
                    roomId: { eq: roomId }
                }
            });

            return response.data?.listHostRooms?.items[0] as HostRoom
        }
        catch (error) {
            console.error(HostApi.name, "getChatMessages", error);
            throw error;
        }
    }



}


export const hostApi = new HostApi();
