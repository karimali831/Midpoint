import toast from 'react-hot-toast';
import { call, put, select, takeLatest } from "redux-saga/effects";
import { ec2InstanceApi, EC2Response } from "../../../../api/ec2InstanceApi";
import { CreateAction, CreateSuccessAction } from "../../../contexts/instance/Actions";
import { HttpStatusCode } from '../../../../enum/HttpStatusCode';
import { showLoading } from 'react-redux-loading-bar';
import { IUser } from '../../../../models/IUser';
import { getUser } from '../../../contexts/user/Selectors';

export default function* ec2InstanceSaga() {
    yield takeLatest(CreateAction.type, createInstance);
}

export function* createInstance() {
    try {

        yield put(showLoading())
        
        const user: IUser = yield select(getUser)
        const response : EC2Response = yield call(ec2InstanceApi.start, user.id)
        toast.remove();

        if (response.status == HttpStatusCode.OK) {
            yield put(CreateSuccessAction(response))
        }
        else{
            toast.error("Failed to start instance: " + response.status)
        }

    } catch (e: any) {
       toast.error(e.message)
    }
}