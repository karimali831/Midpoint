import { appInitialState, IAppState } from './contexts/app/IAppState';
import { IMidiState, midiInitialState } from './contexts/midi/IMidiState';
import { IUserState, userInitialState } from './contexts/user/IUserState';
import { IWebRTCState, webRTCInitialState } from './contexts/webrtc/IWebRTCState';

export interface IStoreState {
    app: IAppState;
    // firebase: FirebaseReducer.Reducer<UserProfile, DBSchema>
    firebase: any;
    user: IUserState;
    webRTC: IWebRTCState
    midi: IMidiState
}

export const StoreState: IStoreState = {
    app: appInitialState,
    firebase: {},
    user: userInitialState,
    webRTC: webRTCInitialState,
    midi: midiInitialState
};
