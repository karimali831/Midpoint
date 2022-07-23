import { takeLatest } from 'redux-saga/effects';
import { SetConnectionStateAction } from '../../../contexts/webrtc/Actions';

export default function* webRTCApiSaga() {
    yield takeLatest(SetConnectionStateAction.type, doSomething);
}

export function* doSomething() {
    try {
    } catch {
    } finally {
    }
}
