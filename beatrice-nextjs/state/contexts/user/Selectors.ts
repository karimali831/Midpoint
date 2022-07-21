import { IUser } from "../../../model/IUser";
import { IStoreState } from "../../../state/IStoreState";

export const userState = (state: IStoreState) => state.user;

export const getUser = (state: IStoreState): IUser | null => 
    state.user.user

export const userAuth = (state: IStoreState): boolean => 
    state.user.user != null

export const getUserId = (state: IStoreState): string | null => 
    state.user.user?.userId ?? null