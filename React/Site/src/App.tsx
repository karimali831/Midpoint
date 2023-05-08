import { Amplify } from 'aws-amplify';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import awsmobile from './aws-exports.js';
import store from './state/InitialiseStore';
import './App.css';
import Navigation from './navigation/NavigationContainer.js';
import { AnimatedRoutes } from './navigation/AnimatedRoutes.js';
import { Footer } from './components/Footer/index.js';
import firebase from './config/firebase.js';
import { Box } from '@mui/material';

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
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <Box className="app">
                        <Toaster position="top-right" />
                        <Navigation />
                        <Box className="content-wrapper">
                            <AnimatedRoutes /> 
                            <Footer />
                        </Box>
                      </Box>
                </ReactReduxFirebaseProvider>
            </PersistGate>
        </Provider>
    );
}
