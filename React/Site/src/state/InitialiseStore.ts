import { configureStore } from '@reduxjs/toolkit';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import { persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { LocationChangeAction } from './contexts/app/Actions';
import { createBrowserHistory  } from 'history';
import { actionToPlainObject } from './middleware/actionToPlainObject';
import { rootSaga } from './middleware/sagas/rootSaga';
import rootReducer from './RootReducer';
import { storage } from './storage';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuthEmptyAction, FirebaseAuthenticatedAction } from './contexts/user/Actions';
import { auth } from '../config/firebase';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [],
};

const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: [
        actionToPlainObject, 
        sagaMiddleware,
        loadingBarMiddleware()
    ],
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        store.dispatch(FirebaseAuthenticatedAction(user))
    } else {
        store.dispatch(FirebaseAuthEmptyAction)
    }
})

sagaMiddleware.run(rootSaga);
store.dispatch(LocationChangeAction())

export default store;
