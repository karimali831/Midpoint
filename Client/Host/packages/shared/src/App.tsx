import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Amplify } from 'aws-amplify';
import firebase from "firebase/app";
import { NativeBaseProvider } from 'native-base';
import React from "react";
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import awsmobile from './aws-exports.js';
import { Router } from './router/Router';
import store from './state/InitialiseStore';
import './styles.css';

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
                        <div className="App wrapper">
                            <Toaster position="top-right" />
                            <Router />
                        </div>
                    </NativeBaseProvider>
                </ReactReduxFirebaseProvider>
            </PersistGate>
        </Provider>
    );
}
