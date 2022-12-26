import { graphQLQuery } from "../graphql/api";
import { createHostRoom } from "../graphql/mutations";
import { listHostRooms } from "../graphql/queries";
import { CreateHostRoomInput, CreateHostRoomMutation, HostRoom, ListHostRoomsQuery, ModelHostRoomChatMessageFilterInput, ModelHostRoomFilterInput } from "../graphql/types";

export class HostApi {

    public createHostRoom = async (input: CreateHostRoomInput): Promise<HostRoom> => {
        console.log("[API] createHostRoom")

        try {
            const response = await graphQLQuery<CreateHostRoomMutation, CreateHostRoomInput>(createHostRoom, {
                input
            });

            return response.data as HostRoom
        }
        catch (error) {
            console.error(HostApi.name, "createHostRoom", error);
            throw error;
        }
    }

    public getUserCreatedHostRooms = async (userId: string): Promise<HostRoom[]> => {
        console.log("[API] getChatMessages")

        try {
            const response = await graphQLQuery<ListHostRoomsQuery, ModelHostRoomFilterInput>(listHostRooms, {
                filter: {
                    createdUserId: { eq: userId }
                }
            });

            return response.data?.listHostRooms?.items as HostRoom[]
        }
        catch (error) {
            console.error(HostApi.name, "getUserCreatedHostRooms", error);
            throw error;
        }
    }

    public getHostRoom = async (roomId: string): Promise<HostRoom> => {
        console.log("[API] getChatMessages")

        try {
            const response = await graphQLQuery<ListHostRoomsQuery, ModelHostRoomFilterInput>(listHostRooms, {
                filter: {
                    id: { eq: roomId }
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
