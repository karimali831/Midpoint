import { IUser } from "../../../model/IUser"

export interface IUserState {
    user: IUser | null
    signingIn: boolean
    authSuccess: boolean
}

export const userInitialState : IUserState = {
    user: null,
    signingIn: false,
    authSuccess: false
}
