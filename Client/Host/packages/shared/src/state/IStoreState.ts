import { appInitialState, IAppState } from './contexts/app/IAppState';
import { IUserState, userInitialState } from './contexts/user/IUserState';
import { IWebRTCState, webRTCInitialState } from './contexts/webrtc/IWebRTCState';

export interface IStoreState {
    app: IAppState;
    // firebase: FirebaseReducer.Reducer<UserProfile, DBSchema>
    firebase: any;
    user: IUserState;
    webRTC: IWebRTCState
}

export const StoreState: IStoreState = {
    app: appInitialState,
    firebase: {},
    user: userInitialState,
    webRTC: webRTCInitialState
};
