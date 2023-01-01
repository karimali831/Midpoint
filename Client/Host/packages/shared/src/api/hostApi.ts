import { graphQLQuery } from "../graphql/api";
import { createHostRoom, deleteHostRoom } from "../graphql/mutations";
import { listHostRooms, listHostRoomUsers } from "../graphql/queries";
import { CreateHostRoomInput, CreateHostRoomMutation, DeleteHostRoomInput, DeleteHostRoomMutation, DeleteHostRoomUserInput, DeleteHostRoomUserMutation, HostRoom, HostRoomUser, ListHostRoomsQuery, ListHostRoomUsersQuery, ModelHostRoomChatMessageFilterInput, ModelHostRoomFilterInput, ModelHostRoomUserFilterInput } from "../graphql/types";

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
        console.log("[API] getUserCreatedHostRooms")

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

    public getHostRoomUsers = async (roomId: string): Promise<HostRoomUser[]> => {
        console.log("[API] getHostRoomUsers")

        try {
            const response = await graphQLQuery<ListHostRoomUsersQuery, ModelHostRoomUserFilterInput>(listHostRoomUsers, {
                filter: {
                    hostRoomId: { eq: roomId }
                }
            });

            return response.data?.listHostRoomUsers?.items as HostRoomUser[]
        }
        catch (error) {
            console.error(HostApi.name, "getHostRoomUsers", error);
            throw error;
        }
    }

    public deleteHostRoom = async (id: string): Promise<boolean> => {
        console.log("[API] deleteHostRoom" + id)

        try {
            const response = await graphQLQuery<DeleteHostRoomMutation, DeleteHostRoomInput>(deleteHostRoom, {
                input: { id }
            });

            return response.data?.deleteHostRoom ? true : false
        }
        catch (error) {
            console.error(HostApi.name, "deleteHostRoom", error);
            throw error;
        }
    }

    public deleteHostRoomUsers = async (id: string) => {
        console.log("[API] deleteHostRoomUsers")

        try {
            await graphQLQuery<DeleteHostRoomUserMutation, DeleteHostRoomUserInput>(deleteHostRoom, {
                input: { id }
            });
        }
        catch (error) {
            console.error(HostApi.name, "deleteHostRoomUsers", error);
            throw error;
        }
    }

}


export const hostApi = new HostApi();
