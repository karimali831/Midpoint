import { combineReducers } from '@reduxjs/toolkit';
import { firebaseReducer } from 'react-redux-firebase';
import { appReducer } from './contexts/app/Reducer';
import { midiReducer } from './contexts/midi/Reducer';
import { userReducer } from './contexts/user/Reducer';
import { webRTCReducer } from './contexts/webrtc/Reducer';
import { IStoreState } from './IStoreState';

const rootReducer = combineReducers<IStoreState>({
    app: appReducer,
    user: userReducer,
    firebase: firebaseReducer,
    webRTC: webRTCReducer,
    midi: midiReducer
});

export default rootReducer;
