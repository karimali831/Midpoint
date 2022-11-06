import { all, fork } from 'redux-saga/effects';
import chatApiSaga from './api/chatApiSaga';
import userApiSaga from './api/userApiSaga';
import appSaga from './appSaga';
import navigationSaga from './navigationSaga.web';

// We `fork()` these tasks so they execute in the background.
export function* rootSaga() {
    yield all([
        // App sagas
        fork(appSaga),
        fork(navigationSaga),
        fork(userApiSaga),

        // Business sagas
        fork(chatApiSaga),
    ]);
}
