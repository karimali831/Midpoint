import { HostRoom } from "../../../graphql/types";
import { IStoreState } from "../../IStoreState";

export const getUserCreatedHostRooms = (state: IStoreState): HostRoom[] => state.stream.userCreatedHostRooms;

export const getSelectedHostRoom = (state: IStoreState) => state.stream.selectedHostRoom;

export const getStreamState = (state: IStoreState) => state.stream;

export const getPageSize = (state: IStoreState): number => state.stream.pageSize

export const getPageNumber = (state: IStoreState): number => state.stream.pageNumber

export const getLoadingBar = (state: IStoreState): number | null => state.loadingBar.default
