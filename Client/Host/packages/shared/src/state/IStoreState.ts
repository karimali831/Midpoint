import { appInitialState, IAppState } from './contexts/app/IAppState';
import { chatInitialState, IChatState } from './contexts/chat/IChatState';
import { IMidiState, midiInitialState } from './contexts/midi/IMidiState';
import { IUserState, userInitialState } from './contexts/user/IUserState';
import { IStreamState, streamInitialState } from './contexts/stream/IStreamState';
import { ILoadingBarState, loadingBarInitialState } from './contexts/stream/ILoadingBarState';

export interface IStoreState {
    app: IAppState;
    // firebase: FirebaseReducer.Reducer<UserProfile, DBSchema>
    loadingBar: ILoadingBarState,
    firebase: any;
    user: IUserState;
    stream: IStreamState
    midi: IMidiState
    chat: IChatState
}

export const StoreState: IStoreState = {
    app: appInitialState,
    firebase: {},
    loadingBar: loadingBarInitialState,
    user: userInitialState,
    stream: streamInitialState,
    midi: midiInitialState,
    chat: chatInitialState
};
