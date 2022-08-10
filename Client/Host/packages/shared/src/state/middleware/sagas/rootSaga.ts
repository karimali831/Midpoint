import { all, fork } from 'redux-saga/effects';
import userApiSaga from './api/userApiSaga';
import webRTCApiSaga from './api/webRTCApiSaga';
import appSaga from './appSaga';
import navigationSaga from './navigationSaga';

// We `fork()` these tasks so they execute in the background.
export function* rootSaga() {
    yield all([
        // App sagas
        fork(appSaga),
        fork(navigationSaga),
        fork(userApiSaga),

        // Business sagas
        fork(webRTCApiSaga),
    ]);
}
