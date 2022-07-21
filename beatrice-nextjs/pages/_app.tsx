import firebase from 'firebase/app';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import store from '../state/InitialiseStore';
import '../styles/globals.scss';

const persistor = persistStore(store);

const rrfConfig = {
    userProfile: 'users',
};

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
};

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <Component {...pageProps} />
                </ReactReduxFirebaseProvider>
            </PersistGate>
        </Provider>
    );
}
