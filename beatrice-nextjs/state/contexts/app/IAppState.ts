import { PageName } from "../../../enum/PageName";


export interface IAppState {
    currentPage: PageName
}

export const appInitialState : IAppState = {
    currentPage: PageName.Home
}