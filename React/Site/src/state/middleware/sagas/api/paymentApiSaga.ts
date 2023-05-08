import { call, put, select, takeLatest } from 'redux-saga/effects'
import { IUser } from '../../../../models/IUser'
import { getUser } from '../../../contexts/user/Selectors'
import {
    GetPaymentsAction,
    GetPaymentsSuccessAction
} from '../../../contexts/user/Actions'
import { paymentApi } from '../../../../api/paymentApi'
import { IPayment } from '../../../../models/IPayment'

export default function* paymentApiSaga() {
    yield takeLatest(GetPaymentsAction.type, getPayments)
}

export function* getPayments() {
    const user: IUser = yield select(getUser)
    const response: IPayment[] = yield call(paymentApi.getPayments, user.id)

    if (response.length > 0) {
        yield put(GetPaymentsSuccessAction(response))
    }
}
