import { appInitialState, IAppState } from "./contexts/app/IAppState"
import { IUserState, userInitialState } from "./contexts/user/IUserState"

export interface IStoreState {
    app: IAppState
    firebase: any
    user: IUserState
}

export const StoreState : IStoreState = {
    app: appInitialState,
    firebase: {},
    user: userInitialState
}
