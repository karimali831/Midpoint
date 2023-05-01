import { createAction } from '@reduxjs/toolkit';
import { IStripePricePlan } from '../../../models/IStripePricePlan';
import { IRetrieveSecretTokenApiResponse } from '../../../api/stripeApi';

// ACTION CREATORS
const SelectedPricePlanAction = createAction<IStripePricePlan | null>('@@Checkout/SelectedPricePlan');
const GetPricingPlanAction = createAction('@@Checkout/GetPricingPlan')
const GetPricingPlanSuccessAction = createAction<IStripePricePlan[]>('@@Checkout/GetPricingPlanSuccess')
const GetPricingPlanFailureAction = createAction('@@Checkout/GetPricingPlanFailure')

const CreatePaymentIntentAction = createAction<string | undefined>('@@Checkout/CreatePaymentIntent')
const CreatePaymentIntentSuccessAction = createAction<IRetrieveSecretTokenApiResponse>('@@Checkout/CreatePaymentIntentSuccess')
const CreatePaymentIntentFailureAction = createAction<string>('@@Checkout/CreatePaymentIntentFailureAction')

export {
    SelectedPricePlanAction,
    GetPricingPlanSuccessAction,
    GetPricingPlanAction,
    GetPricingPlanFailureAction,
    CreatePaymentIntentAction,
    CreatePaymentIntentSuccessAction,
    CreatePaymentIntentFailureAction
};

