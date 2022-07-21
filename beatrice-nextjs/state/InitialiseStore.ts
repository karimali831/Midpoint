import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { actionToPlainObject } from './middleware/actionToPlainObject';
import { rootSaga } from './middleware/sagas/rootSaga';
import rootReducer from './RootReducer';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage
};

const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: [actionToPlainObject, sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store