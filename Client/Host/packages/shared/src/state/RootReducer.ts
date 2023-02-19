import { combineReducers } from '@reduxjs/toolkit';
import { firebaseReducer } from 'react-redux-firebase';
import { appReducer } from './contexts/app/Reducer';
import { chatReducer } from './contexts/chat/Reducer';
import { midiReducer } from './contexts/midi/Reducer';
import { userReducer } from './contexts/user/Reducer';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { streamReducer } from './contexts/stream/Reducer';
import { IStoreState } from './IStoreState';
import { instanceReducer } from './contexts/instance/Reducer';
import { checkoutReducer } from './contexts/checkout/Reducer';

const rootReducer = combineReducers<IStoreState>({
    app: appReducer,
    loadingBar: loadingBarReducer,
    firebase: firebaseReducer,
    user: userReducer,
    stream: streamReducer,
    midi: midiReducer,
    chat: chatReducer,
    instance: instanceReducer,
    checkout: checkoutReducer
});

export default rootReducer;
