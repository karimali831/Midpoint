import { Amplify } from 'aws-amplify';
import firebase from "firebase/app";
import { NativeBaseProvider } from 'native-base';
import React from "react";
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import awsmobile from './aws-exports.js';
import Alert from './components/AlertModal';
import { Router } from './router/Router';
import store from './state/InitialiseStore';

const persistor = persistStore(store);

console.log('[RENDER] App');

const rrfConfig = {
    userProfile: 'users',
};

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
};

Amplify.configure({
    ...awsmobile,
    Analytics: {
        disabled: true,
    }
})

export function App() {

    React.useEffect(() => { })

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <NativeBaseProvider>
                        <Alert />
                        <Router />
                    </NativeBaseProvider>
                </ReactReduxFirebaseProvider>
            </PersistGate>
        </Provider>
    );
}
