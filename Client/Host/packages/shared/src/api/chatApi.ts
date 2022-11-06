import { graphQLQuery } from "../graphql/api"
import { ListHostRoomsQuery } from "../graphql/types"

export class SubscriptionApi {

    public fetchAvailableDrivers = async (): Promise<ICar[]> => {
        console.log("[API] fetchAvailableDrivers")

        try{
            const response = await graphQLQuery<ListHostRoomsQuery, ModelCarFilterInput>(listCars, {
                filter: {
                    isActive: { 
                        eq: true 
                    }
                }
            })

            return response.data?.listCars?.items as ICar[]
        }
        catch (error) {
            console.error(DriverApi.name, "fetchAvailableDrivers", error.response.data)
            throw error
        }
    }


}


export interface IUpdateChatRoomRequest {
    key: keyof IUserChatRoom,
    value: string,
    roomId: string
}

export interface IUpdateChatRoomUserRequest {
    key: keyof IUserChatRoom,
    value: string,
    userId: string,
    roomId: string,
    isGroup: boolean
}

export interface IChatRoomResponse {
    totalMessages: number,
    participants: IParticipant[]
    messages: IMessage[]
}

export const chatApi = new ChatApi();
