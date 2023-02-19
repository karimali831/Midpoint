import { all, fork } from 'redux-saga/effects';
import chatApiSaga from './api/chatApiSaga';
import ec2InstanceSaga from './api/ec2InstanceSaga';
import hostApiSaga from './api/hostApiSaga';
import stripeApiSaga from './api/stripeApiSaga';
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
        fork(hostApiSaga),
        fork(ec2InstanceSaga),
        fork(stripeApiSaga)
    ]);
}
