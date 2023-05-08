import toast from 'react-hot-toast'
import { call, put, select, takeLatest } from 'redux-saga/effects'
import {
    IRetrieveSecretTokenApiResponse,
    stripeApi
} from '../../../../api/stripeApi'
import { IStripePricePlan } from '../../../../models/IStripePricePlan'
import { IUser } from '../../../../models/IUser'
import {
    CreatePaymentIntentAction,
    CreatePaymentIntentFailureAction,
    CreatePaymentIntentSuccessAction,
    GetPricingPlanAction,
    GetPricingPlanSuccessAction
} from '../../../contexts/checkout/Actions'
import { getUser } from '../../../contexts/user/Selectors'
import { PayloadAction } from '@reduxjs/toolkit'
import { getBasket } from '../../../contexts/checkout/Selectors'

export default function* stripeApiSaga() {
    yield takeLatest(GetPricingPlanAction.type, getPricingPlan)
    yield takeLatest(CreatePaymentIntentAction, createPaymentIntent)
}

export function* getPricingPlan() {
    try {
        const response: IStripePricePlan[] = yield call(
            stripeApi.getPricingModel
        )
        yield put(GetPricingPlanSuccessAction(response))
    } catch (e: any) {
        console.error(e)
        toast.error('Server error occurred')
    }
}

export function* createPaymentIntent(
    action: PayloadAction<string | undefined>
) {
    try {
        const user: IUser = yield select(getUser)
        const basket: IStripePricePlan[] = yield select(getBasket)

        const selectedPricePlan = basket[0]

        const response: IRetrieveSecretTokenApiResponse = yield call(
            stripeApi.createPaymentIntent,
            selectedPricePlan.id,
            user.id,
            action.payload
        )

        console.log(response)
        if (response) {
            yield put(CreatePaymentIntentSuccessAction(response))
        }

        if (response.errorMsg) {
            yield put(CreatePaymentIntentFailureAction(response.errorMsg))
        }
    } catch (e: any) {
        console.error(e)
        toast.error('Server error occurred')
    }
}
