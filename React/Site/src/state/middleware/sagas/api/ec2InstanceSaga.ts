import toast from 'react-hot-toast'
import { call, put, select, takeLatest } from 'redux-saga/effects'
import { ec2InstanceApi, EC2Response } from '../../../../api/ec2InstanceApi'
import {
    CreateAction,
    CreateFailureAction,
    CreateSuccessAction,
    GetInstancesAction,
    GetInstancesFailureAction,
    GetInstancesSuccessAction,
    StartingAction,
    TerminateAction
} from '../../../contexts/instance/Actions'
import { HttpStatusCode } from '../../../../enum/HttpStatusCode'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { IUser } from '../../../../models/IUser'
import { getUser } from '../../../contexts/user/Selectors'
import {
    getLoadingBar,
    getSelectedHostRoom
} from '../../../contexts/stream/Selectors'
import { HostRoom } from '../../../../API'
import { DashboardSection } from '../../../../enum/DashboardSection'
import {
    DeleteHostRoomAction,
    SetUserConnectionAction
} from '../../../contexts/stream/Actions'
import {
    SetDashboardSection,
    ShowPageAction
} from '../../../contexts/app/Actions'
import { IInstance } from '../../../../models/IStream'
import { getAppState } from '../../../contexts/app/Selectors'
import { IAppState } from '../../../contexts/app/IAppState'
import { Page } from '../../../../enum/Page'
import { getInstanceState } from '../../../contexts/instance/Selectors'
import { IInstanceState } from '../../../contexts/instance/IInstanceState'
import { Ec2InstanceStatus } from '../../../../enum/Ec2InstanceStatus'

export default function* ec2InstanceSaga() {
    yield takeLatest(CreateAction.type, createInstance)
    yield takeLatest(TerminateAction.type, terminateInstance)
    yield takeLatest(GetInstancesAction.type, getInstances)
}

export function* terminateInstance() {
    try {
        toast.remove()

        yield put(SetUserConnectionAction(null))
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
        const instance: IInstanceState = yield select(getInstanceState)
        yield put(StartingAction())

        const percentage: number | null = yield select(getLoadingBar)

        console.log(percentage)

        if (!instance.starting) {
            yield put(showLoading())
        }
        yield put(StartingAction())

        toast.loading('Launching new cloud instance...')
        const user: IUser = yield select(getUser)
        const hostRoom: HostRoom = yield select(getSelectedHostRoom)

        const response: EC2Response = yield call(
            ec2InstanceApi.start,
            user.id,
            hostRoom.id
        )

        toast.remove()

        console.log(response)

        if (
            response.statusCode == HttpStatusCode.OK &&
            response.launchTime &&
            response.state === Ec2InstanceStatus.Pending
        ) {
            yield put(showLoading())
            yield put(CreateSuccessAction(response))

            const app: IAppState = yield select(getAppState)

            if (app.page !== Page.Dashboard) {
                yield put(ShowPageAction(Page.Dashboard))
            }

            if (app.dashboardSection !== DashboardSection.Overview) {
                yield put(SetDashboardSection(DashboardSection.Start))
            }
        } else {
            yield put(hideLoading())
            yield put(CreateFailureAction(response.message))
        }
    } catch (e: any) {
        yield put(hideLoading())
        yield put(CreateFailureAction(e.message))
    }
}

export function* getInstances() {
    try {
        const user: IUser = yield select(getUser)
        const response: IInstance[] = yield call(
            ec2InstanceApi.getInstances,
            user.id
        )

        yield put(GetInstancesSuccessAction(response))
    } catch (e: any) {
        toast.error(e.message)
        yield put(GetInstancesFailureAction(e.message))
    }
}
