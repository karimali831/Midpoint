
import { IStoreState } from "../../IStoreState";

export const getWebRTCState = (state: IStoreState) => state.webRTC;

export const getPageSize = (state: IStoreState): number => state.webRTC.pageSize

export const getPageNumber = (state: IStoreState): number => state.webRTC.pageNumber
