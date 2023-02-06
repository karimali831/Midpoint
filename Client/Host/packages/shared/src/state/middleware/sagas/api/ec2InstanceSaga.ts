import toast from 'react-hot-toast';
import { call, delay, put, takeLatest } from "redux-saga/effects";
import { ec2InstanceApi, EC2Response } from "../../../../api/ec2InstanceApi";
import { CreateAction, CreateSuccessAction } from "../../../contexts/instance/Actions";
import { HttpStatusCode } from '../../../../enum/HttpStatusCode';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

export default function* ec2InstanceSaga() {
    yield takeLatest(CreateAction.type, createInstance);
}

export function* createInstance() {
    try {

        yield put(showLoading())
        
        const response : EC2Response = yield call(ec2InstanceApi.start)
        toast.remove();

        if (response.status == HttpStatusCode.OK) {
            // toast.success("Instance created")
            yield put(CreateSuccessAction(response))
        }
        else{
            toast.error("Failed to start instance: " + response.status)
        }

    } catch (e: any) {
       toast.error(e.message)
    }
    // } finally {
    //     yield put(hideLoading())
    // }
}