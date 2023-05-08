import toast from 'react-hot-toast'
import { call, put, select, takeLatest } from 'redux-saga/effects'
import { ec2InstanceApi, EC2Response } from '../../../../api/ec2InstanceApi'
import {
    CreateAction,
    CreateSuccessAction,
    TerminateAction
} from '../../../contexts/instance/Actions'
import { HttpStatusCode } from '../../../../enum/HttpStatusCode'
import { showLoading } from 'react-redux-loading-bar'
import { IUser } from '../../../../models/IUser'
import { getUser } from '../../../contexts/user/Selectors'
import { getSelectedHostRoom } from '../../../contexts/stream/Selectors'
import { HostRoom } from '../../../../API'
import { DashboardSection } from '../../../../enum/DashboardSection'
import {
    DeleteHostRoomAction,
    SetHostRoomAction,
    SetUserConnectionAction
} from '../../../contexts/stream/Actions'
import { SetDashboardSection } from '../../../contexts/app/Actions'

export default function* ec2InstanceSaga() {
    yield takeLatest(CreateAction.type, createInstance)
    yield takeLatest(TerminateAction.type, terminateInstance)
}

export function* terminateInstance() {
    try {
        toast.remove()

        yield put(SetUserConnectionAction(null))
        yield put(SetHostRoomAction(null))
        yield put(SetDashboardSection(DashboardSection.Overview))

        const selectedHostRoom: HostRoom | null = yield select(
            getSelectedHostRoom
        )

        if (selectedHostRoom) {
            yield put(DeleteHostRoomAction(selectedHostRoom.id))
        }

        const user: IUser = yield select(getUser)
        yield call(ec2InstanceApi.terminate, user.id)
    } catch (e: any) {
        toast.error('An error occurred')
    }
}

export function* createInstance() {
    try {
        yield put(showLoading())

        const user: IUser = yield select(getUser)
        const hostRoom: HostRoom = yield select(getSelectedHostRoom)

        const response: EC2Response = yield call(
            ec2InstanceApi.start,
            user.id,
            hostRoom.id
        )

        // const response: EC2Response = {
        //     message: '',
        //     status: HttpStatusCode.OK,
        //     launchTime: new Date(),
        //     hostRoomId: hostRoom.id
        // }

        toast.remove()

        if (response.status == HttpStatusCode.OK && response.launchTime) {
            yield put(CreateSuccessAction(response))
        }
        // else{
        //     toast.error("Failed to start instance: " + response.status)
        // }
    } catch (e: any) {
        toast.error(e.message)
    }
}
