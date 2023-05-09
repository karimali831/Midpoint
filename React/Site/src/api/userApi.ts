import moment from 'moment'
import { graphQLQuery } from '../graphql/api'
import { createUser, updateUser } from '../graphql/mutations'
import { listUsers } from '../graphql/queries'
import { IUser } from '../models/IUser'
import {
    ListUsersQuery,
    ModelUserFilterInput,
    UpdateUserMutation,
    UpdateUserInput,
    CreateUserMutation,
    CreateUserInput
} from '../API'

class UserApi {
    public getUserByFirebaseUid = async (userId: string): Promise<IUser> => {
        console.log('[API] fetchUser ' + moment().format('YYYY-MM-DD HH:MM'))

        try {
            const response = await graphQLQuery<
                ListUsersQuery,
                ModelUserFilterInput
            >(listUsers, {
                filter: {
                    firebaseUid: {
                        eq: userId
                    }
                }
            })

            const user = response.data?.listUsers?.items
            return user![0] as IUser
        } catch (error) {
            console.error(
                UserApi.name,
                'fetchUser',
                JSON.stringify(error, null, 2)
            )
            throw error
        }
    }

    public updateUserInfo = async (
        key: keyof IUser,
        value: string,
        userId: string
    ): Promise<boolean> => {
        console.log('[API] fetchUser')

        try {
            const response = await graphQLQuery<
                UpdateUserMutation,
                UpdateUserInput
            >(updateUser, {
                input: {
                    id: userId,
                    [key]: value
                }
            })

            return response.data?.updateUser ? true : false
        } catch (error: any) {
            console.error(UserApi.name, 'fetchUser', error.message)
            throw error
        }
    }

    public createUser = async (dto: ICreateUserDTO): Promise<IUser> => {
        console.log('[API] createUser')

        try {
            const response = await graphQLQuery<
                CreateUserMutation,
                CreateUserInput
            >(createUser, {
                input: {
                    firebaseUid: dto.firebaseUid,
                    email: dto.email,
                    displayName: dto.displayName,
                    fullName: dto.fullName,
                    purchasedTokens: 0,
                    remainingTokens: 0,
                    totalStreams: 0,
                    totalSeconds: 0
                }
            })

            return response.data?.createUser as IUser
        } catch (error: any) {
            console.error(UserApi.name, 'fetchUser', error.message)
            throw error
        }
    }
}

export interface ICreateUserDTO {
    email: string
    firebaseUid: string
    fullName: string
    displayName: string
    purchasedTokens: number
    remainingTokens: number
}

export const userApi = new UserApi()
