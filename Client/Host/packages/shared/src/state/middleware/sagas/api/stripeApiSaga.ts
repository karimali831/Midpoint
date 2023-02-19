import toast from 'react-hot-toast';
import { call, put, select, takeLatest } from "redux-saga/effects";
import { IRetrieveSecretTokenApiResponse, stripeApi } from '../../../../api/stripeApi';
import { IStripePricePlan } from '../../../../models/IStripePricePlan';
import { CreatePaymentIntentAction, CreatePaymentIntentFailureAction, CreatePaymentIntentSuccessAction, GetPricingPlanAction, GetPricingPlanSuccessAction } from '../../../contexts/checkout/Actions';
import { getSelectedPricePlan } from '../../../contexts/checkout/Selectors';

export default function* stripeApiSaga() {
    yield takeLatest(GetPricingPlanAction.type, getPricingPlan);
    yield takeLatest(CreatePaymentIntentAction, createPaymentIntent)
}

export function* getPricingPlan() {
    try {
        const response : IStripePricePlan[] = yield call(stripeApi.getPricingModel)
        yield put(GetPricingPlanSuccessAction(response))

    } catch (e: any) {
       toast.error("Server error occurred")
    } 
}

export function* createPaymentIntent() {
    try {

        const selectedPricePlan: IStripePricePlan = yield select(getSelectedPricePlan)
        const response : IRetrieveSecretTokenApiResponse = yield call(stripeApi.createPaymentIntent, selectedPricePlan.id)

        if (response.clientSecret) {
            yield put(CreatePaymentIntentSuccessAction(response.clientSecret))
        }

        if (response.errorMsg) {
            yield put(CreatePaymentIntentFailureAction(response.errorMsg))
        }

    } catch (e: any) {
       toast.error("Server error occurred")
    } 
}