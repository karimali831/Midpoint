import { all, fork } from 'redux-saga/effects';
import appSaga from './appSaga';
import navigationSaga from './navigationSaga';
import userApiSaga from './userApiSaga';

// We `fork()` these tasks so they execute in the background.
export function* rootSaga() {
    yield all([
        fork(navigationSaga),
        fork(appSaga),
        fork(userApiSaga)
    ]);
}
