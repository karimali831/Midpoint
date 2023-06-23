import { call, put, select, takeLatest } from 'redux-saga/effects'
import { IUser } from '../../../../models/IUser'
import { getUser } from '../../../contexts/user/Selectors'
import {
    GetPaymentsAction,
    GetPaymentsFailureAction,
    GetPaymentsSuccessAction
} from '../../../contexts/user/Actions'
import { paymentApi } from '../../../../api/paymentApi'
import { IPayment } from '../../../../models/IPayment'

export default function* paymentApiSaga() {
    yield takeLatest(GetPaymentsAction.type, getPayments)
}

export function* getPayments() {
    try {
        const user: IUser = yield select(getUser)
        const response: IPayment[] = yield call(paymentApi.getPayments, user.id)

        yield put(GetPaymentsSuccessAction(response))
    } catch (e: any) {
        yield put(GetPaymentsFailureAction(e.message))
    }
}
