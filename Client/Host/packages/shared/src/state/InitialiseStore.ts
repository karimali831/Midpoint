import { configureStore } from '@reduxjs/toolkit';
import { loadingBarMiddleware, showLoading } from 'react-redux-loading-bar';
import { persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { LocationChangeAction } from './contexts/app/Actions';
import { createHistory } from './History';
import { actionToPlainObject } from './middleware/actionToPlainObject';
import { rootSaga } from './middleware/sagas/rootSaga';
import rootReducer from './RootReducer';
import { storage } from './storage';

export const history = createHistory();

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

sagaMiddleware.run(rootSaga);

store.dispatch(LocationChangeAction())

export default store;
